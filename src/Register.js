import React, { Component } from 'react'
import Person1 from './Person1'

export default class Register extends Component {


    constructor(){
        super()
        this.state={
            emailRequired:"",
            passwordRequired:"",
            email:"",
            password:"",
            mobileError:"",
            passwordMinChars:""
        }
    }
    
    registerUser=()=>{
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
                else if(e.target.value.length<8){
                    this.setState({
                        passwordRequired:"password should contain atleast 8 chars"
                    })

                }
                else{
                    this.setState({
                        passwordRequired:"",
                        password:e.target.value
                    })
                }
            }

            checkConfirmPassword=(e)=>{
                if(e.target.value !=this.state.password){
                    this.setState({
                        passwordMisMatch:"Password and confirm password are not same"
                    })
                }
                else{
                    this.setState({
                        passwordMisMatch:""
                    })
                }
            }

            //Check the number of digits in mobile 
            checkMobile=(e)=>{
                if(e.target.value.length!=10){
                    this.setState({
                        mobileError:"Mobile number shud have 10 digits"
                    })
                }
                else
                {
                    this.setState({
                        mobileError:""
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
                        <input  type="password" onBlur={this.checkPassword}  onChange={this.checkPassword}/>
                        {this.state.passwordRequired}
                        <br/>
                        {this.state.passwordMinChars}

                    </div>
                    <div>
                        <label>confirm password</label>
                        <input  type="password" onBlur={this.checkConfirmPassword} onChange={this.checkConfirmPassword}/>
                        {this.state.passwordMisMatch}
                    </div>
                    <div>
                        <label>mobile</label>
                        <input type="number"  onBlur={this.checkMobile} onChange={this.checkMobile}/>
                        {this.state.mobileError}
                    </div>
                    <div>
                        <button onClick={this.registerUser} type="button">
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
