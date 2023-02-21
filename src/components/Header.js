import {useRef} from "react"
import {Navbar, Container, Nav} from 'react-bootstrap'
import "../Styles/header.scss"

function Header(){
    const navRef = useRef();

    const showHeader = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    return (
        <Navbar className="navbar" expand="lg">
            <Container className="nav-container">
                <Navbar.Brand href="/" className="brand">mmdb</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link className="navlist" href="/">Readlist</Nav.Link>
                    <Nav.Link className="navlist" href="/completed">Completed</Nav.Link>
                    <Nav.Link className="navlist" href="/add">Add +</Nav.Link>
                </Nav>
                {/* <Nav className="ms-auto">
                    <button className="btn-signup" Sign Up>Sign Up</button>
                </Nav> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
