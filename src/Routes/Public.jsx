
import {Route, Routes} from "react-router-dom";

import Registro from '../Pages/Registro';
import Login from '../Pages/Login';
import Home from '../Pages/Home';
import Contador from '../Pages/Contador';
import Detalle from '../Pages/Detalle';

function Public (){
    return(
        <Routes>

            <Route path="/" element={<Home />}/>    
            <Route path="/alta" element={<Registro />}/>
            <Route path="/ingresar" element={<Login />}/>
            <Route path="/contador" element={<Contador />}/>
            <Route path="/producto/:id" element={<Detalle />}/>
            
        </Routes>
    )
}

export default Public;