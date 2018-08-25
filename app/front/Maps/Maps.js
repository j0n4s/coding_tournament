import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {sidePanelManage} from 'front/SidePanel/actions/sidePanelActions';
import {checkPoint} from 'front/Maps/actions/mapsActions';

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPlace: {name: 'Ecuador'}
    };
  }
  
  onMapClicked = (props, marker, event) => {
    this.props.sidePanelManage(true);

    const position = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    };
    
    /*this.props.checkPoint(position);*/
  }
  
  onMarkerClick = (props, marker) => {
    
  }
  
  render() {
    return (
      <Map google={this.props.google} zoom={14} onClick={this.onMapClicked}>
        <Marker
          title={'The marker`s title will appear as a tooltip.'}
          name={'SOMA'}
          position={{lat: 37.778519, lng: -122.405640}} />
        <Marker
          name={'Dolores park'}
          position={{lat: 37.759703, lng: -122.428093}} />
        <Marker />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div><h1>{this.state.selectedPlace.name}</h1></div>
        </InfoWindow>
      </Map>
    );
  }
}

Maps.propTypes = {
  google: PropTypes.object,
  sidePanelManage: PropTypes.func,
  checkPoint: PropTypes.func
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({sidePanelManage, checkPoint}, dispatch);
}

export default connect(null, mapDispatchToProps)(GoogleApiWrapper({apiKey: 'AIzaSyDOAO2_i3zixBUPIv7TU5HPV5xJt4374hU'})(Maps));
/*export default Maps;*/
