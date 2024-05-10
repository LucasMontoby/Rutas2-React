import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getByIdProductos } from "../Services/productosService"

function Detalle(){
    const {id} = useParams()
    
    const [producto,setProducto] = useState({})
    const [isLoading,setIsloading] = useState(true)

    useEffect(
        ()=>{
          const result = async ()=>{
            try{
              const responseData = await getByIdProductos(id)
              setProducto(responseData.data)
              setIsloading(false)
            }catch(e){
              console.log(e)
            }
           
          }
          result()
        },
        [id]
      )

    if(isLoading){
        return(
          <div>
            Cargando...
          </div>
        )
     }else{
        return (
          <div>
            <Link to="/">Inicio</Link>
            <h1>{producto.title}</h1>
            <p>{producto.price}</p>
            
          </div>
        )
     } 
    
}

export default Detalle