import { useEffect, useState } from "react";
import { fetchReviews } from 'api';

import { useParams } from "react-router-dom";


export const Reviews = () => {
    const { id } = useParams();
    
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        if (!id) {
            return;
        }
        async function getReviews() {
            try {
                const responce = await fetchReviews(id);
                console.log(responce);
                const reviewsArr = responce.results.map(item => { return { id: item.id, author: item.author, content: item.content } });
                setReviews(reviewsArr);
            }
            catch (e) {
                console.log(e);
            }
        };
        getReviews();
    }, [id])

    return (
        <ul>
            {reviews.map(review => 
                <li key={review.id}>
                    <h2>Author: {review.author}</h2>
                    <p>{review.content}</p>
                </li>)}
        </ul>
        
    );
}