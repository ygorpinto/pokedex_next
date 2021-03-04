import styled from 'styled-components'

export const ContainerStyles = styled.div`

.mainCointainer{
    display: flex;
    flex-direction: column;
    height: 100vh;
    width:auto;
    background-color:${props=>props.theme.colors.background};
    overflow: auto;
}

.imgContainer{
    margin-top: 1.5rem;
    display:flex;
    width: auto;
    justify-content: center;
}

.imgContainer a {
    height: 60%;
    display:flex;
    justify-content: center;
    transition: filter 0.2s;
}

.imgContainer > a:hover{
    filter:brightness(70%)
}

.switch{
    position:absolute;
    top:2%;
    left:1%;

    button{
        background:none;
        border:none;
        font-size:0px;
        outline:none;
        cursor:pointer;
    }
}

@media screen and (max-width:500px){
.imgContainer img {
    height: 60%;
}      
}
`