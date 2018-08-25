import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Topbar from 'front/Topbar';
import Maps from 'front/Maps';
import SidePanel from 'front/SidePanel';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './scss/styles.scss';

export class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <div id="app">
        <Topbar />
        <SidePanel />
        <Maps />
      </div>
    );
  }
}

App.propTypes = {
  
};

App.defaultProps = {
  user: {}
};

App.contextTypes = {
  getUser: PropTypes.func
};

export default App;
