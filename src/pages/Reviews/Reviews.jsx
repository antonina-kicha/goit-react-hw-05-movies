import { useEffect, useState } from "react";
import { fetchReviews } from 'api';
import { useParams } from "react-router-dom";

const Reviews = () => {

    const { id } = useParams();
    
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState([]);

    useEffect(() => {
        setError("");
        if (!id) {
            return;
        }
        async function getReviews() {
            try {
                const responce = await fetchReviews(id);
                console.log(responce);
                if (responce.results.length === 0) {
                    setError("We don't have any reviews for this movie.");
                    return;
                }
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
        <div>
            {error ? (<p>{error}</p>) :
        (<ul>
            {reviews.map(review => 
                <li key={review.id}>
                    <h2>Author: {review.author}</h2>
                    <p>{review.content}</p>
                </li>)}
        </ul>) }
        </div>
    );
}

export default Reviews;