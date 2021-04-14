import styled from 'styled-components'

export const PokeInfoStyles = styled.div`
position:absolute;
height:100vh;
width:100%;
z-index:8;
display:flex;
align-items:center;
justify-content:center;


.pokemonContainerInfo {
width:40%;
height:60vh;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
background-color:${props=>props.theme.colors.background};
color:${props=>props.theme.colors.text};
top:15%;
left:30%;
border-radius:2rem;
font-family: 'Roboto', sans-serif;
font-weight: 600;
text-transform: capitalize;
}

.pokemon {
    display:flex;
    
}

button {
    background:none;
    border:none;
    color:${props=>props.theme.colors.text};
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size:1.3rem;
}

header {

    h2 {
        margin:0 3rem 1rem 0;
    }

    display:flex;
    flex-direction:column;
    margin:0 3rem 0 0;
}

.buttonContainer {
display:grid;
grid-template-columns:1fr;
align-content:right;
justify-items:right;
width:100%;
}

@media screen and (max-width:500px) {

.pokemonContainerInfo {
width:90%;
height:85vh;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
background-color:${props=>props.theme.colors.background};
color:${props=>props.theme.colors.text};
top:15%;
left:30%;
border-radius:2rem;
font-family: 'Roboto', sans-serif;
font-weight: 600;
text-transform: capitalize;
font-size:1rem;
}

header {

h2 {
    margin:0 3rem 1rem 0;
    font-size:1rem;
}

font-size:1rem;
display:flex;
flex-direction:column;
margin:0 3rem 0 0;
}

.pokemon {
    display:flex;
    font-size:1rem;
}

.stats {
    p {
        font-size:0.6rem;
    }
}

}

`