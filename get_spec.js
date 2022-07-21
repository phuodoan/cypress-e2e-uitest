const glob = require('glob')

const specPath ='cypress/e2e'
const files = glob.sync(`${specPath}/*.js`)
process.stdout.write(JSON.stringify(files))
