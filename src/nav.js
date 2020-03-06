import React from 'react';
import {
  Link
} from "react-router-dom";

export default class Nav extends React.Component {
    render() {    
      return (
        <table>
          <tr>
            <td><Link to='/users' >Users</Link></td>
            <td><Link to='/Posts'>Posts</Link></td>
          </tr> 
        </table>
      );
    }
  }
