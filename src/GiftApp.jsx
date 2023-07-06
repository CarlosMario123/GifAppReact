import { useState } from "react"
import { AddCategory } from "./Componentes/AddCategory";
import { GiftGrid } from "./Componentes/GiftGrid";
export const GiftApp = ()=>{
    const [categorias, setcategorias] = useState(["onepunch"]);{/*el estado siempre sera un arreglo*/}
      
    const onAddCategoria = (nuevaCategoria)=>{ 
        if(categorias.includes(nuevaCategoria)) return;
           setcategorias([nuevaCategoria,...categorias]);
    }
  
         
    
 
    return <div className="bg-black h-screen">
    {/*titulo*/}
     <h1 className="text-center text-white font-bold text-3xl">Gift app</h1>
     <AddCategory onNewCategory = {onAddCategoria}/>
   
      
     {/*entradas*/}

     {/*listado de giftss*/}
     {/*creamos una lista con ol*/}

     <ol>
        {/*creamos un map con las categorias*/}
        {categorias.map(categorias => (
           <GiftGrid categoria={categorias} key={categorias}/>
        ))}
     </ol>

    </div>;
}