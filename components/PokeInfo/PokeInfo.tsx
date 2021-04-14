import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { PokemonContext } from "../BringPokes/BringPokes"
import { PokeInfoStyles } from "./PokeInfoStyles"

interface PokeData {
    name: string,
    stats: object
}

export const PokeInfo = () => {

    const [data, setData] = useState({} as PokeData)
    const { idItem, setIsInfoPokeOpen, isinfoPokeOpen } = useContext(PokemonContext)

    useEffect(() => {
        bringPokeData();
    }, [idItem])

    const bringPokeData = async () => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idItem}/`)
        const data = await res.data
        setData(data)
    }

    const close = () => {
        setIsInfoPokeOpen(false);
    }

    console.log(data);


    return (
        <>
            {isinfoPokeOpen && (
                <PokeInfoStyles>
                    <div className="pokemonContainerInfo">
                        <div className="buttonContainer">
                            <button
                                onClick={close}
                            >X</button>
                        </div>
                        <div className="pokemon">
                            <header>
                                <h2>{data.name}</h2>
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${idItem}.gif`} />
                            </header>
                            <div className="stats">
                                <p>HP : {data.stats[0].base_stat}</p>
                                <p>Attack : {data.stats[1].base_stat}</p>
                                <p>Defense : {data.stats[2].base_stat}</p>
                                <p>SP Attack : {data.stats[3].base_stat}</p>
                                <p>SP Defense : {data.stats[4].base_stat}</p>
                                <p>Speed : {data.stats[5].base_stat}</p>
                            </div>
                    </div>
                    </div>
                </PokeInfoStyles>
            )}
        </>
    )
}