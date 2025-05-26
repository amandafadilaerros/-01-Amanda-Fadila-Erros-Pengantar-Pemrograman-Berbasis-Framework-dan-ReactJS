// import { ReactNode } from 'react';
// import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
// import { defaultMetadata } from '@/utils/metadata';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: any){
    // const metadata = children.props.metadata || defaultMetadata;
    
    return(
        <>
            {/* <Head>
                <link rel='icon' href='/favicon.ico' />
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description}/>
                <meta property="og:title" content={metadata.title}/>
                <meta property="og:description" content={metadata.description}/>
                <meta property="og:image" content={metadata.openGraph.image}/>
                <meta property="og:url" content={metadata.openGraph.url}/>
            </Head> */}
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