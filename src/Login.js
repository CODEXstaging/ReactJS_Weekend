import { Component } from "react";
import { Link } from "react-router-dom";
import Register from "./Register";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import FormControl from 'react-bootstrap/FormControl'
class Login extends Component{

    constructor(){
        super()
        this.state={
            password:"",
            passwordError:"",
            email:"",
            emailError:"",
        }
    }


    changePassword=(e)=>{
        this.setState({
            password:e.target.value
        })
        this.validatePassword(e)
    }

    changeEmail=(e)=>{
        this.setState({
            email:e.target.value
        })
        if(e.target.value!="")
        { this.setState({
             emailError:""
         })
     }
    }

    
    login=()=>{
        console.log(this.state)
    }


    
    validateEmail=(e)=>{
        if(e.target.value==""){
            this.setState({
                emailError:"email is required"
            })
        }
        else{
            this.setState({
                emailError:""
            })

        }
        
    }
    validatePassword=(e)=>{
        if(e.target.value==""){
            this.setState({
                passwordError:"password is required"
            })
        }
        else{
            this.setState({
                passwordError:""
            })

        }
    }
    
    render(){
            return(<div>

<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>


<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" value={this.state.email} onChange={this.changeEmail} onBlur={this.validateEmail} placeholder="Enter email"  />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" value={this.state.password} onChange={this.changePassword} onBlur={this.validatePassword} />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
  </Form.Group>
  <Button variant="success" onClick={this.login} type="button">Login</Button>{' '}
                <Button variant="danger" type="reset">Cancel</Button>
</Form>


                
           new user ? please <Link  to="/register">Register</Link>
                <br/>
            </div>)
    }
}
export default Login