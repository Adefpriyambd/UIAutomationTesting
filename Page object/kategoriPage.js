import HomePage from './homePage.js';

class KategoriPage extends HomePage{

    get tombolTambah(){
        return $('a[href="/categories/create"]')
    }
    
    get successMessage(){
        return $('//*[contains(text(),"success")]')
    }

    get itemDitambahkan(){
        return $('//*[contains(text(),"item ditambahkan")]')
    }

    get kolomNama () {
        return $('#nama')
    }
    
    get kolomDeskripsi () {
        return $('#deskripsi')
    }
    
    get tombolSimpan () {
        return $('//*[contains(text(),"simpan")]')
    }

    get errorMessage () {
        return $('div[role="alert"]')
    }
}
export default new KategoriPage();