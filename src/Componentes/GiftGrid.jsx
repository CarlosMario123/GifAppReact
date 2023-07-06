import { getgifs } from "../helpers/getgifts";
import { useEffect,useState } from "react";
import { GifItem } from "./Gifitem";
export function GiftGrid({categoria}){
     const [imagenes, setimagenes] = useState([]);

     //para realizar peticion hacemos esto
     const getImg = async () =>{
        const imgs = await getgifs(categoria);
        setimagenes(imgs);
     }
    useEffect(()=>{
        getImg();
    },[]);
    
     return <>
      <h3>{categoria}</h3>
       
           <div className="flex w-full bg-black flex-wrap justify-evenly px-10">
              {
                 imagenes.map(category => {
                  /*que no se nos olvide poner el key*/
                  return <GifItem key = {category.id} url = {category.url}/>
                 })
              }
           </div>
       
     </>
}