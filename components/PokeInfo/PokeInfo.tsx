import { useContext } from "react"
import { PokemonContext } from "../BringPokes/BringPokes"
import { PokeInfoStyles } from "./PokeInfoStyles"

export const PokeInfo = () => {

    const {filtredPokemons} = useContext(PokemonContext)

    return (
        <PokeInfoStyles>
            <div id="pokeInfo">
            </div>
        </PokeInfoStyles>
    )
}