import { useEffect, useState } from "react";
import { fetchActors } from 'api';
import {ActorPhoto, ActorsListItem} from './Cast.styled'

import { useParams } from "react-router-dom";


export const Cast = () => {
    
    const { id } = useParams();
        console.log(id);


    const [actors, setSActors] = useState([]);

    useEffect(() => {
        if (!id) {
            return;
        }

        async function getActors() {
            try {
                const responce = await fetchActors(id);
                const actorsInfo = responce.cast.map(item => { return {id: item.id, name: item.name, img: item.profile_path, character: item.character} })
                console.log(actorsInfo);
                setSActors(actorsInfo);
            }
            catch (e) {
                console.log(e);
            }
        };

        getActors()

    }, [id])

    return (
        <ul>
            {actors.map(actor => 
                <ActorsListItem key={actor.id}>
                    <ActorPhoto src={`https://image.tmdb.org/t/p/w500${actor.img}`} alt={actor.name} />
                    <div>
                        <p>{actor.name}</p>
                        <p>{actor.character}</p>
                    </div>
                    
                </ActorsListItem>)}
        </ul>
    );
}