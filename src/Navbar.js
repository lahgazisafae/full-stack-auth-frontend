import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component{


    handleClick=(e)=>{

        if(e.target.innerText === "Logout"){
          localStorage.removeItem('token')
          this.forceUpdate()}
        else
            console.log("login!")

    }
    render(){
    return(

        <div className="ui three item menu">
            <Link to="/home" className="active item">Home</Link>
            <Link to="/profile" className="item">Profile</Link>
    <Link to="/login"><button onClick={this.handleClick}>{localStorage.getItem('token') === null ?"Login":"Logout"}</button></Link>
        </div>
    )
    }
    //dynamically render LOGOUT button
  //  {localStorage.getItem("token") ? "Logout" : "Login" }



}
export default Navbar;