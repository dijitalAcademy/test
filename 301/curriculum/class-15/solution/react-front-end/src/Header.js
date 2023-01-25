import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavItem }  from 'react-bootstrap';
import AuthButtons from './Auth/AuthButtons';
import { withAuth0 } from '@auth0/auth0-react';
import { Link } from "react-router-dom";
import './header.css';

class Header extends React.Component {
  render() {
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        <NavItem><Link to="/profile" className="nav-link">Profile</Link></NavItem>
        <AuthButtons />
      </Navbar>
    )
  }
}

export default withAuth0(Header);
