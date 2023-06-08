import React from 'react'
import styled from 'styled-components'
import PageSection from 'components/PageSection'
import { useWeb3React } from '@web3-react/core'
import { Flex } from '@pancakeswap/uikit'
import useTheme from 'hooks/useTheme'
import Container from 'components/Layout/Container'
import Hero from './components/Hero'
import { swapSectionData, earnSectionData, cakeSectionData } from './components/SalesSection/data'
import MetricsSection from './components/MetricsSection'
import SalesSection from './components/SalesSection'
import WinSection from './components/WinSection'
import FarmsPoolsRow from './components/FarmsPoolsRow'
import Footer from './components/Footer'
import CakeDataRow from './components/CakeDataRow'
import { WedgeTopLeft, InnerWedgeWrapper, OuterWedgeWrapper, WedgeTopRight } from './components/WedgeSvgs'
import UserBanner from './components/UserBanner'
import FarmAuctionsBanner from './components/Banners/FarmAuctionsBanner'

const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 48px;
  }
`

const UserBannerWrapper = styled(Container)`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 0px;
  left: 50%;
  transform: translate(-50%, 0);
  padding-left: 0px;
  padding-right: 0px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const Home: React.FC = () => {
  const { theme } = useTheme()
  const { account } = useWeb3React()

  const HomeSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '968px' }

  return (
    <>
      <StyledHeroSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        background={
          theme.isDark
            ? 'linear-gradient(139.73deg, #0b0c22 0%, #08091b 100%)'
            : 'linear-gradient(139.73deg, #e1f8ff 0%, #40c5eb 100%)'
        }
        index={2}
        hasCurvedDivider={false}
      >
        {account && (
          <UserBannerWrapper>
            <UserBanner />
          </UserBannerWrapper>
        )}
      <Hero />
      </StyledHeroSection>

      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={
            theme.isDark
                ? 'linear-gradient(#08060b 0%, #08091b 100%)'
                : 'linear-gradient(#ffffff 0%, #f5f5f5 100%)'
        }
        index={2}
        hasCurvedDivider={false}
      >
        <SalesSection {...swapSectionData} />
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={
            theme.isDark
                ? 'linear-gradient(#08091b 0%, #08060b 100%)'
                : 'linear-gradient(#f5f5f5 0%, #e0f8ff 100%)'
        }
        index={2}
        hasCurvedDivider={false}
      >

      <SalesSection {...cakeSectionData} />
      <CakeDataRow />
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={
            theme.isDark
                ? 'linear-gradient(#08060b 0%, #08091b 100%)'
                : 'linear-gradient(#e0f8ff 0%, #a1eaff 100%)'
        }
        index={2}
        hasCurvedDivider={false}
      >
        <Footer />
      </PageSection>
    </>
  )
}

export default Home
