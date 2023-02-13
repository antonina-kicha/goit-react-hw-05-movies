import { useEffect, useState } from "react";
import { fetchMovieDetails } from 'api';
import { ContainerMovieDetails, MoviePoster, ContainerAdditionalInfo, WrapperForPoster } from './MovieDetails.styled';
import {BackLink} from 'components/BackLink/BackLink'

import { useParams, useLocation } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";

export const MovieDetails = () => {
    const { id } = useParams();
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";

    const [currentMovieInfo, setCurrentMovieInfo] = useState({});
    const [genresName, setCurrentGenresName] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        if (!id) {
            return;
        }
        async function getMovieDetails() {
            try {
                setIsLoading(true);
                const responce = await fetchMovieDetails(id);
                setCurrentMovieInfo(responce);
                
                if (responce.genres) {
                    const movieGenresArr = responce.genres;
                    if (movieGenresArr.length === 0) {
                        setCurrentGenresName(["No information"]);
                        return;
                    }
                    const genresNameArr = movieGenresArr.map(movieGenre => movieGenre.name);
                    const genresNameString = genresNameArr.join(', ')
                    setCurrentGenresName(genresNameString);
                }
            }
            catch (e) {
                console.log(e);
            }
            finally {
                setIsLoading(false);
            }
        };
        getMovieDetails();
            
    }, [id]);

    return (
        <div>
            <BackLink to={backLinkHref}>Go back</BackLink>
            {isLoading && <p>LOADING.....</p>}

            <ContainerMovieDetails>
                <WrapperForPoster>
                    {currentMovieInfo.poster_path && !isLoading && <MoviePoster src={`https://image.tmdb.org/t/p/w500${currentMovieInfo.poster_path}`} alt={currentMovieInfo.title} />}
                    {!currentMovieInfo.poster_path && !isLoading && <MoviePoster src="https://aeroclub-issoire.fr/wp-content/uploads/2020/05/image-not-found.jpg" alt={currentMovieInfo.title} />}
                </WrapperForPoster>
                <div>
                    <h1>{currentMovieInfo.title}</h1>
                    <p>User Score {`${Math.round(currentMovieInfo.vote_average * 10)}%`}</p>
                    <h2>Overview</h2>
                    {currentMovieInfo.overview ? (<p>{currentMovieInfo.overview}</p>) : (<p>No information</p>)}
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