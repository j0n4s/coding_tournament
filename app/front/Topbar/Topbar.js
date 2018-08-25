import React, {Component} from 'react';
import {Link} from 'react-router';

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <div className="topBar">
        <ul>
          <li><Link to="/index">Mapa</Link></li>
        </ul>
      </div>
    );
  }
}

export default Topbar;
