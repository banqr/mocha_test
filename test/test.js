function sharedDescribe() {
    var test = require('selenium-webdriver/testing')


    describe('Given Forgot Password page is open', function () {
        var driver = require('./driver').getDriver()
        

        before(function (done) {
            driver.get("http://127.0.0.1:8080")
            //driver.manage().timeouts().implicitlyWait(10000)
            done()
        })

        // after(function (done) {
        //     driver.quit()
        //     done()
        // })

        it('When the User resets the password',async  function (done) {
            
            console.log('uspeli smo')
            //await driver.sleep(5000)
            done()
        })

    })



}

describe('FEATURE: Reset User Password', function () {
    sharedDescribe()
})