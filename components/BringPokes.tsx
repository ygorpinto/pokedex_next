import styles from '../styles/BringPokes.module.css'
import db from '../db.json'
import { useState } from 'react'

export const BringPokes = () => {

const [pokemon,setPokemon] = useState("");

    return (
        <div className={styles.pokeForm}>
            <form>
                <input
                placeholder={db.inputplaceholder}
                />
            </form>
        </div>
    )
}