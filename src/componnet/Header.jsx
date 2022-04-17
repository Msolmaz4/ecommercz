import React from 'react'
import { Navbar,Container,Nav} from 'react-bootstrap'
import './Header.css'
import {BsFillBasket3Fill} from 'react-icons/bs'
import Homescren from '../screens/Homescren'

const Header = () => {
  return (
    <div>


<Navbar bg="primary" expand="lg">
  <Container>
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    
      <Nav className="ml-auto">
      <Nav.Link >SHEY SHOP</Nav.Link>
      
      <Nav.Link href="#link">Logın</Nav.Link>
        <Nav.Link href="#link">
       < BsFillBasket3Fill/>
       <span>0</span>
        </Nav.Link>
      
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>




    
    </div>
  )
}

export default Header