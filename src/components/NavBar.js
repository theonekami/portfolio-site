import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom';




export const NavBar =() =>{
    const { pathname } = useLocation();

    const [scrolled, seScrolled] = useState(false);

    const navItems = [
    { id: 'artist', title: 'Artist', text: 'View My Artworks', href: '#artist' },
    { id: 'gamedev', title: 'Game Developer', text: 'All the Games i\'ve worked on ', href: '#art' },
    { id: 'cybercrime', title: 'CyberCrime Analyst', text: 'My Certifications', href: '#projects' },
    { id: 'uiux', title: 'UI/UX Analyzer', text: 'My UI/UX work', href: '#projects2' },
];

    useEffect (()=> {
        const onScroll =() =>{
            if(window.scrollY>50){
                seScrolled(true);
            }else{
                seScrolled(false);
            }

        }
        window.addEventListener("scroll",onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    },[])


    return (
        <Navbar expand="md" className={scrolled ? "scrolled":""}>
        <Container>
            {/*<Navbar.Toggle aria-controls="basic-navbar-nav" > 
            <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>*/}
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="nav-cards">
                    {navItems.map((item) => (
                            <Card
                            as={Link}
                            to={`/${item.id}`}
                            key={item.id}
                            className={`nav-card nav-card-${item.id} ${pathname === `/${item.id}` ? 'active' : ''}`}

                            
                            >
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>{item.text}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </Nav>
                
                <span className="navbar-text">
                    <span className="social-icon">
                        <a href="#"> </a> {/*add icons*/}
                        <a href="#"> </a> {/*add icons*/}
                        <a href="#"> </a> {/*add icons*/}
                    </span>
            {/*   <button className="vvd" onClick={()=> console.log("connect0")}><span>Contact me</span></button>*/}
                </span>
               
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}
