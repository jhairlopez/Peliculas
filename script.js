const  cargarPeliculas = async () =>{
    let respuesta = await fetch('https://api.themoviedb.org/3/movie/550?api_key=55e0fba2d3a2e7b5442298bf69fc0ba5');
    console.log(respuesta);
} 
cargarPeliculas()

