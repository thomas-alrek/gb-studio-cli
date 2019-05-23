import fs from 'fs'
import util from 'util'
import UUID from 'uuid4'
import { join, resolve } from 'path'

const id = UUID()
const tmp = join('/tmp', id)
fs.mkdirSync(tmp)

export const remote = {
  app: {
    getLocale: () => 'en',
    getPath: path => resolve(join(tmp, path))
  }
}

export default {
  remote
}
