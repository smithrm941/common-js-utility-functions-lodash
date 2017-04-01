const path = require('path')
const config = require(
    path.resolve(process.env.HOME, '.eslintrc.js')
)

config.globals = {
    'describe': true,
    'it': true,
}



module.exports = config
