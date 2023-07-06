import { useState } from "react";
export const AddCategory = ({onNewCategory})=>{
    const cambiarValor = (event)=>{
    
        setinputValue(event.target.value);
    }

  const [inputValue, setinputValue] = useState("one punch");

   const OnSubmit = (event) =>{
      event.preventDefault();
       console.log(inputValue);
       if(inputValue.trim().length < 1)return;
       onNewCategory(inputValue);
       setinputValue("");{/*reseteamos nuestro input*/}
   }

  return <form onSubmit={OnSubmit} className="flex flex-col gap-y-5 w-72 items-center mb-10"><h3 className="text-blue-600">Añadir categoria</h3>
     <input type="text" placeholder="buscar gift" value={inputValue} onChange={cambiarValor} className="rounded-xl text-center opacity-90 w-72"/>
  </form>
}