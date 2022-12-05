import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { MAPS_API_KEY } from '../constants';

const mapStyles = {
    width: '100%',
    height: '100%'
};

export class GoogleMap extends Component {
state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
};

onMarkerClick = (props, marker, e) =>
    this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
    });

onClose = props => {
    if (this.state.showingInfoWindow) {
        this.setState({
            showingInfoWindow: false,
            activeMarker: null
    });
    }
};

render() {
    return (
    <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
            lat: 40.425869,
            lng: -86.908066
        }}
        >
        <Marker
            onClick={this.onMarkerClick}
            name={'West Lafayette'}
        />
        <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
        >
        <div>
            <h4>{this.state.selectedPlace.name}</h4>
        </div>
        </InfoWindow>
    </Map>
    );
}
}

export default GoogleApiWrapper({
    apiKey: MAPS_API_KEY
})(GoogleMap);
