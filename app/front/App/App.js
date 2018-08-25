import PropTypes from 'prop-types';
import React, {Component} from 'react';
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
        App
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
