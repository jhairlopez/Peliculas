let pagina = 1;
const anterior = document.getElementById("btnAnterior")
const siguiente = document.getElementById("btnSiguiente")

siguiente.addEventListener('click', () =>{
    if(pagina < 1000){
        pagina += 1;
        cargarPeliculas();
    }
})

anterior.addEventListener('click', () =>{
    if(pagina > 1){
        pagina -= 1;
        cargarPeliculas();
    }
})

const  cargarPeliculas = async () =>{
    try{
        let respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=55e0fba2d3a2e7b5442298bf69fc0ba5&language=es-MX&page=${pagina}`);
        if(respuesta.status == 200){
            let datos = await  respuesta.json();
            let peliculas = ''

            datos.results.forEach(peli => {
                peliculas +=`
                <div class="pelicula">
                   <a href="info.html" ><img src="https://image.tmdb.org/t/p/w500/${peli.poster_path}"></a>              
                    <h3 class="title">${peli.title}</h3>
                    <br>
                    <p class="p">${peli.overview}</p>
                </div>
                 `;
            });

            document.getElementById('contenedor').innerHTML = peliculas
        //  console.log(datos)

        }else if(respuesta.status === 401){
            console.log("Pusiste mal la llave")
        }else if (respuesta.status === 404){
            console.log("La Película no Existe")
        }else{
            console.log("Hubo un Error en el Sistema")
        }
       
    }
    catch(error){
        console.error("No se encontro la Api")
    }
    // console.log(respuesta);
} 
cargarPeliculas()

