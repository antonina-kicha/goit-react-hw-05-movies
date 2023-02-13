import { Suspense } from "react";
import { Container, Header, StyledLink, Link } from './SharedLayout.styled';
import { Outlet } from "react-router-dom";


export const SharedLayout = () => {
    return (
        <Container>
            <Header>
                <StyledLink>
                    <Link to="/" end> Home </Link>
                    <Link to="/movies"> Movies </Link>
                </StyledLink>
            </Header>
            <Suspense fallback={<div>Loading page...</div>}>
                <Outlet />
            </Suspense>
    </Container>
  );
};

