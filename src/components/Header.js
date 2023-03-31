import {useRef, useState, useContext} from "react"
import {Navbar, Container, Nav, Modal, Button, Form} from 'react-bootstrap'
import "../Styles/header.scss"
import {GlobalContext} from '../context/GlobalState'

function Header(){
    const{toggleLogin} = useContext(GlobalContext) 
    const [modal, setModal] = useState(false)
    const [input, setInput] = useState({
        username: '',
        password: '',
        confirmPassword: ''
      });
     
    const [error, setError] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    })
    const [list, setList] = useState('');
    const [login, setLogin] = useState(true);
    const [validUser, setValidUser] = useState(true)
    const navRef = useRef();


    const showHeader = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    const toggleModal = () => {
        setModal(!modal)
    }

    const onInputChange = e => {
        const {name, value} = e.target
        setInput(prev => ({
            ...prev,
            [name]: value
        }))
        validateInput(e)
    }
   
    const validateInput = e => {
        let {name, value} = e.target;
        setError(prev => {
            const stateObj = { 
                ...prev, 
                [name]: ""
            }

            switch(name){
                case "username":
                    if (!value) {
                        stateObj[name] = "Please enter Username.";
                    }
                    break;
            
                case "password":
                    if (!value) {
                        stateObj[name] = "Please enter Password.";
                    }
                    if (value !== input.confirmPassword) {
                        stateObj["confirmPassword"] = "Password does not match.";
                    }
                    break;
            
                case "confirmPassword":
                    if (input.password && value !== input.password) {
                        stateObj[name] = "Password does not match.";
                    }
                    break;
            
                default:
                    break;
            }
            return stateObj
        })
    }


    const submitHandler = (event) => {
        event.preventDefault();

        if(login){
            login = false;
        }

        fetch("http://localhost:4000/signup",{
            method:"POST",
            crossDomain: true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json".replace,
                "Access-Control-Allow-Origin":"*",
            },
            body: JSON.stringify({
                username: input.username,
                password: input.password,
                list,
                list,
            }),
            
        }).then((res)=>res.json()).then((data) => {
            toggleModal()
            toggleLogin(input.username)
            
        })
        
    }

    const handleLogin = (event) => {
        event.preventDefault();
        
        if(!login){
            setLogin(true);
        }
        else{
            fetch("http://localhost:4000/login",{
                method:"POST",
                crossDomain: true,
                headers:{
                    "Content-Type":"application/json",
                    Accept:"application/json".replace,
                    "Access-Control-Allow-Origin":"*",
                },
                body: JSON.stringify({
                    username: input.username,
                    password: input.password,
                }),
                
            }).then((res)=>res.json()).then((data) => {
                if(data.status == "ok"){
                    toggleModal()
                    toggleLogin(input.username)
                    setValidUser(true)
                }
                else{
                    setValidUser(false)
                }
                
            })
            console.log("yo")
        }
    }

    const handleSignup = (event) => {
        event.preventDefault();

        if(login){
            setLogin(false);
        }
        else{
            fetch("http://localhost:4000/signup",{
                method:"POST",
                crossDomain: true,
                headers:{
                    "Content-Type":"application/json",
                    Accept:"application/json".replace,
                    "Access-Control-Allow-Origin":"*",
                },
                body: JSON.stringify({
                    username: input.username,
                    password: input.password,
                    list,
                    list,
                }),
                
            }).then((res)=>res.json()).then((data) => {
                toggleModal()
                toggleLogin(input.username)
                
            })
        }
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
                    <button className="btn-signup" onClick={toggleModal}>Log in</button>
                </Nav> */}
                </Navbar.Collapse>
            </Container>

            <Modal show={modal} onHide={toggleModal}>
                <Modal.Header closeButton>
                    {login ? 
                        <Modal.Title className="ms-auto">Log in</Modal.Title> :
                        <Modal.Title className="ms-auto">Sign up</Modal.Title>
                    }
                </Modal.Header>
                <Modal.Body classN>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Username" 
                            name="username"
                            value={input.username}
                            onChange={onInputChange}
                            onBlur={validateInput}
                        />
                        {error.username && <span className='err'>{error.username}</span>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password: </Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            name="password"
                            value={input.password}
                            onChange={onInputChange}
                            onBlur={validateInput}
                        />
                        {error.password && <span className='err'>{error.password}</span>}
                    </Form.Group>
                    {!login &&
                        <div className="signup">
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Confirm password: </Form.Label>
                                <Form.Control 
                                    type="password" 
                                    placeholder="Confirm Password"
                                    name="confirmPassword"
                                    value={input.confirmPassword}
                                    onChange={onInputChange}
                                    onBlur={validateInput}
                                />
                                {error.confirmPassword && <span className='err'>{error.confirmPassword}</span>}
                            </Form.Group>
                            <div className="form-btn">
                                <Button 
                                    variant="secondary" 
                                    onClick={handleSignup}
                                    disabled={
                                        error.confirmPassword ||
                                        error.password ||
                                        error.username}
                                >
                                    Sign up
                                </Button>
                                <Button variant="primary" onClick={handleLogin}>
                                    Login
                                </Button>
                             </div>
                        </div>
                    }
                    {login &&
                        <div className="form-btn">
                            {!validUser && <span className='err'>Incorrect user/password</span>} 
                            <Button 
                                variant="primary" 
                                onClick={handleLogin}
                                disabled={
                                    error.password ||
                                    error.username}
                            >
                                Login
                            </Button>
                            <Button variant="secondary" onClick={handleSignup}>
                                Sign up
                            </Button>
                        </div>  
                    }
                </Form>
                </Modal.Body>
            </Modal>
        </Navbar>
    )
}

export default Header
