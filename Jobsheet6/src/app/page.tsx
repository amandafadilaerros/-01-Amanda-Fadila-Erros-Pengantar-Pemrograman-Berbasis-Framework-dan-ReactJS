import { Metadata } from "next";
import { defaultMetadata } from "@/utils/metadata";

export const metadata: Metadata = {
  title: 'Tentang Saya',
  description: 'Halaman tentang saya.',
  openGraph: {
      images: "https://example.com/default-image.jpg",
      url: "https://example.com",
  }
};

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-blue-800 p-8  dark:from-black">
      <div className="relative bg-white/50 dark:bg-gray-800/50  backdrop-blur-lg shadow-lg rounded-3xl p-8 max-w-2xl text-center dark:text-white/65 text-gray-700">
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img
            src="https://media.licdn.com/dms/image/v2/D4E03AQFPFgo-seL1eQ/profile-displayphoto-shrink_800_800/B4EZauMSYKGQAc-/0/1746679180521?e=1752105600&v=beta&t=pbYvJCGmgZdUfXZv-VMQXdOocAIv_8o6CrXJNzeqwBY"
            alt="Profil Saya"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-3xl font-bold mt-4">Putra Nindya Yuwana</h1>
        <p className="mt-2">Back End Dev | Data Engineer Enthusiast</p>
        <p className="mt-4 leading-relaxed">
          Saya adalah mahasiswa Teknik Informatika yang memiliki ketertarikan dalam pengembangan perangkat lunak, data, dan teknologi web.
        </p>

        <div className="flex justify-center space-x-4 mt-6">
          <a href="https://github.com/ptryuwana" className="text-xl hover:text-gray-300 transition">
            🔗 GitHub
          </a>
          <a href="https://linkedin.com/in/ptryuwana" className="text-xl hover:text-gray-300 transition">
            🔗 LinkedIn
          </a>
          <a href="mailto:ptryuwana20@gmail.com" className="text-xl hover:text-gray-300 transition">
            📧 Email
          </a>
        </div>

        <div className="mt-6">
          <a
            href="https://drive.google.com/file/d/1lJ2kmSD6oSS4p_dk2ZvnmffAO4zKUYqv/view?usp=sharing"
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            Lihat Portofolio
          </a>
        </div>
      </div>
    </div>
  );
}



// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
