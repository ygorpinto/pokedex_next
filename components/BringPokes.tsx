import styles from '../styles/BringPokes.module.css'
import db from '../db.json'
import { createContext, useEffect, useState } from 'react'
import axios from 'axios';
import { Pagination } from './Pagination';

export const BringContext = createContext({});

export const BringPokes = () => {

const [pokemon,setPokemon] = useState([]);
const [currentUrl,setCurrentUrl] = useState(`https://pokeapi.co/api/v2/pokemon`);
const [nextUrl,setNextUrl] = useState();
const [previousUrl,setpreviousUrl] = useState();
const [isLoading,setIsloading] = useState(true);

const fetchingPokes = async () => {
    setIsloading(true)
    let cancel
    const res = await axios.get(currentUrl,{
        cancelToken: new axios.CancelToken(c => cancel = c)
    });
    const data = await res.data;
    setIsloading(false)
    setNextUrl(data.next)
    setpreviousUrl(data.previous)
    
    setPokemon(data.results.map(item=>(
        <div className={styles.pokemon}>{item.name}</div>)));

    return () => cancel();
}

useEffect(()=>{
    fetchingPokes();
},[currentUrl])

const nextPage = () => {
    setCurrentUrl(nextUrl)
}

const prevPage = () => {
    setCurrentUrl(previousUrl)
}

if (isLoading) return (
    <div className={styles.loadingContainer}>
    <img src="/loading.gif"/>
    <p>Loading ...</p>
    </div>)

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
            <Pagination
            nextPage={nextUrl ? nextPage : null}
            prevPage={previousUrl ? prevPage : null}
            />
        </div>
    )
}
