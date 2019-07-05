import React from 'react';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

class Login extends React.Component{

    constructor(){
        super()
        this.state = {
            user:{username:'',
            password:'',
            first_name:'',
            last_name:''},
            errors:''
        }
    }

    handleChange = (e)=>{

        this.setState({user:{...this.state.user,[e.target.name]:e.target.value}}, ()=>console.log(this.state))

    }
    
    handleSignUp= (e)=>{
        //write out the fetch
            //update UI accordingly
           // const user = this.state.user
           e.preventDefault()
           console.log("user", this.state.user)

        fetch('http://localhost:3000/users',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body:JSON.stringify(this.state.user)
        }).then(res=> res.json())
        .then(console.log)


    }

    signUpForm= ()=>{
        return(
        <form className="ui form">
            <div className="field">
                <label>First Name</label>
                <input onChange = {this.handleChange} type="text" name="first_name" placeholder="First Name"/>
            </div>
            <div className="field">
                <label>Last Name</label>
                <input onChange = {this.handleChange} type="text" name="last_name" placeholder="Last Name"/>
            </div>
            <div className="field">
                <label>Username</label>
                <input onChange = {this.handleChange} type="text" name="username" placeholder="Username"/>
            </div>
            <div className="field">
                <label>Password</label>
                <input onChange = {this.handleChange} type="password" name="password" placeholder="Password"/>
            </div>
            <div className="field">
                <div className="ui checkbox">
                <input type="checkbox" tabindex="0" classNameName="hidden"/>
                <label>I agree to the Terms and Conditions</label>
                </div>
            </div>
            <button onClick = {this.handleSignUp} className="ui button" type="submit">Submit</button>
        </form>
        )

    }

    handleLogin=(e)=>{
        e.preventDefault()

        let userObject = {username: this.state.user.username,
            password:this.state.user.password}
            console.log(userObject)
        fetch('http://localhost:3000/login',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userObject)
        })
        .then(res => res.json())
        .then(data =>{
           
        } )

    }

    
    loginForm =()=>{
        return(

        <form className="ui form">
            <div className="field">
                <label>Username</label>
                <input onChange = {this.handleChange} type="text" name="username" placeholder="Username"/>
            </div>
            <div className="field">
                <label>Password</label>
                <input onChange = {this.handleChange} type="password" name="password" placeholder="Password"/>
            </div>
            <button onClick={this.handleLogin} className="ui button" type="submit">Submit</button>
            <Link to= "/signup">Don't have an account? Sign Up</Link> 
        </form>
        )
    }

    render(){

        return(
            <div>
                <Route exact path = '/signup' render = {this.signUpForm}/>

                <Route exact path = '/login' render = {this.loginForm}/>
            </div>
        )
    }




}

export default Login;