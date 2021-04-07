import styled from 'styled-components'

export const PokeInfoStyles = styled.div`
position:absolute;
height:25rem;
width:35rem;
z-index:8;
display:flex;
align-items:center;
justify-content:center;
background-color:${props=>props.theme.colors.background};
color:${props=>props.theme.colors.text};
top:15%;
left:30%;
border-radius:2rem;
font-family: 'Roboto', sans-serif;
font-weight: 600;

button {
    position:absolute;
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

`