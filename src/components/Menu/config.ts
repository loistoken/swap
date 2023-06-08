import { MenuEntry } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/pool',
      },
    ],
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Lottery'),
    icon: 'TicketIcon',
    href: '/lottery',
  },
  {
    label: t('IFO'),
    icon: 'IfoIcon',
    href: '/ifo',
  },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      {
        label: t('Contact'),
        href: 'https://lois.zone/contact',
      },
      {
        label: t('Voting'),
        href: '/voting',
      },
      {
        label: t('Github'),
        href: 'https://github.com/loistoken',
      },
      {
        label: t('Docs'),
        href: 'https://lois.zone/whitepaper/loiscoin.pdf',
      },
      {
        label: t('Blog'),
        href: 'https://lois.zone/blog',
      },
      {
        label: t('Merch'),
        href: 'https://lois.zone/',
      },
    ],
  },
]

export default config
