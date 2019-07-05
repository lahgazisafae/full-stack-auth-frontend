import React from 'react';


class Profile extends React.Component{


    handleEditClick=(e)=>{
        //do a fetch that passes 
        console.log("edit button")

        fetch('http://localhost:3000/profile/edit',{
            method: 'POST',
            body:JSON.stringify({data:"action to authorize"}),
            headers:{
                'Access-Token': localStorage.getItem('token'),
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(data => console.log(data))

    }
    render(){
        return(
            <div className="ui card">
                <div className="image">
                    <img src="https://cdn0.iconfinder.com/data/icons/shopping-197/48/bl_872_profile_avatar_anonymous_customer_user_head_human-512.png"/>
                </div>
                <div className="content">
                    <a className="header">{this.props.name}</a>
                    <div className="meta">
                    </div>
                    <div className="description">
                    Kristy is an art director living in New York.
                    </div>
                </div>
                <div className="extra content">
                    <a>
                    <i className="user icon"></i>
                    22 Friends
                    </a>
                </div>
                <button onClick={this.handleEditClick} class="ui primary button">Edit Profile</button>
            </div>
        )

    }

    
}

export default Profile;