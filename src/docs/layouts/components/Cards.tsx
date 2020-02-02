import * as React from 'react'
import { SFC } from 'react'
import styled from 'styled-components'

import { Card as BaseCard } from './Card'
import { mq } from '@styles/responsive'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

const Card = styled(BaseCard)`
  ${mq({
  width: ['100%', 'calc(50% - 20px)', 'calc(33% - 20px)', 'calc(33% - 20px)'],
  margin: ['10px 0', '10px', '10px', '10px'],
})};
`

export const Cards: SFC = () => (
  <Wrapper>
    <Card
      image="https://cdn-std.dprcdn.net/files/acc_649651/TkJQcV"
      name="bookiza-novel-starter"
      description="Novel layout without illustrations."
      link="https://github.com/bookiza/templates/tree/master/novels/novellahttps://github.com/bookiza/templates/tree/master/novels/novella"
    />
    <Card
      image="https://cdn-std.dprcdn.net/files/acc_649651/TkJQcV"
      name="bookiza-photobook-starter"
      description="Responsive photobook with captions."
      link="https://github.com/bookiza/templates/tree/master/novels/novellahttps://github.com/bookiza/templates/tree/master/novels/novella"
    />

  </Wrapper>
)
