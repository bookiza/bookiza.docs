import * as React from 'react'
import styled from 'styled-components'
import GitHubButton from 'react-github-button'
import { Link as BaseLink } from 'docz'

import { Container, Logo } from '@components/ui'
import { btnStyle } from '@components/ui/Button'
import image from '@images/header-img.png'

const Wrapper = styled.div`
  width: 100%;
  background-color: #fff;
  background-position: center;
  border-bottom: 1px solid ${p => p.theme.colors.grayLight};

  ${Container} {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
  }

  ${p =>
    p.theme.mq({
      padding: ['30px 0', '50px 0'],
    })};
`

const Title = styled.h1`
  font-weight: 900;
  text-align: center;
  margin: 0;
  padding: 0;
  font-size: 8vh;
  font-family: "Crimson Text", serif;
  line-height: 1;
`

const Subtitle = styled.h2`
  font-weight: 300;
  text-align: center;
`

const Image = styled.img`
  margin: 60px 0;
  max-width: 100%;
  width: 1024px;
`

const Buttons = styled.div`
  display: flex;
`

const Link = styled(BaseLink)`
  ${btnStyle};
`

export const Hero = () => {
  return (
    <Wrapper>
      <Container>
        <Logo height={200} style={{ maxWidth: '100%' }} />
        <Title>Bookiza Abelone</Title>
        <Subtitle><strong>Bookiza</strong> is a lightweight book reification framework for the web. </Subtitle>
        <GitHubButton
          type="stargazers"
          size="large"
          namespace="bookiza"
          repo="bookiza.cli"
        />
        <Image src={image} alt="Built-in components" />
        <Buttons>
          <Link scale="big" to="/docs/getting-started">
            Getting Started
          </Link>
          <Link scale="big" to="/docs/introduction">
            Documentation
          </Link>
        </Buttons>
      </Container>
    </Wrapper>
  )
}
