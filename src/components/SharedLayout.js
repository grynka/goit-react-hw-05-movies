import { Outlet } from "react-router-dom";
import { Container, Header, Logo, Link } from "./SharedLayout.styled";
import { GiFilmStrip } from 'react-icons/gi';


export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <GiFilmStrip />
Moovie        </Logo>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/Movies">Movies</Link>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};