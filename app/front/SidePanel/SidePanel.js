import React, {Component} from 'react';
import Sidebar from 'react-sidebar';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {sidePanelManage} from 'front/SidePanel/actions/sidePanelActions';

class SidePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {sidebarOpen: this.props.sidebarOpen};
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({sidebarOpen: open});
  }

  render() {
    this.props.sidePanelManage();
    return (
      <Sidebar
        sidebar={<b>Sidebar content</b>}
        open={this.props.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{sidebar: { background: "white" }}}
      >
        <button onClick={() => this.onSetSidebarOpen(true)}>
          Open sidebar
        </button>
      </Sidebar>
    );
  }
}

function mapStateToProps({sidePanel}) {
  const {sidebarOpen} = sidePanel;

  return {sidebarOpen};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({sidePanelManage}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SidePanel);

/*export default SidePanel;*/