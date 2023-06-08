import { SalesSectionProps } from '.'

export const swapSectionData: SalesSectionProps = {
  headingText: 'Exchange any cryptocurrency, No limit, No registration.',
  bodyText: 'Have access in seconds to any token on Binance Smart Chain to SWAP with your preferred cryptocurrency!.',
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: 'Trade Now',
    external: false,
  },
  secondaryButton: {
    to: 'https://lois.zone/',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/trade/',
    attributes: [
      // { src: 'BNB', alt: 'BNB token' },
      // { src: 'BTC', alt: 'BTC token' },
      { src: 'CAKE', alt: 'CAKE token' },
    ],
  },
}

export const earnSectionData: SalesSectionProps = {
  headingText: 'Earn passive income with crypto.',
  bodyText: 'LOIS makes it easy to make your crypto work for you.',
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: 'Explore',
    external: false,
  },
  secondaryButton: {
    to: 'https://lois.zone/',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [
      { src: 'pie', alt: 'Pie chart' },
      { src: 'stonks', alt: 'Stocks chart' },
      { src: 'folder', alt: 'Folder with cake token' },
    ],
  },
}

export const cakeSectionData: SalesSectionProps = {
  headingText: 'LOIS Token brings lots of opportunities.',
  bodyText:
    'LOIS Token is the core of LOIS SWAP ecosystem. Get your LOIS wallet today, then buy, farm, stake even win it in the Lottery and spend it!',
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0xad09104083d182d067cae2a123c6f1b052d2ea42',
    text: 'Buy LOIS',
    external: false,
  },
  secondaryButton: {
    to: 'https://lois.zone/',
    text: 'Learn',
    external: true,
  },

  images: {
    path: '/images/home/cake/',
    attributes: [
      { src: 'coin', alt: 'CAKE token' },
      // { src: 'bottom-right', alt: 'Small 3d pancake' },
      // { src: 'top-right', alt: 'Small 3d pancake' },
      // { src: 'top-left', alt: 'Small 3d pancake' },
    ],
  },
}
