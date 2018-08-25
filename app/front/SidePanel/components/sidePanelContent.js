import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {eventsCreate} from 'front/SidePanel/actions/sidePanelActions';
import {EventsList} from 'front/SidePanel';

class SidePanelContent extends Component {
  constructor(props) {
    super(props);
    this.state = {event: {}};
  }
  
  save = () => {
    const event = {
      name: this.state.name,
      description: this.state.description,
      position: this.props.position
    };
    
    this.props.eventsCreate(event);
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
              <input 
                className="form-control"
                onChange={e => this.setState({name: e.target.value})}/>
            </div>
            
            <div className="form-group">
              <label>Cuentanos que sucedio</label>
              <textarea 
                className="form-control"
                rows="3" 
                onChange={e => this.setState({description: e.target.value})}/>
            </div>

            <button type="button" className="btn btn-primary" onClick={() => {this.save()}}>Registrar</button>
          </form>
        </div>
      </div>
    );
  }
}

SidePanelContent.propTypes = {
  sidePanelManage: PropTypes.func,
  eventsCreate: PropTypes.func,
  position: PropTypes.object
};

function mapStateToProps({maps}) {
  const {position} = maps;
  return {position: position.toJS()};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({eventsCreate}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SidePanelContent);
