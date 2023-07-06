export const GifItem = (Props) =>{
     let ancho = ["40","52","48"];
     // Obtener un índice aleatorio del arreglo
    let indiceAleatorio = Math.floor(Math.random() * ancho.length);
    return ( 
        <div className={`w-${ancho[indiceAleatorio]}`}>
          <img src={Props.url} alt="" />
        </div>)
}