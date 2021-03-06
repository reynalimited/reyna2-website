import React from "react"
import styled from "styled-components"
import { useIntl } from "gatsby-plugin-intl"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import { translateMessageId } from "../utils/translations"
import Translation from "../components/Translation"
import CardList from "../components/CardList"
import RntExchanges from "../components/RntExchanges"
import RntPriceCard from "../components/RntPriceCard"
import InfoBanner from "../components/InfoBanner"
import Link from "../components/Link"
import ButtonLink from "../components/ButtonLink"
import PageMetadata from "../components/PageMetadata"
import CalloutBanner from "../components/CalloutBanner"
import {
  Content,
  Divider,
  LeftColumn,
  Page,
  RightColumn,
  StyledCard,
  TwoColumnContent,
} from "../components/SharedStyledComponents"

const Title = styled.h1`
  font-weight: normal;
  font-size: 3rem;
  line-height: 140%;
  text-align: center;
  color: ${(props) => props.theme.colors.text};
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    font-size: 2rem;
  }
`

const Subtitle = styled.div`
  font-size: 20px;
  line-height: 140%;
  text-align: center;
  color: ${(props) => props.theme.colors.text200};
`

const SubtitleTwo = styled.div`
  font-size: 20px;
  line-height: 140%;
  margin-bottom: 2rem;
  text-align: center;
  color: ${(props) => props.theme.colors.text300};
`

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  justify-content: center;
  @media (max-width: ${(props) => props.theme.breakpoints.xl}) {
    max-width: 100vw;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    flex-direction: column-reverse;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    flex-direction: column-reverse;
    margin-bottom: 0rem;
  }
`

const Hero = styled(Img)`
  position: absolute !important;
  z-index: -1;
  width: 100%;
  max-width: 1440px;
  @media (max-width: ${(props) => props.theme.breakpoints.xl}) {
    max-width: 100vw;
  }
  min-height: 300px;
  max-height: 400px;
  background-size: cover;
`

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6rem;
  text-align: center;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    margin: 2rem;
  }
`

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0rem 2rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    margin: 1rem;
  }
`

const WalletImage = styled(Img)`
  align-self: center;
  width: 50%;
  max-width: 600px;
  margin-bottom: 2rem;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    width: 60%;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    width: 100%;
  }
`

const WalletLeftColumn = styled(LeftColumn)`
  display: flex;
  flex-direction: column;
`

const GradientContainer = styled.div`
  background: radial-gradient(
    46.28% 66.31% at 66.95% 58.35%,
    rgba(127, 127, 213, 0.2) 0%,
    rgba(134, 168, 231, 0.2) 50%,
    rgba(145, 234, 228, 0.2) 100%
  );
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem 4rem;
  padding: 4rem;
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    padding: 4rem 2rem;
  }
`

const CodeBox = styled.div`
  display: flex;
  justify-content: space-between;
  background: #191919;
  border-radius: 4px;
  padding: 0.5rem;
  margin-bottom: 1.5rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex-direction: column-reverse;
  }
`

const StyledRntPriceCard = styled(RntPriceCard)`
  margin-bottom: 2rem;
`

const Code = styled.p`
  font-family: monospace;
  color: #ffffff;
  margin-bottom: 0rem;
`

const CodeLabel = styled.p`
  text-transform: uppercase;
  font-size: 14px;
  color: ${(props) => props.theme.colors.fail300};
  margin-bottom: 0rem;
  margin-right: 1rem;
  margin-left: 1rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    margin: 0rem;
  }
`

const AllCapsTranslation = styled(Translation)`
  text-transform: uppercase;
`

const GetreyPage = ({ data }) => {
  const intl = useIntl()
  const decentralizedExchanges = [
    {
      title: "Localcryptos.com",
      link: "https://localcryptos.com/",
      image: data.localcryptos.childImageSharp.fixed,
    },
  ].sort((a, b) => a.title.localeCompare(b.title))

  const tokenSwaps = [
    {
      title: "1inch",
      link: "https://1inch.exchange/#/",
      image: data.oneinch.childImageSharp.fixed,
    },
    {
      title: "Bancor",
      link: "https://www.bancor.network/",
      image: data.bancor.childImageSharp.fixed,
    },
    {
      title: "dYdX",
      link: "https://dydx.exchange/",
      image: data.dydx.childImageSharp.fixed,
    },
    {
      title: "Kyber",
      link: "https://kyberswap.com/swap/",
      image: data.kyber.childImageSharp.fixed,
    },
    {
      title: "Loopring",
      link: "https://exchange.loopring.io/",
      image: data.loopring.childImageSharp.fixed,
    },
    {
      title: "Uniswap",
      link: "https://app.uniswap.org/#/swap",
      image: data.uniswap.childImageSharp.fixed,
    },
  ].sort((a, b) => a.title.localeCompare(b.title))

  const safetyArticles = [
    {
      title: "Protecting yourself and your funds",
      link: "https://support.mycrypto.com/staying-safe/protecting-yourself-and-your-funds",
      description: "MyCrypto",
    },
    {
      title: "The keys to keeping your crypto safe",
      link: "https://blog.coinbase.com/the-keys-to-keeping-your-crypto-safe-96d497cce6cf",
      description: "Coinbase blog",
    },
    {
      title: "How to store digital assets on ethereum",
      link: "https://media.consensys.net/how-to-store-digital-assets-on-ethereum-a2bfdcf66bd0",
      description: "ConsenSys",
    },
  ]

  return (
    <Page>
      <PageMetadata
        title={translateMessageId("page-get-rey-meta-title", intl)}
        description={translateMessageId("page-get-rey-meta-description", intl)}
      />

      <HeroContainer>
        <Hero
          fluid={data.hero.childImageSharp.fluid}
          alt={translateMessageId("page-get-rey-hero-image-alt", intl)}
          loading="eager"
        />
        <Header>
          <h1>
            <Translation id="reyna-page-get-rey-where-to-buy-title" />
          </h1>
          <Subtitle>
            <Translation id="reyna-page-get-rey-where-to-buy-desc" />
          </Subtitle>
          <SubtitleTwo>
            <Translation id="reyna-page-get-rey-where-to-buy-desc-2" />
          </SubtitleTwo>
          <StyledRntPriceCard />
          <ButtonLink to="#country-picker">
            <Translation id="reyna-page-get-rey-search-by-country" />
          </ButtonLink>
        </Header>
      </HeroContainer>
      <CardContainer>
        <StyledCard
          emoji=":office_building:"
          title={translateMessageId("reyna-page-get-rey-cex", intl)}
          description={translateMessageId("reyna-page-get-rey-cex-desc", intl)}
        />
        <StyledCard
          emoji=":busts_in_silhouette:"
          title={translateMessageId("reyna-page-get-rey-dex", intl)}
          description={translateMessageId("reyna-page-get-rey-dex-desc", intl)}
        >
          <Link to="#dex">
            <Translation id="reyna-page-get-rey-try-dex" />
          </Link>
        </StyledCard>
        <StyledCard
          emoji=":robot:"
          title={translateMessageId("reyna-page-get-rey-wallets", intl)}
          description={translateMessageId(
            "reyna-page-get-rey-wallets-purchasing",
            intl
          )}
        >
          <Link to="/wallets/">
            <Translation id="reyna-page-get-rey-wallets-link" />
          </Link>
        </StyledCard>
        <Content>
          <p>
            <em>
              <Translation id="listing-policy-disclaimer" />{" "}
              <Link to="https://github.com/reynanetwork/front-end/issues/new/choose">
                <Translation id="listing-policy-raise-issue-link" />
              </Link>
            </em>
          </p>
          <InfoBanner emoji=":wave:" shouldCenter={true} mt={`2rem`}>
            <Translation id="reyna-page-get-rey-new-to-rey" />{" "}
            <Link to="/rey/">
              <Translation id="reyna-page-get-rey-whats-rey-link" />
            </Link>
          </InfoBanner>
        </Content>
      </CardContainer>
      <GradientContainer id="country-picker">
        <RntExchanges />
      </GradientContainer>
      <Content id="dex">
        <h2>
          <Translation id="reyna-page-get-rey-dexs" />
        </h2>
      </Content>
      <TwoColumnContent>
        <LeftColumn>
          <h3>
            <Translation id="reyna-page-get-rey-what-are-DEX's" />
          </h3>
          <p>
            <Translation id="reyna-page-get-rey-dexs-desc" />
          </p>
          <p>
            <Translation id="reyna-page-get-rey-dexs-desc-2" />{" "}
            <Link to="/learn/#smart-contracts">
              <Translation id="reyna-page-get-rey-smart-contract-link" />
            </Link>
          </p>
          <p>
            <Translation id="reyna-page-get-rey-dexs-desc-3" />
          </p>
          <p>
            <Translation id="reyna-page-get-rey-need-wallet" />
          </p>
          <ButtonLink to="/wallets/">
            <Translation id="reyna-page-get-rey-get-wallet-btn" />
          </ButtonLink>
        </LeftColumn>
        <RightColumn>
          <h3>
            <Translation id="reyna-page-get-rey-traditional-currencies" />
          </h3>
          <p>
            <Translation id="reyna-page-get-rey-traditional-payments" />
          </p>
          <CardList content={decentralizedExchanges} />
          <h3>
            <Translation id="reyna-page-get-rey-other-cryptos" />
          </h3>
          <p>
            <Translation id="reyna-page-get-rey-swapping" />
          </p>
          <CardList content={tokenSwaps} />
          <InfoBanner isWarning={true}>
            <Translation id="reyna-page-get-rey-warning" />
          </InfoBanner>
        </RightColumn>
      </TwoColumnContent>
      <Divider />
      <Content>
        <h2>
          <Translation id="reyna-page-get-rey-keep-it-safe" />
        </h2>
      </Content>
      <TwoColumnContent>
        <WalletLeftColumn>
          <WalletImage fluid={data.wallet.childImageSharp.fluid} />
          <h3>
            <Translation id="reyna-page-get-rey-community-safety" />
          </h3>
          <CardList content={safetyArticles} />
        </WalletLeftColumn>
        <RightColumn>
          <p>
            <Translation id="reyna-page-get-rey-description" />
          </p>
          <p>
            <Translation id="reyna-page-get-rey-security" />
          </p>
          <h3>
            <Translation id="reyna-page-get-rey-protect-rey-in-wallet" />
          </h3>
          <p>
            <Translation id="reyna-page-get-rey-protect-rey-desc" />
          </p>
          <Link to="/wallets/">
            <Translation id="reyna-page-get-rey-your-address-wallet-link" />
          </Link>
          <h3>
            <Translation id="reyna-page-get-rey-your-address" />
          </h3>
          <p>
            <Translation id="reyna-page-get-rey-your-address-desc" />
          </p>
          <CodeBox>
            <Code>0x0125e2478d69eXaMpLe81766fef5c120d30fb53f</Code>
            <CodeLabel>
              <AllCapsTranslation id="reyna-page-get-rey-do-not-copy" />
            </CodeLabel>
          </CodeBox>
          <p>
            <Translation id="reyna-page-get-rey-your-address-desc-3" />
          </p>
          <h3>
            <Translation id="reyna-page-get-rey-wallet-instructions" />
          </h3>
          <p>
            <Translation id="reyna-page-get-rey-wallet-instructions-lost" />
          </p>
        </RightColumn>
      </TwoColumnContent>
      <Divider />
      <CalloutBanner
        title={translateMessageId("reyna-page-get-rey-use-your-rey", intl)}
        description={translateMessageId(
          "reyna-page-get-rey-use-your-rey-dapps",
          intl
        )}
        image={data.dapps.childImageSharp.fluid}
        alt={translateMessageId(
          "page-index-sections-individuals-image-alt",
          intl
        )}
        maxImageWidth={600}
      >
        <div>
          <ButtonLink to="/dapps/">
            <Translation id="reyna-page-get-rey-checkout-dapps-btn" />
          </ButtonLink>
        </div>
      </CalloutBanner>
    </Page>
  )
}

export default GetreyPage

export const listItemImage = graphql`
  fragment listItemImage on File {
    childImageSharp {
      fixed(width: 20) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "get-rey-token.png" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wallet: file(relativePath: { eq: "pick-wallet.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dapps: file(relativePath: { eq: "use-dapp.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    localcryptos: file(relativePath: { eq: "exchanges/localcryptos.png" }) {
      ...listItemImage
    }
    uniswap: file(relativePath: { eq: "dapps/uni.png" }) {
      ...listItemImage
    }
    matcha: file(relativePath: { eq: "exchanges/matcha.png" }) {
      ...listItemImage
    }
    kyber: file(relativePath: { eq: "exchanges/kyber.png" }) {
      ...listItemImage
    }
    loopring: file(relativePath: { eq: "exchanges/loopring.png" }) {
      ...listItemImage
    }
    oneinch: file(relativePath: { eq: "exchanges/1inch.png" }) {
      ...listItemImage
    }
    bancor: file(relativePath: { eq: "exchanges/bancor.png" }) {
      ...listItemImage
    }
    dydx: file(relativePath: { eq: "exchanges/dydx.png" }) {
      ...listItemImage
    }
  }
`
