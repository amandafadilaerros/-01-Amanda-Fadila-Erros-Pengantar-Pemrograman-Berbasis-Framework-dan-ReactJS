import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Essays',
  description: 'Halaman tentang esai saya.',
  openGraph: {
      images: "https://example.com/default-image.jpg",
      url: "https://example.com",
  }
};

// export default function Essays(){
//   return (
//     <div className="mt-16 px-8">
//       <header>
//         <h1 className="font-blod text-4xl text-zinc-800">Esai</h1>
//       </header>
//     </div>
//   );
// }

export default function Esai() {
  return (
    <div className="min-h-screen px-8 pt-16 bg-gradient-to-b from-white to-blue-800 dark:from-black ">
      <header>
        <h1 className="font-bold text-4xl text-zinc-800 dark:text-white">Esai Saya</h1>
        <p className="text-base mt-6 text-zinc-600 dark:text-white">
          Berikut adalah beberapa esai yang telah saya tulis.
        </p>
      </header>

      <div className="mt-16">
        <ul>
          <li className="mb-6">
            <h2 className="text-xl font-semibold">Judul Esai Saya</h2>
            <p className="text-zinc-700 dark:text-white/75">Mohon maaf saya belum pernah menulis esai</p>
            <a href="/esai/1" className="text-blue-500 hover:text-blue-200">Baca Selengkapnya</a>
          </li>

          <li>
            <h2 className="text-xl font-semibold">Judul Esai Saya yang ke-2</h2>
            <p className="text-zinc-600 dark:text-white/75">Belum pernah menulis esai, hehe</p>
            <a href="/esai/2" className="text-blue-500 hover:text-blue-200">Baca Selengkapnya</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
