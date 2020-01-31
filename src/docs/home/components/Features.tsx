import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'docz'

import { Container } from '@components/ui'
import shaka from '@images/icons/shaka.svg'
import lightning from '@images/icons/lightning.svg'
import settings from '@images/icons/settings.svg'
import font from '@images/icons/font.svg'
import beer from '@images/icons/beer.svg'
import version from '@images/icons/version.svg'

const ListItems = styled.div`
  display: grid;
  justify-content: center;

  ${p =>
    p.theme.mq({
      margin: ['30px 0', '60px 0'],
      gridGap: ['30px', '60px'],
      gridTemplateColumns: [
        'repeat(1, 1fr)',
        'repeat(1, 1fr)',
        'repeat(1, 0.8fr)',
      ],
    })}
`

const FeatureItem = styled.div`
  display: flex;
  align-items: center;

  ${p =>
    p.theme.mq({
      padding: ['0 10px', '0 20px', '0 20px', '0 30px'],
      flexDirection: ['column', 'row'],
      textAlign: ['center', 'left'],
    })};
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
`

const Image = styled.img`
  height: 100px;

  ${p =>
    p.theme.mq({
      margin: ['0 0 30px', '0 40px'],
    })}
`

const Title = styled.h3`
  padding: 0;
  margin: 0;
  font-family: 'Zilla Slab';
  font-size: 30px;
  font-weight: 600;
  letter-spacing: -0.02em;
`

const Text = styled.p`
  padding: 0;
  margin: 0;
`

export const Features = () => (
  <Container>
    <ListItems>
      <FeatureItem>
        <Image src={lightning} />
        <Info>
          <Title>Superbook format</Title>
          <Text>
            Rapid story development using the <a href="https://bubblin.io/docs/format">native book format</a> for the web.
            Cut down your book outing time by half and distribute to everyone!
          </Text>
        </Info>
      </FeatureItem>
      <FeatureItem>
        <Image src={beer} />
        <Info>
          <Title>Git collaborative </Title>
          <Text>
            Use the full power of GIT-SCM to collaborate with editors, illustrators and even developers
            if you like. Maintain manuscript like a champion.
          </Text>
        </Info>
      </FeatureItem>
      <FeatureItem>
        <Image src={font} />
        <Info>
          <Title>Strong layouts</Title>
          <Text>
            Unleash the power of [strong layouts]() on your book
            to create smart books that scale intrinsically. Intrinsic Formatting
          </Text>
        </Info>
      </FeatureItem>
      <FeatureItem>
        <Image src={version} />
        <Info>
          <Title>Version control</Title>
          <Text>
            Bookiza uses git-scm internally to track changes.
            Manage multiple editions and a live version of your book from one place.
          </Text>
        </Info>
      </FeatureItem>

      <FeatureItem>
        <Image src={shaka} />
        <Info>
          <Title>Author happiness</Title>
          <Text>
          Optimized for author happiness. Write your heart out, add a layout to your manuscript and pass on
          the happiness to your readers.
          </Text>
        </Info>
      </FeatureItem>
      <FeatureItem>
        <Image src={settings} />
        <Info>
          <Title>Flavorful Customizations</Title>
          <Text>
            Bookiza is very easy to customize. Create your own themes or
            layouts or use a readymade one to make your book stand out.
          </Text>
        </Info>
      </FeatureItem>




      {/* <FeatureItem>
        <Image src={plug} />
        <Info>
          <Title>Fully pluggable</Title>
          <Text>
            Plugins provide a great way to add functionality to your application
            without changing your code. With Docz, you can hook into the
            dataflow and build steps of your application using GatsbyJS and Docz
            plugins.
          </Text>
        </Info>
      </FeatureItem> */}
    </ListItems>
  </Container>
)
