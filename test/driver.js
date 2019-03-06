require('chromedriver')
const webdriver = require('selenium-webdriver')

const getDriver = function() {
    driver = buildDriver()
    return driver
}

const buildDriver = function() {
    switch (process.env.PLATFORM) {
        case 'FIREFOX':
            withCapabilities(webdriver.Capabilities.firefox()).
                build()
        default:
            return new webdriver.Builder().
                withCapabilities(webdriver.Capabilities.chrome()).
                build()
    }
}
module.exports.getDriver = getDriver