# Indonesia Public Static API

Kumpulan API statis dari data publik yang diterbitkan pemerintah Republik Indonesia. Dibuat dengan Next.js.

Oleh : [Yogi Saputro](https://yogski.github.io)

Sumber data : https://github.com/yogski/indonesian_public_data.

Live API : 

## Daftar Isi
- [Indonesia Public Static API](#indonesia-public-static-api)
  - [Daftar Isi](#daftar-isi)
  - [Dokumentasi](#dokumentasi)
    - [API Pahlawan Nasional Indonesia `/api/heroes`](#api-pahlawan-nasional-indonesia-apiheroes)
    - [API Gunung Berapi Indonesia `/api/volcanoes`](#api-gunung-berapi-indonesia-apivolcanoes)
    - [API Daftar Penerbit Buku Indonesia `/api/publishers`](#api-daftar-penerbit-buku-indonesia-apipublishers)
  - [FAQ / Pertanyaan](#faq--pertanyaan)


## Dokumentasi

### API Pahlawan Nasional Indonesia `/api/heroes`
| HTTP Method | Route | Parameter | Deskripsi | Contoh |
|--------|----------|------------|-----|-------|
| `GET`  | `/api/heroes` | - | Tampilkan data semua pahlawan nasional | `/api/heroes` |
| `GET`  | `/api/heroes?name=` | `name`: `string` | Cari pahlawan berdasarkan nama | `/api/heroes?name=nasution` |
| `GET`  | `/api/heroes?q=` | `q`: `string` | Cari pahlawan berdasarkan nama atau deskripsi atau kata kunci | `/api/heroes?q=angkatan` |
| `GET`  | `/api/heroes?alive_in_end=&alive_in_start=` | `alive_in_start`: `integer`, `alive_in_end`: `integer` | Cari pahlawan yang hidup di periode tertentu | `/api/heroes?alive_in_start=1900&alive_in_end=1945` |
| `GET`  | `/api/heroes?birth_year_start=&birth_year_end` | `birth_year_start`: `integer`, `birth_year_end`: `integer` | Cari pahlawan yang lahir di rentang tahun tertentu | `/api/heroes?birth_year_start=1900&birth_year_end=1945` |
| `GET`  | `/api/heroes?death_year_start=&death_year_end` | `death_year_start`: `integer`, `death_year_end`: `integer` | Cari pahlawan yang meninggal/gugur di rentang tahun tertentu | `/api/heroes?death_year_start=1900&death_year_end=1945` |
| `GET`  | `/api/heroes?ascend_year_start=&ascend_year_end` | `ascend_year_start`: `integer`, `ascend_year_end`: `integer` | Cari pahlawan yang diangkat sebagai pahlawan nasional di rentang tahun tertentu | `/api/heroes?ascend_year_start=1900&ascend_year_end=1945` |

### API Gunung Berapi Indonesia `/api/volcanoes`
| HTTP Method | Route | Deskripsi |
|--------|----------------|------------|
| `GET`  | `/api/volcanoes` | Informasi gunung berapi di Indonesia |

Parameter query API
| Param | Deskripsi | Tipe Data | Contoh |
|--------|-------|-----|------|
| `name` | Filter berdasarkan nama gunung | `string` | `/api/volcanoes?name=merapi` |
| `type` | Filter berdasarkan jenis gunung | `enum` : <br>`stratovulkan` <br>`kaldera` <br> `supervulkan`<br> `maar`<br> `fumarol`<br> `kubah lava`<br> `perisai`<br> `kerucut`<br> `kerucut bara`<br> `bawah laut`<br> `kompleks` | `/api/volcanoes?type=kompleks` |
| `min_height` | Filter berdasarkan ketinggian minimum (dalam meter) | `integer / number` | `/api/volcanoes?min_height=1800` |
| `max_height` | Filter ketinggian maksimum (dalam meter) | `integer / number` | `/api/volcanoes?max_height=2800` |

Berbagai parameter query dapat digunakan secara bersamaan. Misal ingin mencari gunung tipe stratovulkan dengan ketinggian di bawah 3000 meter, gunakan query berikut : `/api/volcanoes?type=stratovulkan&max_height=3000`.

### API Daftar Penerbit Buku Indonesia `/api/publishers`

| HTTP Method | Route | Deskripsi |
|--------|----------------|------------|
| `GET`  | `/api/publishers` | Informasi penerbit buku Indonesia yang terdaftar di IKAPI |

Parameter query API
| Param | Deskripsi | Tipe Data | Contoh |
|--------|-------|-----|------|
| `name` | Filter berdasarkan nama penerbit | `string` | `/api/publishers?name=pustaka` |
| `area` | Filter berdasarkan kode wilayah yang dipilih. Lihat tabel list kode wilayah di bawah untuk keterangan lebih lanjut | `string[]` | `/api/publishers?area=3&area=10&area=16` |
| `registered_year_start` | Filter berdasarkan tahun masuk IKAPI (batas bawah) | `integer / number` | `/api/publishers?registered_year_start=2000` |
| `registered_year_end` | Filter berdasarkan tahun masuk IKAPI (batas atas)| `integer / number` | `/api/publishers?registered_year_end=2005` |
| `count_only` | Tampilkan hanya jumlah data| `boolean (0 atau 1)` | `/api/publishers?count_only=1` |


Semua parameter query dapat dikombinasikan untuk pencarian spesifik. Contoh:
- Penerbit wilayah DI Yogyakarta yang didirikan sebelum 1995 --> `/api/publishers?area=7&registered_year_end=1995`.
- Penerbit dengan nama 'Bintang' yang didirikan antara 2010 dan 2020 --> `/api/publishers?name=bintang&registered_year_start=2010&registered_year_end=2020`
- Jumlah penerbit di wilayah Jawa Tengah dan Jawa Timur --> `/api/publishers?area=5&area=6&count_only=1`

## FAQ / Pertanyaan
> Apakah API ini bisa diakses gratis?

_Ya, API ini bisa diakses secara gratis. Minimal untuk saat ini._

> Apakah saya harus login untuk akses API ini?

_Tidak, anda tak perlu login atau meminta akses API key. Setidaknya untuk saat ini._

> Apakah saya boleh request data untuk ditampilkan di API ini?

_Ya, anda bisa mengajukan lewat issue._

> Apakah saya bisa berkontribusi di repository ini?

_Tentu saja! Saya sangat apresiasi dukungan kontribusi. Proyek ini mengikuti semangat open source. Semakin banyak kontribusi, semakin baik. Anda bisa tambahkan data, atau membuat API dari data publik yang tersedia._

> Apakah API ini menggunakan database ?

_Tidak, sumber data API ini adalah file JSON yang tersedia di folder `data_source`._

> Apakah saya boleh mengambil data JSON untuk proyek saya ?

_Boleh, dengan syarat anda memberikan credit kepada repository ini sebagai sumber data. Ini sejalan dengan syarat lisensi MIT._