import * as React from 'react'
import styled from 'styled-components'
import { Link as BaseLink } from 'docz'

import { btnStyle } from '@components/ui/Button'
import { Container, Pre as BasePre } from '@components/ui'
import pattern from '@images/dark-pattern2.png'

const Wrapper = styled.div`
  text-align: center;
  background: url(${pattern});
  color: ${p => p.theme.colors.grayLight};


  ${Container} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    color: white;

    ${p =>
      p.theme.mq({
        padding: ['50px 10px', '50px 20px'],
      })};
  }
`

const Title = styled.h2`
  margin: 0;
  font-family: 'Zilla Slab';
  font-size: 52px;
  font-weight: 600;

  ${p =>
    p.theme.mq({
      lineHeight: ['1', '1', '1.62', '1.62'],
      fontSize: ['38px', '38px', '48px', '52px'],
    })};
`

const Text = styled.p`
  font-size: 20px;
`

const Pre = styled(BasePre)`
  width: 100%;
  max-width: 650px;
  margin: 10px 0 20px 0;
  border: 1px solid ${p => p.theme.colors.grayLight};

  ${p =>
    p.theme.mq({
      minWidth: ['100%', '100%', '650px', '650px'],
    })};
`

const Link = styled(BaseLink)`
  ${btnStyle};
`

const mdxExample = `---
name: Button
route: /
---

import { Playground, Props } from 'docz'
import { Button } from './'

# Button

<Props of={Button} />

## Basic usage

<Playground>
  <Button>Click me</Button>
  <Button kind="secondary">Click me</Button>
</Playground>
`

export const HowTo = () => (
  <Wrapper>
    <Container>
      <Title>Prerequisites</Title>
      <Text>node (>=8.11.3), gulp, shelljs, git-scm and a unixy-style shell or the terminal app.</Text>
      <Title>Installation</Title>
      <Text>It is recommended to install the Bookiza CLI globally</Text>
      <Pre className="language-bash">
        $ npm i -g bookiza
      </Pre>
      <Text>
        Check installation with:
      </Text>
      <Pre className="language-bash">
      $ bookiza --version
      </Pre>
      <Title>Registratation</Title>
      <Text>
      Next, register client with:
      </Text>
      <Pre className="language-bash">
        $ bookiza register
      </Pre>
      <Text>
        Provide your <a href="https://bubblin.io">Bubblin</a> credentials and connect Bookiza client to its POST/PATCH API.
      </Text>
      <Text>
        Sweet! You're all set now… 😇
      </Text>
      <Title> New Project </Title>
      <Text>
      To start a new project `My-Awesome-New-Book`:
      </Text>
      <Pre className="language-bash">
        $ bookiza new My-Awesome-New-Book --leafs 12 --template novella
      </Pre>
      <Text>
        Bookiza will create a new project with 12 fresh leafs (24 pages) and apply the `novella` layout on it. Boom!
      </Text>
      <Text>
        <code>cd</code> into My-Awesome-New-Book folder, and start the server:
      </Text>

      <Pre className="language-bash">
        $ bookiza server
      </Pre>
      <Text>
        Watch changes on your manuscript at <code>https://localhost:4567</code>.
      </Text>
Open project on your favorite editor (Sublime / Atom), write away. Once the book is ready, hit:

```bash
$ bookiza publish
```

      <Pre className="language-markdown">{mdxExample}</Pre>
      <Text>That's it, your docs are ready to go !</Text>
      <Pre className="language-bash">$ yarn docz dev</Pre>
      <Link to="/docs/getting-started">More Info</Link>
    </Container>
  </Wrapper>
)
