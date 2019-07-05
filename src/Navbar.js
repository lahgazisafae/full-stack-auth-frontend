import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component{


    handleClick=(e)=>{
      //if logged in 
      if(e.target.innerText === "Logout")
        localStorage.removeItem('token')
      //remove Item
      else{
        window.history.pushState({url:'/login'}, "", "/login")
        this.forceUpdate()
      }

      //else 
        //redirect to a login
    
    }
    render(){
    return(

        <div className="ui three item menu">
            <Link to="/home" className="active item">Home</Link>
            <Link to="/profile" className="item">Profile</Link>
    <Link to="/login">
      <button onClick={this.handleClick}>{localStorage.getItem('token') === null ? "Login": "Logout"}</button>
    </Link>
        </div>
    )
    }
    //dynamically render LOGOUT button
  //  {localStorage.getItem("token") ? "Logout" : "Login" }



}
export default Navbar;