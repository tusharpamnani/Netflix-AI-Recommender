import { generateEmbeddings } from './GenerateEmbeddings.js'
import {supabase}  from './Supabase.js'

const getMovies =() => {
    return supabase
    .from('movies')
    .select('*')
    .is('embedding', null)
}

const addMovieEmbedding = async(movie) => {
    const embedding = await generateEmbeddings(movie.overview);
    await supabase
    .from('movies')
    .update({embedding})
    .eq('id', movie.id)
}

const processAllMovies = async() => {
    const {data: movies} = await getMovies()
    console.log(movies.length)

    if (!movies?.length) return;

    await Promise.all(movies.map(addMovieEmbedding));
    processAllMovies() //recurssively call the function to process all movies
}

processAllMovies()