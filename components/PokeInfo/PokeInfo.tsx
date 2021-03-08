import { useContext } from "react"
import { PokemonContext } from "../BringPokes/BringPokes"
import { PokeInfoStyles } from "./PokeInfoStyles"

export const PokeInfo = () => {

    const {filtredPokemons,isinfoPokeOpen} = useContext(PokemonContext)
    
    return (
        <>
        {isinfoPokeOpen && (
        <PokeInfoStyles>
            {filtredPokemons.map(item=>(
                <div className="pokeInfo">{item.id}</div>))}
        </PokeInfoStyles>
        )}
        </>
    )
}