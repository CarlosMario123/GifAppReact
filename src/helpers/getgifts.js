export const getgifs = async(categoria)=>{
    const url = `https:api.giphy.com/v1/gifs/search?api_key=B5yI7vCKIzZH9Tc468M1p6NlWTwREk8d&q=${categoria}&limit=20`;

    //hacemos la peticion http
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();
   console.log(data);
      const gifts =  data.map( img=>({
         id: img.id,
         title: img.title,
         url: img.images.downsized_medium.url
      }))
     
     return gifts;
    }