@Tambahkategori
Feature: Testing the category in kasirAja

    @Test1
    Scenario: The user wants to do positive test
        Given The user successfully logged in with the correct email "jaya45@mail.com" and password "12345"
        Then The user redirects to the dashboard page
        When The user clicks on button menu kategori
        When The user clicks on button tambah
        When The user inputs nama kategori "<namaKategori>" and deskripsi "<deskripsi>"
        When The user clicks on button simpan
        Then The user should see a successful message "<sukses>" "<pesan>"
        Examples:
            | namaKategori       | deskripsi             | sukses    | pesan             |
            | Barang mudah pecah | berbahan kaca         | success   | item ditambahkan  |

    Scenario: The user wants to do positive test, an fill the blank in deskripsi column
        Given The user on the categories page
        When The user clicks on button menu kategori
        When The user clicks on button tambah
        When The user inputs nama kategori "<namaKategori>" and deskripsi "<deskripsi>"
        When The user clicks on button simpan
        Then The user should see a successful message "<sukses>" "<pesan>"
        Examples:
            | namaKategori       | deskripsi             | sukses    | pesan             |
            | Barang elektronik  |                       | success   | item ditambahkan  |

    Scenario: The user just inputs on deskripsi column
            Given The user on the categories page
            When The user clicks on button menu kategori
            When The user clicks on button tambah
            When The user inputs nama kategori "<namaKategori>" and deskripsi "<deskripsi>"
            When The user clicks on button simpan
            Then The user should see an error message

            Examples:
                | namaKategori      | deskripsi             |
                |                   | berbahan kaca         |   

    Scenario: The user doesn't input anything on nama and deskripsi columns
            Given The user on the categories create page
            When The user clicks on button menu kategori
            When The user clicks on button tambah
            When The user inputs nama kategori "<namaKategori>" and deskripsi "<deskripsi>"
            When The user clicks on button simpan
            Then The user should see an error message

            Examples:
                | namaKategori      | deskripsi             |
                |                   |                       |   