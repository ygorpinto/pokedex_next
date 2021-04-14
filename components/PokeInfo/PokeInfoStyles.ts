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
    top:50rem;
    background:none;
    border:none;
    color:${props=>props.theme.colors.text};
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    top:6%;
    right:6%;
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

`