import HomePage from './homePage.js';

class LoginPage extends HomePage {

    get kolomEmail() {
        return $('#email')
    }

    get kolomPassword() {
        return $('#password')
    }

    get tommbolLogin() {
        return $('#root > div > div > div > div.css-1w7v3tn > div > button')
    }

    get errorMessage() {
        return $('#root > div > div > div > div.css-1w7v3tn > div > div.chakra-alert.css-qwanz3')
    }

    open() {
        return super.open('https://kasirdemo.belajarqa.com')
    }

}

export default new LoginPage();