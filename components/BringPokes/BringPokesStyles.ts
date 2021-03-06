import styled from 'styled-components'

export const BringPokesStyle = styled.div`
.pokeForm{
    display:flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
}

.pokeForm form {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.pokeForm input {
    height: 1.6rem;
    width:40%;
    border: none;
    border-radius: 6px 6px;
    color: var(--blue);
}

.pokeForm input::placeholder {
    text-align: center;
    color: var(--blue);
    opacity: 0.6;
}

.pokemonContainer{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
}

.pokemon{
    width: 8rem;
    height: 11rem;
    margin: 0.1rem;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    backdrop-filter: blur(5px);
    background: linear-gradient(to bottom,rgba(0,0,0,0.01),rgba(0,0,0,0.20));
    border-radius: 10px;
    box-shadow: 0.2rem 0.2rem rgba(0,0,0,0.04);
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    color:${props=>props.theme.colors.text};
    transition: opacity 0.3s;
    text-transform: capitalize;
}

.pokemon:hover{
    background: linear-gradient(to top,rgba(0,0,0,0.01),rgba(0,0,0,0.20));
}

.pokeForm button {
    margin: 1.6rem 0.4rem;
    background-color: var(--blue);
    color:var(--white);
    border:none;
    border-radius:0.3rem;
    height: 2rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
}

.pokeForm button:hover{
    background-color: var(--blue-dark);
}

.loadingContainer{
    height: 60vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    color:${props=>props.theme.colors.text};
    font-size: 1.4rem;
}

.loadingContainer img {
    height: 40%;
}

.loadingContainer p {
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    color:${props=>props.theme.colors.text};
    font-size: 1.4rem;
}

@media screen and (max-width:500px){

.pokeForm{
    display:flex;
    justify-content:center;
    align-items: center;
}

.pokeForm input {
    height: 1.6rem;
    width:90vw;
    border: none;
    border-radius: 6px 6px;
    color: var(--blue);
}
    
.loadingContainer{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
    
.loadingContainer img {
    height: 40%;
}

.loadingContainer p {
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    color:${props=>props.theme.colors.text};
    font-size: 1rem;
}

.pokeForm{
    top:5rem;
    position: absolute;
    display:flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
}

}
`