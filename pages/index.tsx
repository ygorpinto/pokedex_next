import Head from 'next/head'
import { BringPokes } from '../components/BringPokes'
import { Container } from '../components/Container'
import db from '../db.json'
import { GlobalStyles } from '../styles/global'

export default function Home() {
  return (
    <>
      <Head>
        <title>{db.title}</title>
      </Head>
      <GlobalStyles/>
      <Container>
      <BringPokes/>
      </Container>
    </>
  )
}
