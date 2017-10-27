import React, { Component } from 'react';
import Immutable from 'immutable';
import MapGL, { Layer, Source } from '@urbica/react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './App.css';

const layer = Immutable.fromJS({
  id: 'rasterMap',
  type: 'raster',
  source: 'rasterMap',
  layout: {
    visibility: 'visible'
  },
  minzoom: 13,
  maxzoom: 18
});

const source = Immutable.fromJS({
  type: 'raster',
  url: 'https://kuzminki.urbica.co/tessella/draw/index.json',
  tileSize: 512
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <MapGL
          style={{ width: "100%", height: "100vh" }}
          mapStyle="mapbox://styles/mapbox/light-v9"
          accessToken={'pk.eyJ1IjoidGF0aWFuYWl2YW5uaWtvdmEiLCJhIjoiY2o0bzA3azRnMWd0ZTJ3cGcxdHd2NnUzYSJ9.2ps-jd_6FNsnteFLjqsvog'}
          bearing={-31.00000000000046}
          latitude={55.7086682328293}
          longitude={37.7648968216331}
          pitch={58.99999999999999}
          zoom={14.5}
        >
          <Source id='rasterMap' source={source} />
          <Layer layer={layer} />
        </MapGL>
      </div>
    );
  }
}

export default App;
