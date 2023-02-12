import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const apiKEY = 'ba2cd44587703e13bcb95a3f3a9b39ac';
const searchParametrTrendingDay = 'trending/movie/day';

export const fetchTrendingDay = async () => {
    const responce = await axios.get(`/${searchParametrTrendingDay}?api_key=${apiKEY}`);
    return responce.data;
}


export const fetchSearchMovie = async (value) => {
    const responce = await axios.get(`/search/movie?api_key=${apiKEY}&language=en-US&include_adult=false&query=${value}`);
    console.log(responce.data);
    return responce.data;
}


export const fetchMovieDetails = async (id) => {
    const responce = await axios.get(`/movie/${id}?api_key=${apiKEY}&language=en-US`);
    console.log(responce.data);
    return responce.data;
}

export const fetchActors = async (id) => {
    const responce = await axios.get(`movie/${id}/credits?api_key=${apiKEY}&language=en-US`);
        console.log(responce.data);
    return responce.data;
}

export const fetchReviews = async (id) => {
    const responce = await axios.get(`/movie//${id}/reviews?api_key=${apiKEY}&language=en-US`);
    console.log(responce.data);
    return responce.data;
}

