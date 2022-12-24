import { Link } from "./Navbar.styled"


const NavBar = () => {
  return (<nav>
<Link to="/" end>
  Home
</Link>
<Link to="/movies">Movies</Link>
</nav>)
}

export default NavBar