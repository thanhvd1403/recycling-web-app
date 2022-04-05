import Head from 'next/head';
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants';

export default function Meta() {
  return (
    <Head>
      <link rel='apple-touch-icon' sizes='180x180' href='/favicons/logo.png' />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicons/logo.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicons/logo.png'
      />
      <link rel='manifest' href='/favicons/site.webmanifest' />
      <link
        rel='mask-icon'
        href='/favicons/safari-pinned-tab.svg'
        color='#000000'
      />
      <link rel='shortcut icon' href='/favicons/icon.png' />
      <meta name='msapplication-TileColor' content='#000000' />
      <meta name='msapplication-config' content='/favicons/browserconfig.xml' />
      <meta name='theme-color' content='#000' />
      <link rel='alternate' type='application/rss+xml' href='/feed.xml' />
      <meta name='description' content={`OneStop E-waste recycling`} />
      <meta property='og:image' content={HOME_OG_IMAGE_URL} />
    </Head>
  );
}
