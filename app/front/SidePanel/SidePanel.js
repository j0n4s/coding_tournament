import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'react-sidebar';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {sidePanelManage} from 'front/SidePanel/actions/sidePanelActions';
import {SidePanelContent} from 'front/SidePanel';

class SidePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSetSidebarOpen = (open) => {
    this.props.sidePanelManage(open);
  }

  render() {
    return (
      <Sidebar
        sidebar={<SidePanelContent />}
        open={this.props.show}
        onSetOpen={this.onSetSidebarOpen}
        styles={{sidebar: {background: 'white', width: '500px'}}}
      >
        <div></div>
      </Sidebar>
    );
  }
}

SidePanel.propTypes = {
  sidePanelManage: PropTypes.func,
  show: PropTypes.boolean
};

function mapStateToProps({sidePanel}) {
  const {show} = sidePanel;
  return {show: show.get('open')};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({sidePanelManage}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SidePanel);
