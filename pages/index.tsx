import Head from 'next/head'
import { BringPokes } from '../components/BringPokes/BringPokes'
import { Container } from '../components/Container/Container'
import db from '../db.json'



export default function Home() {
  return (
    <>
      <Head>
        <title>{db.title}</title>
      </Head>
      <Container>
      <BringPokes/>
      </Container>
    </>
  )
}
