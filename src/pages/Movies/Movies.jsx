import {fetchSearchMovie} from 'api'

import React, { useEffect, useState } from 'react';
import { Formik , Form } from 'formik';
import { ContainerMovies, Input, Button } from './Movies.styled';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const Movies = () => {


    const [searchQuery, setSearchQuery] = useState('');
    const [error, setError] = useState('');
    const [movies, setMovies] = useState([]);

    const handleSubmit = (value) => {
        const searchQueryTrim = value.trim();
        setSearchQuery(searchQueryTrim); 
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
                console.log(responce.results);
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

                }}
    >
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