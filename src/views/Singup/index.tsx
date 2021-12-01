import React, { useState, useCallback, FormEvent } from 'react';
import { useHistory as useH} from "react-router-dom"
import { Container } from './style';
import {api} from '../../services/api';


interface IData{
    name: string;
    email: string;
}

const SingUp: React.FC = () => {


    const [data, setData] = useState<IData>({} as IData);
    const navigate = useLocation();

   
    const handleSubmit = useCallback( (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        api.post('', data).then(
            response => {
                console.log(response.data);
                navigate.state('/signin')
            }
        )

    }, [data])

    return (
        <Container>
            <div className="card">
                <h4>Cadastre-se</h4>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Informe seu nome" onChange={e => setData({...data, name: e.target.value})} />
                    <input type="text" placeholder="Informe seu email" onChange={e => setData({...data, email: e.target.value})}/>
                    <input type="submit" value="Cadastrar" />
                </form>
            </div>
        </Container>
    )
}

export default SingUp;

VIDEO 38:50