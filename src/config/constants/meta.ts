import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'LOIS',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by LOIS SWAP), NFTs, and more, on a platform you can trust.',
  image: 'https://LOIS.zone/logo.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('LOIS SWAP')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('LOIS SWAP')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('LOIS SWAP')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('LOIS SWAP')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('LOIS SWAP')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('LOIS SWAP')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('LOIS SWAP')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('LOIS SWAP')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('LOIS SWAP')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('LOIS SWAP')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('LOIS SWAP')}`,
      }
    default:
      return null
  }
}
