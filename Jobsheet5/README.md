This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



## Laporan Praktikum

|  | Pemrograman Berbasis Framework 2024 |
|--|--|
| NIM |  2241720089 |
| Nama |  Putra Nindya Yuwana |
| Kelas | TI - 3C |


### Praktikum 1: Menyiapkan Lingkungan

1. Pas kan Node.js dan npm sudah terinstal di komputer Anda. Anda dapat memeriksanya dengan menjalankan perintah berikut di terminal atau command prompt: node -v npm -v	

![Screenshot](assets-report/11.png)

2. Buat direktori baru untuk proyek Next.js Anda: mkdir website-pribadi cd website-pribadi	 

![Screenshot](assets-report/12.png)

3. Inisialisasi proyek Next.js dengan TypeScript dan App Router: npx create-next-app@latest . --typescript –app	 

![Screenshot](assets-report/13.png)

4. Cek konfigurasi postcss.config.mjs. Cek di app/globals.css, sudah ada import untuk tailwindcss. Lalu buka app/layout.tsx, tambahkan import ‘./globals.css’, dan modifikasi menjadi sebagai berikut:

![Screenshot](assets-report/14.png)

5. Jalankan aplikasi Next.js:

![Screenshot](assets-report/15.png)


### Praktikum 2: Membuat Halaman Website

1. Buat file app/page.tsx sebagai halaman "Tentang Saya":

![Screenshot](assets-report/21.png)

2. Buat file app/projects/page.tsx sebagai halaman "Proyek":

![Screenshot](assets-report/22.png)

3. Buat file app/essays/page.tsx sebagai halaman "Esai":	 

![Screenshot](assets-report/23.png)

4. Buka browser dan akses:
 - http://localhost:3000/ untuk halaman "Tentang Saya". 
 - http://localhost:3000/projects untuk halaman "Proyek".
 - http:://localhost:3000/essays untuk halaman "Esai".	   

![Screenshot](assets-report/24a.png)

![Screenshot](assets-report/24b.png)

![Screenshot](assets-report/24c.png)


### Praktikum 3: Membuat Layout dan Navigasi

1. Buat direktori src/components jika belum ada. Lalu buat file src/components/Layout.tsx:	 

![Screenshot](assets-report/31.png)

2. Buat file src/components/Navbar.tsx

![Screenshot](assets-report/32.png)

3. Buat file src/components/Footer.tsx

![Screenshot](assets-report/33.png)

4. Update file app/layout.tsx untuk menggunakan layout:

![Screenshot](assets-report/34.png)

5. Update setiap halaman menambahkan metadata dengan generateMetadata:

![Screenshot](assets-report/35a.png)

![Screenshot](assets-report/35b.png)

![Screenshot](assets-report/35c.png)

6. Lakukan hal yang sama untuk halaman projects/page.tsx dan essays/page.tsx.	 

![Screenshot](assets-report/36.png)


### Praktikum 4: Membuat Halaman Proyek dengan Grid Responsif

1. Buat folder di public/images. Kemudian tambahkan dua image, lalu rename dengan nama project1.png dan project2.png

![Screenshot](assets-report/41.png)

2. Modifikasi file app/projects/page.tsx:

![Screenshot](assets-report/42.png)

3. Simpan file dan buka http://localhost:3000/projects di browser. Anda akan melihat da ar proyek dalam grid yang responsif.	 

![Screenshot](assets-report/43.png)

### Tugas

#### Eksplorasi Tailwindcss, kemudian:
1. Modifikasi halaman "Esai" dengan Grid da ar ar kel yang telah ditulis	
2. Modifikasi halaman “Tentang Saya” Buat tampilan yang menarik	

##### Code

![Screenshot](assets-report/t1.png)
![Screenshot](assets-report/t2.png)
![Screenshot](assets-report/t3.png)
![Screenshot](assets-report/t4.png)
![Screenshot](assets-report/t5.png)

##### Output
![Screenshot](assets-report/o1.png)
![Screenshot](assets-report/o2.png)
![Screenshot](assets-report/o3.png)
![Screenshot](assets-report/o4.png)
![Screenshot](assets-report/o5.png)
![Screenshot](assets-report/o6.png)



~ ~ TERIMA KASIH ~ ~

