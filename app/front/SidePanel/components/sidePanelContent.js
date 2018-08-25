import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {eventsCreate, sidePanelManage} from 'front/SidePanel/actions/sidePanelActions';
import {EventsList} from 'front/SidePanel';

class SidePanelContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: {}
    };
  }
  
  save = () => {
    const event = {
      name: this.state.name,
      description: this.state.description,
      position: this.props.event.position
    };
    
    this.props.eventsCreate(event)
    .then(() => {
      this.setState({event: {}});
      this.props.sidePanelManage();
    });
  }

  render() {
    return (
      <div className="row padding-top-80">
        <div className="col-xs-3">
          <EventsList />
        </div>
        
        <div className="col-xs-8">
          <form>
            <div className="form-group">
              <label>Donde te sucedio?</label>
              <br />
              {this.props.event.name ? <label>({this.props.event.name})</label> : <input className="form-control" onChange={e => this.setState({name: e.target.value})}/>}              
            </div>
            
            <div className="form-group">
              <label>Cuentanos que sucedio</label>
              <br />
              {this.props.event.description ? <label>({this.props.event.description})</label> : <textarea className="form-control" rows="3" onChange={e => this.setState({description: e.target.value})}/>}              
            </div>

            <button type="button" className="btn btn-primary" onClick={() => {this.save();}}>Registrar</button>
          </form>
        </div>
      </div>
    );
  }
}

SidePanelContent.propTypes = {
  sidePanelManage: PropTypes.func,
  eventsCreate: PropTypes.func,
  event: PropTypes.object
};

function mapStateToProps({maps}) {
  const {event} = maps;
  return {event: event.toJS()};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({eventsCreate, sidePanelManage}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SidePanelContent);
