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
  - [FAQ / Pertanyaan](#faq--pertanyaan)


## Dokumentasi

### API Pahlawan Nasional Indonesia `/api/heroes`
| HTTP Method | Route | Parameter | Deskripsi | Contoh |
|--------|----------|------------|-----|-------|
| `GET`  | `/api/heroes` | - | Tampilkan data semua pahlawan nasional | `/api/heroes` |
| `GET`  | `/api/heroes?name=` | `name`: `string` | Cari pahlawan berdasarkan nama | `/api/heroes?name=nasution` |
| `GET`  | `/api/heroes?q=` | `q`: `string` | Cari pahlawan berdasarkan nama atau deskripsi atau kata kunci | `/api/heroes?q=angkatan` |
| `GET`  | `/api/heroes?is_alive_max=&is_alive_min` | `is_alive_min`: `integer`, `is_alive_max`: `integer` | Cari pahlawan yang hidup di periode tertentu | `/api/heroes?is_alive_min=1900&is_alive_max=1945` |
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
| `type` | Filter berdasarkan jenis gunung | `enum` : `stratovulkan`, `kaldera`, `supervulkan`, `maar`, `fumarol`, `kubah lava`, `perisai`, `kerucut`, `kerucut bara`, `bawah laut`, `kompleks` | `/api/volcanoes?type=kompleks` |
| `min_height` | Filter berdasarkan ketinggian minimum (dalam meter) | `integer / number` | `/api/volcanoes?min_height=1800` |
| `max_height` | Filter ketinggian maksimum (dalam meter) | `integer / number` | `/api/volcanoes?max_height=2800` |

Berbagai parameter query dapat digunakan secara bersamaan. Misal ingin mencari gunung tipe stratovulkan dengan ketinggian di bawah 3000 meter, gunakan query berikut : `/api/volcanoes?type=stratovulkan&max_height=3000`.

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