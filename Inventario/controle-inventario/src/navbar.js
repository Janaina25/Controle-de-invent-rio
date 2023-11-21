
import Nav from 'react-bootstrap/Nav';
import React from 'react';



const NavbarExample = () => { 
    return (

    <Nav className='navbar' fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item className='navbar-link'>
            <Nav.Link className='Link-nav' href="">Cadastro</Nav.Link>
        </Nav.Item>

        <Nav.Item className='navbar-link'>
            <Nav.Link className='Link-nav' eventKey="link-1">Inventário</Nav.Link>
        </Nav.Item>
      
        <Nav.Item className='navbar-link'>
            <Nav.Link className='Link-nav' eventKey="link-2">Formulário</Nav.Link>
        </Nav.Item>
      
        <Nav.Item className='navbar-link'>
            <Nav.Link className='Link-nav' eventKey="link-3" Link>Relatórios</Nav.Link>
        </Nav.Item>

        <Nav.Item className='navbar-link'>
            <Nav.Link className='Link-nav' eventKey="link-4">Dashboards</Nav.Link>
        </Nav.Item>

        <Nav.Item className='navbar-link'>
            <Nav.Link className='Link-nav' eventKey="link-5">Instruções</Nav.Link>
        </Nav.Item>        

        <Nav.Item className='navbar-link'>
            <Nav.Link className='Link-nav-sair' eventKey="link-5">Sair</Nav.Link>
        </Nav.Item>        

    </Nav>
  );
};

export default NavbarExample;



    