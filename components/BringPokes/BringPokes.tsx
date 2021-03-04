import {BringPokesStyle} from '../BringPokes/BringPokesStyles'
import db from '../../db.json'
import {useEffect, useState } from 'react'
import axios from 'axios';
import { Pagination } from '../Pagination/Pagination';


export const BringPokes = () => {

    const [pokemonData, setPokemonData] = useState([]);
    const [search,setSearch] = useState("");
    const [currentUrl, setCurrentUrl] = useState(`https://pokeapi.co/api/v2/pokemon`);
    const [nextUrl, setNextUrl] = useState();
    const [previousUrl, setpreviousUrl] = useState();
    const [isLoading, setIsloading] = useState(true);

    interface Event {
        e:String;
    }
    
    const fetchingPokes = async () => {
        setIsloading(true)
        let cancel
        const res = await axios.get(currentUrl, {
            cancelToken: new axios.CancelToken(c => cancel = c)
        });
        const data = await res.data;
        setTimeout(() => {
        setIsloading(false)
        }, 600)
        setNextUrl(data.next)
        setpreviousUrl(data.previous)

        getAllPokes(data.results)

        return () => cancel();
    }

    useEffect(() => {
        fetchingPokes();
    }, [currentUrl])

    const nextPage = () => {
        setCurrentUrl(nextUrl)
    }

    const prevPage = () => {
        setCurrentUrl(previousUrl)
    }

    const getAllPokes = async (data) => {
        let _pokemon = await Promise.all(data.map(async pokemon => {
            let pokemonRecord = await getPokemon(pokemon.url)
            return pokemonRecord
        }))

        setPokemonData(_pokemon)
    }

    const getPokemon = async (url) => {
        return new Promise((resolve,reject)=>{
            fetch(url)
            .then(response=>response.json())
            .then(data=> { 
                resolve(data);
            })
        }) 
    }
    

    if (isLoading) return (
        <BringPokesStyle>
        <div className="loadingContainer">
            <img src="/loading.gif" />
            <p>Loading ...</p>
        </div>
        </BringPokesStyle>
        )
    
    let searchValue = search.toLowerCase();
    let filtredPokemons = pokemonData.filter((poke)=>poke.name.includes(searchValue))  

    return (
        <BringPokesStyle>
        <div className="pokeForm">
            <form>
                <input
                    value={search}
                    onChange={e=>setSearch(e.target.value)}
                    placeholder={db.inputplaceholder}
                />
            </form>
            <div className="pokemonContainer">
                {filtredPokemons.map(item => (
                    <div key={item.name} className="pokemon">
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${item.id}.gif`}/>
                        <p>{item.name}</p>
                    </div>))}
            </div>
            <Pagination
                nextPage={nextUrl ? nextPage : null}
                prevPage={previousUrl ? prevPage : null}
            />
        </div>
        </BringPokesStyle>
    )
}
