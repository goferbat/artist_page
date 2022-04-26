import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import './Header.css';

const Header = () => {
    return (
        <div>
        <Navbar bg="light" variant='light' sticky='top'>
        <Container>
        <Navbar.Brand href="/">DCLN</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/MERCH">MERCH</Nav.Link>
            <Nav.Link href="/MUSIC">MUSIC</Nav.Link>
            <LinkContainer to="/DEMOS">
              <Nav.Link>DEMOS</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
      </div>
    )
}

export default Header