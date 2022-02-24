import { Link } from 'react-router-dom';
import { Heading, Nav, Anchor } from 'grommet';
import { Login, Cart, New } from 'grommet-icons';
import { AppBar } from '../styles/HeaderTheme';

export default function Navbar() {
  return (
    <AppBar>
        <Heading level='1' margin='none' as={Link} to={"/products"} color="#6FFFB0">Gligamesh Weapon's Vault</Heading>
        <br />
        <Nav direction='row'>
          <Anchor icon={<Login />} hoverIndicator label="Login" color="brand" as={Link} to={"/"} />
          <Anchor icon={<Cart />} hoverIndicator label="Cart" color="#6FFFB0" />
          <Anchor icon={<New />} hoverIndicator label="Submit New Weapon" color="brand" as={Link} to={"/products/new"}/>
        </Nav>
    </AppBar>
  );
}
