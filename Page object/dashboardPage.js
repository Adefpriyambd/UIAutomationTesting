import HomePage from './homePage.js';

class DashboardPage extends HomePage {

    get teksKasirAja () {
        return $('//h3[contains(text(),"kasirAja")]')
    }

    get tombolKategori () {
        return $('a[href="/categories"]')
    }
}
export default new DashboardPage();