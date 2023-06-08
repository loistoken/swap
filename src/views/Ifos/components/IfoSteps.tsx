import React from 'react'
import styled from 'styled-components'
import every from 'lodash/every'
import { Stepper, Step, StepStatus, Card, CardBody, Heading, Text, Button, Link, OpenNewIcon } from '@pancakeswap/uikit'
import { BASE_ADD_LIQUIDITY_URL } from 'config'
import { Ifo } from 'config/constants/types'
import { WalletIfoData } from 'views/Ifos/types'
import { useTranslation } from 'contexts/Localization'
import useTokenBalance from 'hooks/useTokenBalance'
import Container from 'components/Layout/Container'
import { useProfile } from 'state/profile/hooks'
import { getAddress } from 'utils/addressHelpers'

interface Props {
  ifo: Ifo
  walletIfoData: WalletIfoData
}

const Wrapper = styled(Container)`
  background: ${({ theme }) => theme.colors.gradients.bubblegum};
  margin-left: -16px;
  margin-right: -16px;
  padding-top: 48px;
  padding-bottom: 48px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: -24px;
    margin-right: -24px;
  }
`

const IfoSteps: React.FC<Props> = ({ ifo, walletIfoData }) => {
  const { poolBasic, poolUnlimited } = walletIfoData
  const { hasProfile } = useProfile()
  const { t } = useTranslation()
  const { balance } = useTokenBalance(getAddress(ifo.currency.address))
  const stepsValidationStatus = [
    hasProfile,
    balance.isGreaterThan(0),
    poolBasic.amountTokenCommittedInLP.isGreaterThan(0) || poolUnlimited.amountTokenCommittedInLP.isGreaterThan(0),
    poolBasic.hasClaimed || poolUnlimited.hasClaimed,
  ]

  const getStatusProp = (index: number): StepStatus => {
    const arePreviousValid = index === 0 ? true : every(stepsValidationStatus.slice(0, index), Boolean)
    if (stepsValidationStatus[index]) {
      return arePreviousValid ? 'past' : 'future'
    }
    return arePreviousValid ? 'current' : 'future'
  }

  const renderCardBody = (step: number) => {
    const isStepValid = stepsValidationStatus[step]
    switch (step) {
      case 0:
        return (
          <CardBody>
            <Heading as="h4" color="secondary" mb="16px">
              {t('Get Your Profile Activated ')}
            </Heading>
            <Text color="textSubtle" small mb="16px">
              {t('To participate in IFO you need to make a Profile on LOIS Swap.')}
            </Text>
            {isStepValid ? (
              <Text color="success" bold>
                {t('Profile Active!')}
              </Text>
            ) : (
              <Button as={Link} href="/profile">
                {t('Activate your Profile')}
              </Button>
            )}
          </CardBody>
        )
      case 1:
        return (
          <CardBody>
            <Heading as="h4" color="secondary" mb="16px">
              {t('Get LOIS-BNB LP Tokens')}
            </Heading>
            <Text color="textSubtle" small>
              {t('Stake LOIS in the liquidity pool to receive LP tokens.')} <br />
              {t('You can buy IFO tokens using your LOIS Token.')}
            </Text>
            <Button
              as={Link}
              external
              href={`${BASE_ADD_LIQUIDITY_URL}/BNB/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82`}
              endIcon={<OpenNewIcon color="white" />}
              mt="16px"
            >
              {t('Buy LP Tokens')}
            </Button>
          </CardBody>
        )
      case 2:
        return (
          <CardBody>
            <Heading as="h4" color="secondary" mb="16px">
              {t('Commit LP Tokens')}
            </Heading>
            <Text color="textSubtle" small>
              {t('In time that IFO sales are active, you can use LP tokens to purchase the tokens are in sale.')} <br />
              {t('You can start with the basic and then move to the upper level! ')}
            </Text>
          </CardBody>
        )
      case 3:
        return (
          <CardBody>
            <Heading as="h4" color="secondary" mb="16px">
              {t('Claim your tokens and achievement')}
            </Heading>
            <Text color="textSubtle" small>
              {t(
                'You can get your IFO tokens that you purchased once the IFO sales is over, the remaining LOIS tokens will be transferred to your wallet.',
              )}
            </Text>
          </CardBody>
        )
      default:
        return null
    }
  }

  return (
    <Wrapper>
      <Heading as="h2" scale="xl" color="secondary" mb="24px" textAlign="center">
        {t('How to Participate!')}
      </Heading>
      <Stepper>
        {stepsValidationStatus.map((_, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Step key={index} index={index} status={getStatusProp(index)}>
            <Card>{renderCardBody(index)}</Card>
          </Step>
        ))}
      </Stepper>
    </Wrapper>
  )
}

export default IfoSteps
