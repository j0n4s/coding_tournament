import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import {sidePanelManage, eventsGet} from 'front/SidePanel/actions/sidePanelActions';
import {checkPoint} from 'front/Maps/actions/mapsActions';

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPlace: {name: 'Ecuador'},
      loading: true
    };
  }

  componentWillMount() {
    this.props.eventsGet();
  }

  onMapClicked = (props, marker, event) => {
    const position = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    };
    
    this.props.checkPoint({position, name: '', description: ''});
    this.props.sidePanelManage(true);
  }
  
  onMarkerClick = ({name, description, position}) => {
    this.props.sidePanelManage(true);
    this.props.checkPoint({name, description, position});
  }
  
  render() {
    return (
      <div>
        <Map google={this.props.google} zoom={14} onClick={this.onMapClicked}>
          {this.props.events.map((event, index) => 
            <Marker
              key={index}
              description={event.get('description')}
              name={event.get('name')}
              onClick={this.onMarkerClick}
              position={{lat: event.get('position').get('lat'), lng: event.get('position').get('lng')}} />
          )}
        </Map>
      </div>
    );
  }
}

Maps.propTypes = {
  google: PropTypes.object,
  sidePanelManage: PropTypes.func,
  checkPoint: PropTypes.func,
  eventsGet: PropTypes.func,
  events: PropTypes.instanceOf(Immutable.List)
};

function mapStateToProps({maps}) {
  const {events} = maps;
  return {events};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({sidePanelManage, checkPoint, eventsGet}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleApiWrapper({apiKey: 'AIzaSyDOAO2_i3zixBUPIv7TU5HPV5xJt4374hU'})(Maps));
