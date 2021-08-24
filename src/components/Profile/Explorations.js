import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import nightSky from 'src/assets/images/nightSky.jpg';

export default function Explorations({ explorations }) {
  return (
    <div className="profile__explorations">
      {explorations.length > 0
        ? explorations.map((exploration) => (
          <div className="profile__explorations__item" key={exploration.id}>
            <img src={nightSky} className="explorations__item__thumbnail" alt={`Aperçu de l'exploration ${exploration.username}`} />
            <span className="profile__explorations__item__name">{exploration.name}</span>
            <Link type="button" className="profile__explorations__item__button button --secondary" to="/exploration">Informations</Link>
          </div>
        ))
        : <h2>Aucune exploration trouvée</h2>}
    </div>
  );
}

Explorations.propTypes = {
  explorations: PropTypes.array.isRequired,
};
