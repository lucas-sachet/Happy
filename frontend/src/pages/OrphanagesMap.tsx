import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import mapMarketImg from '../images/map-marker.svg';

import '../styles/pages/orphanages-map.css';
import 'leaflet/dist/leaflet.css';

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarketImg} alt="Happy"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Farroupilha</strong>
          <span>Rio Grande do Sul</span>
        </footer>
      </aside>
        
      <Map
        center={[-29.2107106,-51.3587088]}
        zoom={15}
        style={{ width:'100%', height: '100%' }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />   */}
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?acess_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />  
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;