import * as React from 'react'
import styled from 'styled-components'

import { Logo as BaseLogo } from '@components/ui'
import pattern from '@images/dark-pattern2.png'

const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  background: #8066ff;
  color: white;
`

const Logo = styled(BaseLogo)`
  margin: 0 10px;
`

export const Footer = () => (
  <Wrapper>
    <span>Built using Docz. © Marvin Danig</span> <Logo height={30} />
  </Wrapper>
)
