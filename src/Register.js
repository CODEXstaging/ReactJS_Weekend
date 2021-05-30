import { Component } from "react";
import { Link } from "react-router-dom";

class Register extends Component{

    constructor(){
        super()
        this.state={
            userName:"",
            userNameError:"",
            password:"",
            passwordError:"",
            confirmPassword:"",
            confirmPasswordError:"",
            email:"",
            emailError:"",
            mobile:"",
            mobileError:""
        }
    }

    changeUserName=(e)=>{
        this.setState({
            userName:e.target.value
        })
       this.validateUserName(e)
    }
    

    changePassword=(e)=>{
        this.setState({
            password:e.target.value
        })

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

    changeConfirmPassword=(e)=>{
        this.setState({
            confirmPassword:e.target.value
        })

    }

    changeMobile=(e)=>{
        this.setState({
            mobile:e.target.value
        })
    }


    register=()=>{
        console.log(this.state)
    }


    validateUserName=(e)=>{
        if(e.target.value==""){
            this.setState({
                userNameError:"UserName is required"
            })
        }
        else{
            this.setState({
                userNameError:""
            })
        }
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
    validatePassword=()=>{
        
    }
    validateConfirmPassword=()=>{
        
    }
    validateMobile=()=>{
        
    }
    render(){
            return(<div>
                <form>
                    <div>
                        <label>UserName</label>
                        <input type="text" value={this.state.userName} onChange={this.changeUserName} onBlur={this.validateUserName}/>
                        {this.state.userNameError}
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" value={this.state.email} onChange={this.changeEmail} onBlur={this.validateEmail}/>
                        {this.state.passwordError}
                    </div>
                    <div>
                        <label>password</label>
                        <input type="password" value={this.state.password} onChange={this.changePassword} onBlur={this.validatePassword}/>
                        {this.state.passwordError}

                    </div>
                    <div>
                        <label>confirmPassword</label>
                        <input type="password" value={this.state.confirmPassword} onChange={this.changeConfirmPassword} onBlur={this.validateConfirmPassword}/>
                        {this.state.confirmPasswordError}

                    </div>
                    <div>
                        <label>Phone</label>
                        <input type="number" value={this.state.mobile} onChange={this.changeMobile} onBlur={this.validateMobile}/>
                        {this.state.mobileError}
                    </div>
                <div>
                    <button onClick={this.register} type="button">Register</button>
                    <button>Cancel</button>
                </div>
                </form>  
                Already registered ? Please<Link to="/login">Login</Link>         
            </div>)
    }
}
export default Register