import styles from '../styles/BringPokes.module.css'
import db from '../db.json'
import { useEffect, useState } from 'react'
import axios from 'axios';

export const BringPokes = () => {

const [pokemon,setPokemon] = useState([]);

const fetchingPokes = async () => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
    const data = await res.data;
    setPokemon(data.results.map(item=>{
        return(
        <div className={styles.pokemon}>{item.name}</div>)}));
}

useEffect(()=>{
    fetchingPokes();
},[])
    

    return (
        <div className={styles.pokeForm}>
            <form>
                <input
                placeholder={db.inputplaceholder}
                />
            </form>
            <div>
                {pokemon}
            </div>
        </div>
    )
}