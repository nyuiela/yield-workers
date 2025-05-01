import { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  themeColor: '#0B4619',
};

export const metadata: Metadata = {
  title: 'Yield - Agricultural Asset Tokenization Platform',
  description: 'Transform agriculture through blockchain technology. Yield enables farmers, investors, and institutions to tokenize and trade agricultural assets securely and efficiently.',
  keywords: [
    'agricultural tokenization',
    'farm assets',
    'blockchain agriculture',
    'digital farming',
    'agricultural investment',
    'farm tokenization',
    'sustainable agriculture',
    'agritech',
    'yield farming',
    'agricultural marketplace'
  ],
  openGraph: {
    title: 'Yield - Revolutionizing Agricultural Investment',
    description: 'Democratizing agricultural investment through asset tokenization. Connect with farmers, invest in agriculture, and grow together.',
    type: 'website',
    locale: 'en_US',
    url: 'https://yieldit.co',
    siteName: 'Yield Platform',
    images: [
      {
        url: '/yield.png',
        width: 1200,
        height: 630,
        alt: 'Yield Platform Logo'
      }
    ]
  },
  icons: {
    icon: '/yield.png'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yield - Agricultural Asset Tokenization',
    description: 'Join the future of agricultural investment. Tokenize, trade, and grow with Yield.',
    images: ['/yield.png'],
    creator: '@nyuiela'
  },
  robots: {
    index: true,
    follow: true
  }
}; 