import { Metadata } from "next";
import Image, { StaticImageData } from "next/image";
import image1 from '../../../public/images/project1.png';
import image2 from '../../../public/images/project2l.jpg';
import image3 from '../../../public/images/project3.jpg';
// import { url } from "inspector";

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Halaman tentang project saya.',
  openGraph: {
      images: "https://example.com/default-image.jpg",
      url: "https://example.com",
  }
};

// export default function Projects(){
//   return (
//     <div className="mt-16 px-8">
//       <header>
//         <h1 className="font-blod text-4xl text-zinc-800">Project</h1>
//       </header>
//     </div>
//   );
// }

type ProjectItemProps ={
  name: string;
  url: string;
  urlDisplay: string;
  imageSrc: StaticImageData;
};

function ProjectItem({name, url, urlDisplay, imageSrc}: ProjectItemProps){
  return(
    <li className="pb-10">
      <a href={url}>
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white/50 dark:text-white/65 dark:bg-gray-800/65">
          <Image className="w-full h-full aspect-video object-fill rounded-lg" src={imageSrc} alt={name}/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{name}</div>
          </div>
          <div className="px-6 pb-4">
            <span className="inline-block bg-gray-200 dark:bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-700 mr-2 mb-2">
              {urlDisplay}
            </span>
          </div>
        </div>
      </a>
    </li>
  );
}

export default function Projects(){
  return(
    <div className="min-h-screen px-8 pt-16  bg-white dark:bg-black bg-gradient-to-b from-white to-blue-800 p-8 dark:from-black">
      <header>
        <h1 className="font-bold text-4xl text-zinc-800 dark:text-white">Proyek Saya</h1>
        <p className="text-base mt-6 text-zinc-600 dark:text-white">Berikut adalah beberapa proyek yang telah saya kerjakan.</p>
      </header>
      <div className="mt-16">
        <h2 className="text-2xl">Aplikasi</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mt-8">
          <ProjectItem name="Aplikasi 1" url="https://www.linkedin.com/in/ptryuwana/" urlDisplay="Kantin JTI Polinema" imageSrc={image1} />
          <ProjectItem name="Aplikasi 2" url="https://www.linkedin.com/in/ptryuwana/" urlDisplay="Portal RW" imageSrc={image2} />
          <ProjectItem name="Aplikasi 3" url="https://www.linkedin.com/in/ptryuwana/" urlDisplay="Presensia" imageSrc={image3} />
        </ul>
      </div>
    </div>
  );
}