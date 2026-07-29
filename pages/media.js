import Head from 'next/head';
import mediaHtml from '../lib/content-media';

export default function Media() {
  return (
    <>
      <Head>
        <title>Media — GEMS World Dialogue</title>
        <meta
          name="description"
          content="TV coverage, official releases and press resources from the GEMS World Dialogue — a 50-nation pipeline turning diplomacy into visible, measurable action."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div dangerouslySetInnerHTML={{ __html: mediaHtml }} />
    </>
  );
}
