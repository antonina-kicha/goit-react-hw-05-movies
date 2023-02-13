import {fetchSearchMovie} from 'api'
import React, { useEffect, useState } from 'react';
import { Formik , Form } from 'formik';
import { ContainerMovies, Input, Button } from './Movies.styled';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useSearchParams } from "react-router-dom";

export const Movies = () => {
    
    const [error, setError] = useState('');
    const [movies, setMovies] = useState([]);

    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get("searchQuery");

    const handleSubmit = (value) => {
        const searchQueryTrim = value.trim();
        setSearchParams({searchQuery: searchQueryTrim})
        if (!searchQueryTrim) { setError(`Enter a search query to find the desired movie `) }
        else { setError('') };
    }

    useEffect(() => {
        if (!searchQuery) {
            return;
        }
        async function getMovieBySearchQuery() {
            try { 
                const responce = await fetchSearchMovie(searchQuery);
                if (responce.results.length === 0) {
                     setError(`No movies were found by the request  "${searchQuery}"`);
                     return;
                }
                const moviesNew = responce.results;
                setMovies(moviesNew);
            }
            catch (e) {
                console.log(e);
            }
        }
        getMovieBySearchQuery();

    }, [searchQuery])

    return (
        <ContainerMovies>
        <Formik
                initialValues={{
                    searchQueryForm: '',
                }}
                onSubmit={(values, {resetForm}) => {
                    handleSubmit(values.searchQueryForm);
                    resetForm();
                }}>
      <Form>
        <Input id="searchQueryForm" name="searchQueryForm"  />
        <Button type="submit">Search</Button>
      </Form>
            </Formik>
            {error && <p>{error}</p>}
            <MoviesList movies={movies} filter={searchQuery} />
        </ContainerMovies>
    )
}