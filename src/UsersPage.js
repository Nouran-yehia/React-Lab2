import React from 'react';
import axios from 'axios';
import {
  Link
} from "react-router-dom";

 export default class UsersPage extends React.Component{
        constructor(props){
          super(props);
          this.state = {users: []};
        }
        componentDidMount(){
          axios.get('https://jsonplaceholder.typicode.com/users')
          .then((result)=>this.setState({users: result.data}))
        }

        render(){
            return(
                <div>
                    {this.state.users.map(user => 
                    <div className="user" key="user.id">
                        <div>{user.name}</div>
                        <div>{user.phone}</div>
                        <div>{user.email}</div>
                        <div><Link to={`/users/${user.id}/posts`} >Show Posts</Link></div>
                    </div>
                    )}
                </div>
            )
        }
        
    
        
    }