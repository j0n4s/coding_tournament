import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {sidePanelManage} from 'front/SidePanel/actions/sidePanelActions';


class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPlace: {name: 'Ecuador'}
    };
  }
  
  onMarkerClick = () => {
    console.log('onMarkerClick>> ');
  }
  
  onMapClicked = (point) => {
    console.log('point: ', point);
  }
  
  render() {
    var points = [
      { lat: 42.02, lng: -77.01 },
      { lat: 42.03, lng: -77.02 },
      { lat: 41.03, lng: -77.04 },
      { lat: 42.05, lng: -77.02 }
    ];
    
    var bounds = new this.props.google.maps.LatLngBounds();
    for (var i = 0; i < points.length; i++) {
      bounds.extend(points[i]);
    }
    
    return (
      <Map google={this.props.google} zoom={14} onClick={this.onMapClicked}>
        <Marker onClick={this.onMarkerClick} name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}


export default GoogleApiWrapper({apiKey: 'AIzaSyDOAO2_i3zixBUPIv7TU5HPV5xJt4374hU'})(Maps);
/*export default Maps;*/
