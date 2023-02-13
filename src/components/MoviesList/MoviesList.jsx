import PropTypes from 'prop-types';
import { Link, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const MoviesList = ({ movies }) => {

    const location = useLocation();
    const { searchQuery } = useParams();

    console.log(searchQuery);
    return (
        <div>
            <p>{searchQuery}</p>
        < ul >
            {movies.map(movie => 
                <li key={movie.id}>
                    <Link to={`/movies/${movie.id}`} state = {{ from: location }}>{movie.title} </Link>
                </li>)}
            </ul >
            </div>
    )
}

MoviesList.propTypes = {
    movies: PropTypes.array,
}
