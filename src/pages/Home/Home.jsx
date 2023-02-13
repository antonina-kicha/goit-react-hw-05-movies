
import { fetchTrendingDay } from 'api'
import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {

  const location = useLocation();
  const [trendingMovies, setTrendingMovies] = useState([]);
  
  useEffect(() => {
    async function getTrendingMovie() {
      try {
        const response = await fetchTrendingDay();
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
              <Link to={`/movies/${trendingMovie.id}`} state={{ from: location }}> {trendingMovie.title}</Link>
             </li>)}
        </ul>
        </main>
    )
};

export default Home;

