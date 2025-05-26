// import { ReactNode } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  pageId?: string;
}

export default function Layout({ children }: LayoutProps){
    return(
        <>
            <Head>
                <link rel='icon' href='../app/favicon.ico' />
            </Head>
            <Navbar />
                <main>{children}</main>
            <Footer />
        </>
    );
}

// const Layout = ({ children, pageId }: LayoutProps) => {
//   return (
//     <div id={pageId}>
//       <header>
//         <nav>Navbar</nav>
//       </header>
//       <main>{children}</main>
//       <footer>Footer</footer>
//     </div>
//   );
// };

// export default Layout;