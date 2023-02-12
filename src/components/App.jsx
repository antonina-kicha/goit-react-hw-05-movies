import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Movies } from '../pages/Movies/Movies';
import { Cast } from '../pages/Cast/Cast';
import { Reviews } from '../pages/Reviews/Reviews';

import {MovieDetails} from '../pages/MovieDetails/MovieDetails'
import {Container, Header, StyledLink, Link} from './App.styled'

export const App = () => {
  return (
    <Container>

      <Header>
        <StyledLink>
          <Link to = "/" end="true"> Home </Link>
          <Link to = "/movies"> Movies </Link>
        </StyledLink>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies  />} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews  />} />
        </Route>

      </Routes>

    </Container>
  );
};
