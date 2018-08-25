import React, {Component} from 'react';

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <div className="topBar">
        <ul>
          <li>Mapa</li>
        </ul>
      </div>
    );
  }
}

export default Topbar;
