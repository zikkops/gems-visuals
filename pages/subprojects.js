import Head from 'next/head';
import subprojectsHtml from '../lib/content-subprojects';

export default function Subprojects() {
  return (
    <>
      <Head>
        <title>Sub-Projects — GEMS World Dialogue</title>
        <meta
          name="description"
          content="The initiatives that carry the GEMS World Dialogue mission into practice — from capital and education to culture and the public record."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div dangerouslySetInnerHTML={{ __html: subprojectsHtml }} />
    </>
  );
}
