import React, {useState} from 'react';

function Contador (){
    const [cantidad, setCantidad] = useState(0)

    const handleIncrementar = () =>{
        setCantidad(cantidad + 1);
    }

    const handleDecrementar = () =>{
        setCantidad(cantidad - 1);
    }

    return(
        <>
        Contador
        <br/>
        <p>Valor de la cantidad: {cantidad}</p>
        <button onClick={handleIncrementar}>Incrementar</button>
        <button onClick={handleDecrementar}>Disminuir</button>
        </>
    )
}

export default Contador;