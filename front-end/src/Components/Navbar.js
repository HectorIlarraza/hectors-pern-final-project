import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
        <Link to={"/products"}>
            <h1>Gligamesh Weapons Vault</h1>
        </Link>
        <p>Swords to save them all OR to destroy it all</p>
    </nav>
  );
}
