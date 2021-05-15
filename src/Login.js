import React, { Component } from 'react'

export default class Login extends Component {

    constructor(){
        super()
        this.state={
            emailRequired:"",
            passwordRequired:"",
            email:"",
            password:""
        }
    }
    
    loginUser=()=>{
        console.log('inside login')
        console.log(JSON.stringify(this.state))
    }

    checkEmail=(e)=>{
console.log("inside check email button")
        if(e.target.value=="")
        {
            this.setState({
                emailRequired:"Email ID is required"
            })
        }
        else{
            this.setState({
                emailRequired:"",
                email:e.target.value
            })
        }
    }
    checkPassword=(e)=>{
        console.log("inside check email button")
                if(e.target.value=="")
                {
                    this.setState({
                        passwordRequired:"password is required"
                    })
                }
                else{
                    this.setState({
                        passwordRequired:"",
                        password:e.target.value
                    })
                }
            }

    render() {
        return (
            <div>
                <form>
                    <div>
                        <label>email</label>
                        <input type="text" type="email" onBlur={this.checkEmail} onChange={this.checkEmail}/>
                        {this.state.emailRequired}
                    </div>
                    <div>
                        <label>password</label>
                        <input type="text" type="password" onBlur={this.checkPassword}  onChange={this.checkPassword}/>
                        {this.state.passwordRequired}
                    </div>
                    <div>
                        <button onClick={this.loginUser} type="button">
                            Login
                        </button>
                        <button type="reset">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
