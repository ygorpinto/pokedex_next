import Head from 'next/head'
import { BringPokes } from '../components/BringPokes/BringPokes'
import { Container } from '../components/Container/Container'
import db from '../db.json'
import light from '../styles/lighttheme'
import dark from '../styles/darkTheme'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Switch from 'react-switch'


export default function Home() {

  const [theme, setTheme] = useState(light)

  const handleTheme = () => {
    setTheme( theme.title === "light" ? dark : light )
  }

  return (
    <>
      <Head>
        <title>{db.title}</title>
      </Head>
      <ThemeProvider theme={theme}>
      <Container>
        <div className="switch">
          <Switch
          checked={theme.title === "dark"}
          onChange={handleTheme}
          width={50}
          height={15}
          handleDiameter={20}
          offColor={"#5059BA"}
          onColor={"#4646aa"}
          />
        </div>
      <BringPokes/>
      </Container>
      </ThemeProvider>
    </>
  )
}
