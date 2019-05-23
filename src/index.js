import yargs from 'yargs'
import build from './build'
import path from 'path'

const commands = ['build']

const argv = yargs.command('build [path] [output]', 'Build the project', yargs => {
  yargs.positional('path', {
    describe: 'path to project',
    default: process.cwd()
  })
  yargs.positional('output', {
    describe: 'outdir',
    default: null
  })
  yargs.option('t', {
    alias : 'type',
    describe: 'output type',
    type: 'string',
    nargs: 1,
    demand: false,
    default: 'rom'
  })
}, async argv => {
  try {
    process.argv.path = argv.path
    await build(argv)
  } catch (error) {
    console.error('Build failed', error.message)
    process.exit(1)
  }
}).demandCommand().argv

if (!commands.includes(argv._[0])) {
  yargs.showHelp()
  process.exit(1)
}
