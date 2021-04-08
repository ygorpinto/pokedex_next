import styled from 'styled-components'

const BattleStyles = styled.div`
height:100vh;
width:100%;

display:flex;
justify-content:center;
align-items:center;
flex-direction:column;

.battleArena {
width:30%;
display:flex;
justify-content:space-between;

}

button {
    margin: 1.6rem 0.4rem;
    background-color: var(--blue);
    color:var(--white);
    border:none;
    border-radius:0.3rem;
    height: 2rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
}

input {
    height:1.6rem;
    border:none;
    box-shadow:1px 1px rgba(0,0,0,0.12);
    border-radius:0.3rem;
    margin:2rem 1rem;
    color:var(--blue);
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    text-align:center;

    ::placeholder {
        color:var(--blue);
        font-family: 'Roboto', sans-serif;
        font-weight: 600;
        text-align:center;
    }
}


.pokemon1 {

    h5 {
        color:${props=>props.theme.colors.text};
        font-family: 'Roboto', sans-serif;
        font-weight: 600;
        text-align:center;
        font-size:1em;
        text-transform:capitalize;
    }

    p{
        color:${props=>props.theme.colors.text};
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        text-align:center;
        font-size:0.8rem;
    }

    strong {
        color:${props=>props.theme.colors.text};
        font-family: 'Roboto', sans-serif;
        font-weight: 600;
        text-align:center;
        font-size:1em;
        text-transform:capitalize;
    }
        
}

.pokemon2 {

    h5 {
        color:${props=>props.theme.colors.text};
        font-family: 'Roboto', sans-serif;
        font-weight: 600;
        text-align:center;
        font-size:1rem;
        text-transform:capitalize;
    }

    p {
        color:${props=>props.theme.colors.text};
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        text-align:center;
        font-size:0.8em;
    }

    strong {
        color:${props=>props.theme.colors.text};
        font-family: 'Roboto', sans-serif;
        font-weight: 600;
        text-align:center;
        font-size:1em;
        text-transform:capitalize;
    }       
}

.pokeHeader {
    display:flex;
    justify-content:center;
    align-items:center;

    strong {
        margin:0 0.4rem;
    }
}
`

export default BattleStyles;