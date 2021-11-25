import styled from 'styled-components';

export const Container = styled.div `

    display: flex;
    width: 100%;
    height: 100vh;
    background-color: green;
    justify-content: center;
    align-items: center;

    .button-container{
        display: block;
    }

    .button-container button{
        padding: 5px;
        border: none;
        color: #fff;
        background-color:tomato;
        font-size: 1.2rem;
        border-radius: 5px;
    }
    .button-container button:hover{
       box-shadow: 3px 3px 3px 0 #000;
    }

`;

