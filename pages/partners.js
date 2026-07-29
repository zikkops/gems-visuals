import Head from 'next/head';
import partnersHtml from '../lib/content-partners';

export default function Partners() {
  return (
    <>
      <Head>
        <title>Partners — GEMS World Dialogue</title>
        <meta
          name="description"
          content="GEMS World Dialogue turns diplomacy into visible action alongside partners who bring capital, campus, venue, culture and community to the table."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div dangerouslySetInnerHTML={{ __html: partnersHtml }} />
    </>
  );
}
