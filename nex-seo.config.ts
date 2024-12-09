const SEO = {
  title: 'My Website',
  description: 'This is my website',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.mywebsite.com/',
    site_name: 'My Website',
    images: [
      {
        url: 'https://www.mywebsite.com/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'Og Image Alt',
      },
    ],
  },
  twitter: {
    handle: '@myhandle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};

export default SEO;
