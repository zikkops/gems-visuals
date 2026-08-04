import Head from 'next/head';
import { useEffect, useRef } from 'react';
import pageHtml from '../lib/content';
import initInteractions from '../lib/initInteractions';

export default function HomePage() {
  const rootRef = useRef(null);

  useEffect(() => {
    const cleanup = initInteractions();
    return cleanup;
  }, []);

  return (
    <>
      <Head>
        <title>GEMS World Dialogue — Dialogue in Action</title>
        <meta
          name="description"
          content="GEMS World Dialogue is a Beverly Hills–born, outcome-driven initiative bringing power players from 50 nations into one transparent execution pipeline to accelerate the UN Sustainable Development Goals. Dialogue in Action."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Montserrat:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div ref={rootRef} dangerouslySetInnerHTML={{ __html: pageHtml }} />
    </>
  );
}
