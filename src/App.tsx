import React, { useEffect, useState } from 'react'
import { Anchor, Box, Button, Card, CardBody, Footer, Header, Heading, Page, PageContent, Text } from 'grommet'
import { FooterHot } from './components/FooterHot'
import { CodeBox } from './components/CodeBox'
import { Image } from './components/Image'
import { useThemeMode } from './utils/useThemeMode'

function App() {

  const { mode } = useThemeMode()

  return (
    <>
      <Header alignSelf='center' justify='center' direction='row'>
        <Image 
          imageDark={new URL(`./assets/logo-dark.png`, import.meta.url)} 
          imageLight={new URL(`./assets/logo-light.png`, import.meta.url)}
        />
        <Heading level={1}>Circulating Supply</Heading>
      </Header>

      <Page kind='wide'> 
        <PageContent  direction='row-responsive' >
          <Card pad={'medium'}>
            <Heading level={3}>What is this?</Heading>
            <Text textAlign='justify'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aperiam maxime dolores enim commodi magnam tempore obcaecati dicta non dignissimos, eligendi similique qui. Sequi maiores asperiores vitae culpa expedita ipsam.
            </Text>
            <Heading level={3}>Code</Heading>
            <Text textAlign='justify'>
              You can use this code area to display `code` blocks.<br/>
              <br/>
            </Text>
            <CodeBox>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo optio asperiores exercitationem est praesentium itaque aut quia ab repellendus corporis excepturi, sint ullam quaerat perferendis, earum id quidem. Doloremque, provident.
            </CodeBox>
            
            {/* TODO: add react-syntax-highlighter based component for actual code */}

          </Card>
        </PageContent>
      </Page>
      <FooterHot>example footer content</FooterHot>
    </>
  )
}

export default App
