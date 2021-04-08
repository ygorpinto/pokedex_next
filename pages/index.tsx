import Head from 'next/head'
import { BringPokes } from '../components/BringPokes/BringPokes'
import { Container } from '../components/Container/Container'
import db from '../db.json'
import light from '../styles/lightTheme'
import dark from '../styles/darkTheme'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { ThemeButton } from '../components/ThemeButton/ThemeButton'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BattleSimulator from '../components/Battle/Battle'


export default function Home() {

  const [theme, setTheme] = useState(light)

  const handleTheme = () => {
    setTheme(theme.title === "light" ? dark : light)
  }

  return (
    <>
    <Router>
      <Head>
        <title>{db.title}</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Container>
            <Link to="/battle"><img className="battleButton" src="1732452.png"/></Link>
          <ThemeButton func={handleTheme} />
          <Switch>
            <Route path="/battle">
              <BattleSimulator/>
            </Route>
          <BringPokes />
          </Switch>
        </Container>
      </ThemeProvider>
      </Router>
    </>
  )
}
