import React from 'react';
import {Map, TileLayer, Marker, Popup, GeoJSON} from 'react-leaflet';
import styles from './LeafletMap.css';
import geoJSON from '../../assets/barsPerNeighborhood.json';

const LeafletMap = () => {
  require('../../assets/leaflet.css');
  const position = [45.52, -122.67];
  const zoomLvl = 11;
  const geoJsonLayer = geoJSON;
  function returnText(neighborhood, bars) {
    if (bars > 1) {
      return neighborhood + ' has ' + bars.toString() + ' bars';
    } else if (bars === 1) {
      return neighborhood + ' has ' + bars.toString() + ' bar';
    } else {
      return neighborhood + ' has no bars';
    }
  }
  function overFeature(feature, layer) {
    layer.bindPopup(returnText(feature.properties.name, feature.properties.bars));
    layer.on('click', function(e) {
      e.target.openPopup();
    })
  }
    return (
      <div id="map">
        <Map center={position} zoom={zoomLvl}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
        <GeoJSON data={geoJsonLayer} onEachFeature={overFeature} opacity={.2} />
        </Map>
      </div>
    );
}

export default LeafletMap;
