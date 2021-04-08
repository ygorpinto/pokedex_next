import Head from 'next/head'
import { BringPokes } from '../components/BringPokes/BringPokes'
import { Container } from '../components/Container/Container'
import db from '../db.json'
import light from '../styles/lightTheme'
import dark from '../styles/darkTheme'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { ThemeButton } from '../components/ThemeButton/ThemeButton'
import Link from 'next/link'


export default function Home() {

  const [theme, setTheme] = useState(light)

  const handleTheme = () => {
    setTheme(theme.title === "light" ? dark : light)
  }

  return (
    <>
      <Head>
        <title>{db.title}</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Container>
          <Link href="/battle">
            <img className="battleButton" src="1732452.png"/>
          </Link>
          <ThemeButton func={handleTheme} />
          <BringPokes />
        </Container>
      </ThemeProvider>
    </>
  )
}
