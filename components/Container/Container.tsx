import { ReactNode } from 'react'
import {ContainerStyles} from '../Container/ContainerStyles'
import {Link} from 'react-router-dom'


interface ContainerProps {
    children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
    return (
        <ContainerStyles>
        <div className="mainCointainer">
            <div className="imgContainer">
                <Link to="/"><img src="/pokedex.png" /></Link>
            </div>
            {children}
        </div>
        </ContainerStyles>
    )
}