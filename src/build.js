import fs from 'fs'
import util from 'util'
import path from 'path'
import * as ncp from 'ncp'
import { remote } from './electron'
import { move, pathExists } from 'fs-extra'
import rimraf from 'rimraf'
import { exists } from 'fs-extra'
import buildProject from 'gb-studio/src/lib/compiler/buildProject'

const readFile = util.promisify(fs.readFile)
const copy = util.promisify(ncp)
const rm = util.promisify(rimraf)

const resolveProject = async root => {
  const filenames = [
    `${path.basename(root)}.gbsproj`,
    'project.gbsproj',
    'project.json'
  ].map(name => `${path.join(root, name)}`)

  for (const name of filenames) {
    if (await exists(name)) {
      return name
    }
  }

  return false
}

export default async ({ path: projectRoot, output, type }) => {
  let projectFile = await resolveProject(projectRoot)

  if (projectFile) {
    const project = JSON.parse(await readFile(projectFile))

    if (await pathExists(path.join(projectRoot, '.build'))) {
      await rm(path.join(projectRoot, '.build'))
    }

    await buildProject(project, {
      projectRoot,
      buildType: type ? type : 'rom',
      outputRoot: path.join(projectRoot, '.build'),
      tmpPath: '/tmp',
      progress: console.log,
      warnings: console.error
    })

    const outdir = output ? path.resolve(output) : path.join(projectRoot, 'build')

    await move(path.join(projectRoot, '.build/build'), outdir, { overwrite: true })
    await Promise.all([
      rm(remote.app.getPath('')),
      rm(path.join(projectRoot, 'temp')),
      rm(path.join(projectRoot, '.build'))
    ])
  } else {
    console.error('Not a valid GB Studio project')
    process.exit(1)
  }
}
