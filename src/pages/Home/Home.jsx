import {fetchTrendingDay} from 'api'
import { useEffect, useState } from 'react';
// import { MovieDetails } from '../MovieDetails/MovieDetails';
import { Cast } from '../Cast/Cast';
import { Reviews } from '../Reviews/Reviews'

import { Link } from "react-router-dom";


export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [idSelectedMovie, setIdSelectedMovie] = useState('')

  // const handleSelectMovie = (id) => {
  //   setIdSelectedMovie(id);
  // }

  useEffect(() => {
    async function getTrendingMovie() {
      try {
        const response = await fetchTrendingDay();
        console.log(response.results);
        setTrendingMovies(response.results);
      }
      catch (e) {
        console.log(e);
      }
    }
    getTrendingMovie();

  }, [])

    fetchTrendingDay();
    return (
        <main>
        <h1>Trending today</h1>
        <ul>
          {trendingMovies.map(trendingMovie =>
            <li key={trendingMovie.id} >
              <Link to={`/movies/${trendingMovie.id}`}
                // onClick={() => handleSelectMovie(trendingMovie.id)}
              > {trendingMovie.title}</Link>
             </li>)}
        </ul>
        {/* <MovieDetails idMovie={idSelectedMovie} /> */}
          <div>
          {/* <h4>Additional information</h4> */}
          {/* <Cast id={idSelectedMovie}></Cast> */}
          <Reviews id={idSelectedMovie}></Reviews>
            </div>
        </main>
    )
};

