// app/head.tsx

import { defaultMetadata } from '@/utils/metadata';

export default function Head({ children }: any) {
    const metadata = children.props.metadata || defaultMetadata;
    return (
      <>
        <link rel='icon' href='/favicon.ico' />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description}/>
        {/*Open Graph Tags*/}
        <meta property="og:title" content={metadata.title}/>
        <meta property="og:description" content={metadata.description}/>
        <meta property="og:image" content={metadata.openGraph.image}/>
        <meta property="og:url" content={metadata.openGraph.url}/>
      </>
    )
  }
  