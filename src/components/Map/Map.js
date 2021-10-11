import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup, NavigationControl } from 'react-map-gl';
import * as activityData from '../../data/finnish-np.json';

const navControlStyle = {
  right: 20,
  top: 20
};

export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 62.2393002,
    longitude: 25.745951,
    width: '90vw',
    height: '80vh',
    zoom: 5
  });

  const [selectedActivity, setselectedActivity] = useState(null);

  return (
  <>
    <div className="map-section">
      <div className="map-container">
        <ReactMapGL 
          {...viewport} 
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} 
          mapStyle="mapbox://styles/etureppu/ckko4uviw6cm517phe15s7kfl"
          onViewportChange={viewport => {
            setViewport(viewport);
          }}
        >
          <NavigationControl className="navControl" style={navControlStyle} />
          {activityData.data.map(activity => (
            <Marker
              key={activity.id} 
              latitude={activity.location.lat}
              longitude={activity.location.lon}
            >
              <button className="marker-btn" onClick={e => {
                e.preventDefault();
                setselectedActivity(activity);
              }}
            >
                <img src="/walk.png" alt="walk icon" className="activity-icon" />
              </button>
            </Marker>
          ))}

          {selectedActivity ? (
            <Popup
              closeButton={true}
              closeOnClick={true}
              latitude={selectedActivity.location.lat}
              longitude={selectedActivity.location.lon}
              onClose={() => {
                setselectedActivity(null);
              }}
            >
              <h2 className="np-name">{selectedActivity.name}</h2>
              <p className="np-location">{selectedActivity.location.address.locality}</p>
              <a href={selectedActivity.info_url} target="_blank" rel="noreferrer">Lisäinfoa luontoon.fi</a>
            </Popup>
          ) : null}
        </ReactMapGL>
      </div>
    </div>
  </>);
}