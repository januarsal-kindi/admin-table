const withSass = require('@zeit/next-sass')  // Add this declaration
const path = require('path')

module.exports = withSass({
    webpack: (config) => {
        config.resolve.alias['@stylePages'] = path.join(__dirname, 'styles')
        config.resolve.alias['@helper'] = path.join(__dirname, 'helper')
        config.resolve.alias['@store'] = path.join(__dirname, 'store')
        config.resolve.alias['@config'] = path.join(__dirname, 'config')
        config.resolve.alias['@components'] = path.join(__dirname, 'components')

        return config
    }
})