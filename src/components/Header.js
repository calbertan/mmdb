import {useRef, useState} from "react"
import {Navbar, Container, Nav, Modal, Button, Form} from 'react-bootstrap'
import "../Styles/header.scss"

function Header(){
    const [modal, setModal] = useState(false)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navRef = useRef();

    const showHeader = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    const toggleModal = () => {
        setModal(!modal)
    }

    const usernameHandler = (event) => {
        setUsername(event.target.value);
    };

    const passwordHandler = (event) => {
        setPassword(event.target.value);
    };
    
    const submitHandler = (event) => {
        event.preventDefault();

        return alert(username);
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
                <Nav className="ms-auto">
                    <button className="btn-signup" onClick={toggleModal}>Log in</button>
                </Nav>
                </Navbar.Collapse>
            </Container>

            <Modal show={modal} onHide={toggleModal}>
                <Modal.Header closeButton>
                    <Modal.Title className="ms-auto">Log in</Modal.Title>
                </Modal.Header>
                <Modal.Body classN>
                <Form onSubmit={submitHandler}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Username" 
                            value={username}
                            onChange={usernameHandler}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password: </Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            value={password}
                            onChange={passwordHandler}
                        />
                    </Form.Group>
                    <div className="form-btn">
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                        <Button variant="secondary" type="submit">
                            Sign up
                        </Button>
                    </div>
                </Form>
                </Modal.Body>
            </Modal>
        </Navbar>
    )
}

export default Header
