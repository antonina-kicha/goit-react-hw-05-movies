import { useParams } from "react-router-dom";


export const MoviesList = ({ movies }) => {
    const { searchQuery } = useParams();
    console.log(searchQuery);
    return (
        <div>
            <p>{searchQuery}</p>
        < ul >
            {movies.map(movie => 
                <li key={movie.id}>{movie.title}</li>)}
            </ul >
            </div>
    )
    
}