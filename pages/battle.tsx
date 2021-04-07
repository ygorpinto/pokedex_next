import Head from "next/head";
import BattleSimulator from "../components/Battle/Battle";
import db from '../db.json'
const Main = () => {
    return (
        <>
        <Head>
        <title>{db.title2}</title>
        </Head>
        <BattleSimulator />
      </>
    )
}

export default Main;