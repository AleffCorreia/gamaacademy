import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './views/Home';
import Contact from './views/Contact';
import SingIn from './views/Singin'
import SingUp from './views/Singup'


const bRoutes: React.FC = ( ) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="/singin" element={<SingIn />}/>
                <Route path="/singup" element={<SingUp />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default bRoutes;