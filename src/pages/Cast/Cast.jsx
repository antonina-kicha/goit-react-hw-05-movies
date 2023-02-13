import { useEffect, useState } from "react";
import { fetchActors } from 'api';
import {ActorPhoto, ActorsListItem} from './Cast.styled'

import { useParams } from "react-router-dom";

export const Cast = () => {
    
    const { id } = useParams();

    const [actors, setSActors] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        setError("");
        if (!id) {
            return;
        }
        async function getActors() {
            try {
                const responce = await fetchActors(id);
                const actorsInfo = responce.cast.map(item => { return { id: item.id, name: item.name, img: item.profile_path, character: item.character } })
                console.log(actorsInfo);
                if (actorsInfo.length === 0) {
                    setError("No information about actors");
                    return;
                }
                setSActors(actorsInfo);
            }
            catch (e) {
                console.log(e);
            }
        };

        getActors()

    }, [id]);

    return (
        <div>
            {error ? (<p>{error}</p>) : 
            (<ul>
                {actors.map(actor => 
                    <ActorsListItem key={actor.id}>
                        {actor.img ?
                            (<ActorPhoto src={`https://image.tmdb.org/t/p/w500${actor.img}`} alt={actor.name} />)
                            :
                            (<ActorPhoto src={`https://aeroclub-issoire.fr/wp-content/uploads/2020/05/image-not-found.jpg`} alt={actor.name} />)
                        }
                        <div>
                            <p>{actor.name}</p>
                            <p>{actor.character}</p>
                        </div>
                        
                    </ActorsListItem>)}
                </ul>)}
        </div>
    );
}