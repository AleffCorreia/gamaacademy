import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100vh;

    background: #8c52e5;

    .card{
        display: grid;
        background: #f9f9f9;
        max-width: 300px;
        border-radius: 22px;
        padding: 22px;

        h4{
            font-family: roboto, sans-serif;
            text-align: center;
            font-size: 18px;
            color: #8c52e5;
        }

        form{ 
            input{ 
                width: 100%;
                padding: 5px;
                height: 32px;
                margin: 10px 0;
                border-radius:8px;
                border: 1px solid #e2e2e2;
            }
            input[type="submit"]{
                cursor: pointer;
                border: none;
                background: #68de5a;
                padding: 5px;
                
             
                transition: 0.3s;
            }input[type="submit"]:hover{
                background: #8c52e5;
                color:#fff;
            }
            input:focus{
                outline: none;
                border: 1px solid #8c52e5;
                box-shadow: 0 0 10px #8c52e5;
            }
        }
    }
    
`