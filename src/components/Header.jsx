import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {
    return (
        <Navbar bg="light" variant='light'>
        <Container>
        <Navbar.Brand href="/">DCLN</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/MERCH">MERCH</Nav.Link>
            <Nav.Link href="/MUSIC">MUSIC</Nav.Link>
            <LinkContainer to="/DEMOS">
              <Nav.Link>DEMOS</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default Header