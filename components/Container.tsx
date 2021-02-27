import { ReactNode } from 'react'
import styles from '../styles/Container.module.css'

interface ContainerProps {
    children: ReactNode;
}

export const Container = ({children}:ContainerProps) => {
    return (
        <div className={styles.mainCointainer}>
            <div className={styles.imgContainer}>
            <img src="/pokedex.png"/>
            </div>
            {children}
        </div>
    )
}