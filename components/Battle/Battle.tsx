import axios from "axios";
import { useState } from "react";
import BattleStyles from "./BattleStyles"

interface PokeData {
    name: string,
    stats: object
}

const BattleSimulator = () => {

    const [pokemon,setPokemon] = useState({} as PokeData);
    const [pokemon2,setPokemon2] = useState({} as PokeData);
    const [idPoke, setIdPoke] = useState('')
    const [idPoke2, setIdPoke2] = useState('')
    const [pokemonOk, setPokemonOk] = useState(false);
    const [pokemon2OK, setPokemons2Ok] = useState(false);

    const fetchPokes = async () => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPoke}/`);
        const data = await res.data;
        setPokemon(data)

        fetchPoke2();
    }

    const fetchPoke2 = async () => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPoke2}/`);
        const data = await res.data;
        setPokemon2(data)

        setPokemonOk(true);
        setPokemons2Ok(true);
    }

    return (
        <BattleStyles>
            <div className="pokemonSelect">
                <input 
                placeholder="Digite o ID do Pokemon 1"
                onChange={e=>setIdPoke(e.target.value)}
                type="text"/>
                <input
                onChange={e=>setIdPoke2(e.target.value)} 
                placeholder="Digite o ID do Pokemon 2"
                type="text"/>
                <button
                onClick={fetchPokes}
                >Iniciar</button>
            </div>
            <div className="battleArena">
            <div className="pokemon1">
                {pokemonOk ? (
                    <>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/${idPoke}.png`}/>
                    <div className="pokeHeader">
                    <h5>{pokemon.name}</h5>
                    <strong>HP : {pokemon.stats[0].base_stat}</strong>
                    </div>
                    <p>Attack : {pokemon.stats[1].base_stat}</p>
                    <p>Defense : {pokemon.stats[2].base_stat}</p>
                    <p>SP Attack : {pokemon.stats[3].base_stat}</p>
                    <p>SP Defense : {pokemon.stats[4].base_stat}</p>
                    <p>Speed : {pokemon.stats[5].base_stat}</p>
                    </>
                ) : (
                    null
                )}
                
            </div>
            <div className="pokemon2">
                {pokemon2OK ? (
                <>
                 <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/${idPoke2}.png`}/>
                        <div className="pokeHeader">
                        <h5>{pokemon2.name}</h5>
                        <strong>HP : {pokemon2.stats[0].base_stat}</strong>
                        </div>
                        <p>Attack : {pokemon2.stats[1].base_stat}</p>
                        <p>Defense : {pokemon2.stats[2].base_stat}</p>
                        <p>SP Attack : {pokemon2.stats[3].base_stat}</p>
                        <p>SP Defense : {pokemon2.stats[4].base_stat}</p>
                        <p>Speed : {pokemon2.stats[5].base_stat}</p>
                    
                 </>) : (
                     null
                 )}
            </div>
            </div>
        </BattleStyles>
    )
}

export default BattleSimulator;