import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import defaultAvatar from 'src/assets/images/luffy.png';
import satoru from 'src/assets/images/Satoru.jpg';
import follow from 'src/assets/images/follow.png';

export default function HasFollow({ loggedUserId, onClickUser }) {
  return (
    <div className="follow">
      <div className="follow__title">
        <img src={defaultAvatar} alt="avatar" />
        <h3> <Link to={`/profile/${loggedUserId}`} onClick={onClickUser}>John Doe</Link> à commencé à vous suivre</h3>
      </div>

      <div className="follow__content">
        {/* <Link to="/profile" className="follow__content__image"> */}
        <img src={defaultAvatar} alt="avatar" />
        {/* </Link> */}
        <img src={follow} alt="follow" />
        {/* <Link to="/profile" className="follow__content__image"> */}
        <img src={satoru} alt="avatar" />
        {/* </Link> */}

      </div>

      <div className="follow__date">
        <p>Le Mardi 29 Août à 13h48</p>
      </div>
    </div>
  );
}

HasFollow.propTypes = {
  loggedUserId: PropTypes.number.isRequired,
  onClickUser: PropTypes.func.isRequired,
};
