import Head from 'next/head';

export default function ComingSoon() {
  return (
    <>
      <Head>
        <title>Coming Soon — GEMS World Dialogue</title>
        <meta
          name="description"
          content="GEMS World Dialogue — Dialogue in Action. Our new site is on its way."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div id="coming-soon-page">
        <video
          className="cs-video"
          src="/videos/coming-soon.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
      </div>
    </>
  );
}
