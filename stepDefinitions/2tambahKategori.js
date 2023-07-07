import { Given, When, Then } from '@cucumber/cucumber';
import LoginPage from '../POM/loginPage';
import DashboardPage from '../POM/dashboardPage';
import KategoriPage from '../POM/kategoriPage';

Given('The user successfully logged in with the correct email {string} and password {string}', async function (email, password) {
    await LoginPage.open()
    await LoginPage.kolomEmail.setValue(email);
    await LoginPage.kolomPassword.setValue(password);
    await LoginPage.tommbolLogin.click();
});

Given('The user on the categories page', async () => {
    await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/categories');
    await expect(DashboardPage.teksKasirAja).toExist();
})

Given('The user on the categories create page', async () => {
    await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/categories/create');
    await expect(DashboardPage.teksKasirAja).toExist();
})

Then ('The user redirects to the dashboard page', async () => {
    await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/dashboard');
    await expect(DashboardPage.teksKasirAja).toExist();
});

When('The user clicks on button menu kategori', async () => {
    await DashboardPage.tombolKategori.click();
});

When('The user clicks on button tambah', async () => {
    await KategoriPage.tombolTambah.click();
});

When('The user inputs nama kategori {string} and deskripsi {string}', async function (namaKategori, deskripsi) {
    await KategoriPage.kolomNama.setValue(namaKategori);
    await KategoriPage.kolomDeskripsi.setValue(deskripsi);
});

When('The user clicks on button simpan', async () => {
    await KategoriPage.tombolSimpan.click();
})

Then('The user should see a successful message {string} {string}', async (sukses, pesan) => {
    await expect(KategoriPage.successMessage).toExist()
    await expect(KategoriPage.successMessage).toHaveTextContaining(sukses);
    await expect(KategoriPage.itemDitambahkan).toExist()
    await expect(KategoriPage.itemDitambahkan).toHaveTextContaining(pesan);
});

Then('The user should see an error message', async ()=>{
    await expect(KategoriPage.errorMessage).toExist()
})