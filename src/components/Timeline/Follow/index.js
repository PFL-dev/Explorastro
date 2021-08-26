import React from 'react';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import defaultAvatar from 'src/assets/images/luffy.png';
import satoru from 'src/assets/images/Satoru.jpg';

import { RiUserFollowLine } from 'react-icons/ri';

export default function Follow({ props, loggedUserId }) {
  const {
    date: { locales },
    follower,
    followed,
    message,
  } = props;
  return (
    <div className="follow">
      <div className="follow__title">
        {/* Avatar url TO ADD ! */}
        <img src={props.avatar_url} alt="avatar" />
        <h3> <Link to={`/profile/${loggedUserId}`}>{follower.username}</Link> {message.fr} <Link to="/profile">{followed.username}</Link></h3>
      </div>

      <div className="follow__content">
        {/* <Link to="/profile" className="follow__content__image"> */}
        <img src={defaultAvatar} alt="avatar" />
        {/* </Link> */}
        <span className="follow__content-buttonUpdate">
          <RiUserFollowLine />
        </span>
        {/* <Link to="/profile" className="follow__content__image"> */}
        <img src={satoru} alt="avatar" />
        {/* </Link> */}

      </div>

      <div className="follow__date">
        <p>{locales.fr}</p>
      </div>
    </div>
  );
}

Follow.propTypes = {
  props: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  follower: PropTypes.objectOf(PropTypes.string).isRequired,
  followed: PropTypes.objectOf(PropTypes.string).isRequired,
  message: PropTypes.objectOf(PropTypes.string).isRequired,
  loggedUserId: PropTypes.number.isRequired,
};
