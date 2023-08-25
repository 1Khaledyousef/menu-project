import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const NavBar = ({ filterbySearch }) => {
  const [searchValue, setSearchValue] = useState('')
  const onSearch = () => {
    filterbySearch(searchValue)
    setSearchValue('')
  }
  return (
    <div className=''>
      <Navbar expand="lg" className="navbarcolor"  >
        <Container  >
          <Navbar.Brand className='brandcolor' >مطعم جديد</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll " className='btntogggle' />
          <Navbar.Collapse id="navbarScroll" >
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >

            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="text"
                placeholder="ابحث..."
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}

              />
              <Button onClick={onSearch} className='btn btn-search mx-3' >ابحث</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar;
