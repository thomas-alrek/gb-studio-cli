import path from 'path'
import { MAX_ACTORS, MAX_TRIGGERS } from 'gb-studio/src/consts'

const root = path.resolve(path.join(__dirname, '../node_modules/gb-studio'))

const engineRoot = path.join(root, 'appData/src')
const buildToolsRoot = path.join(root, 'buildTools')
const emulatorRoot = path.join(root, 'appData/js-emulator')
const projectTemplatesRoot = path.join(root, 'appData/templates')

export {
  engineRoot,
  buildToolsRoot,
  emulatorRoot,
  projectTemplatesRoot,
  MAX_ACTORS,
  MAX_TRIGGERS
}
