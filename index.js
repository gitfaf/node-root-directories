const d = require('node-directories')
const os = require('os')

const rootDirectories = () => {
  const currentOs = os.type()
  const root = currentOs.toLowerCase().indexOf('windows') > -1 ? 'C:\\' : '/'
  return d(root)
}

module.exports = rootDirectories
