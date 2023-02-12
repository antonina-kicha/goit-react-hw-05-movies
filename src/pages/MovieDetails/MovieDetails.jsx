import { useEffect, useState } from "react";
import { fetchMovieDetails } from 'api';
import {ContainerMovieDetails, MoviePoster, ContainerAdditionalInfo} from './MovieDetails.styled'

import { useParams } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";


export const MovieDetails = () => {
    const { id } = useParams();
    console.log(id);

    const [currentMovieInfo, setCurrentMovieInfo] = useState({});
    const [genresName, setCurrentGenresName] = useState([]);
    
    useEffect(() => {
        if (!id) {
            return;
        }
        async function getMovieDetails() {
            try {
                const responce = await fetchMovieDetails(id);
                console.log(responce);
                setCurrentMovieInfo(responce);
                if (responce.genres) {
                    const movieGenresArr = responce.genres;
                    const genresNameArr = movieGenresArr.map(movieGenre => movieGenre.name);
                    const genresNameString = genresNameArr.join(', ')
                    setCurrentGenresName(genresNameString);
                }
            }
            catch (e) {
                console.log(e);
            }
        };
        getMovieDetails();
            
    }, [id]);

    return (
        <div>
            <button type="button">Go back</button>
            <ContainerMovieDetails>
                <MoviePoster src={`https://image.tmdb.org/t/p/w500${currentMovieInfo.poster_path}`} alt={currentMovieInfo.title} />
                <div>
                <h1>{currentMovieInfo.title}</h1>
                <p>User Score {`${currentMovieInfo.vote_average*10}%`}</p>
                <h2>Overview</h2>
                <p>{currentMovieInfo.overview}</p>
                <h2>Genres</h2>
                <p>{genresName}</p>
                </div>
            </ContainerMovieDetails>
            <ContainerAdditionalInfo>
                <h4>Additional information</h4>
                <ul>
                    <li>
                        <Link to="cast">Cast</Link>
                    </li>
                    <li>
                        <Link to="reviews">Reviews</Link>
                    </li>
                </ul>
            </ContainerAdditionalInfo>

                <Outlet />

            

          


        </div>

    );

}