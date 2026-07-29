import Head from 'next/head';
import eventsHtml from '../lib/content-events';

export default function Events() {
  return (
    <>
      <Head>
        <title>Past Events — GEMS World Dialogue</title>
        <meta
          name="description"
          content="A record of the events, launches and partnerships held under GEMS World Dialogue across cities and nations."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div dangerouslySetInnerHTML={{ __html: eventsHtml }} />
    </>
  );
}
