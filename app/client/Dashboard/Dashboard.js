import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';

export class Dashboard extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <div>
        <span>IN DASHBOARD</span>
      </div>
    );
  }
}

Dashboard.propTypes = {
  
};

export default Dashboard;
