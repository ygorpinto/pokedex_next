import { ReactNode } from 'react'
import {ContainerStyles} from '../Container/ContainerStyles'


interface ContainerProps {
    children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
    return (
        <ContainerStyles>
        <div className="mainCointainer">
            <div className="imgContainer">
                <a href="/"><img src="/pokedex.png" /></a>
            </div>
            {children}
        </div>
        </ContainerStyles>
    )
}