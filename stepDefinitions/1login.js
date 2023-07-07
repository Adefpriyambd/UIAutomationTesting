import { Given, When, Then } from '@cucumber/cucumber';
import LoginPage from '../POM/loginPage';
import DashboardPage from '../POM/dashboardPage';

Given('The user is on the login page', async () => {
    await LoginPage.open();
    await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/login');

});

When('The user inputs its email {string} and password {string}', async function (email, password) {
    await LoginPage.kolomEmail.setValue(email);
    await LoginPage.kolomPassword.setValue(password);
});

When('The user clicks on button login', async () => {
    await LoginPage.tommbolLogin.click();
})

Then('The user should see error message', async function () {
    await expect(LoginPage.errorMessage).toExist();
})

Then('The user should redirected to dashboard page', async () => {
    await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/dashboard');
    await expect(DashboardPage.teksKasirAja).toExist();
});