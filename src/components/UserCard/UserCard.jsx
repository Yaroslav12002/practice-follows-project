import PropTypes from 'prop-types';

import { UserCardContainer, NameLabelThumb } from './UserCard.styled';
import UserCardAvatar from '../UserCardAvatar';
import TweetsLabel from '../TweetsLabel';
import FollowersLabel from '../FollowersLabel';
import FollowButton from '../FollowButton';
import NameLabel from '../NameLabel';

const UserCard = ({ user, isFollowed, changeFollowed }) => {
  const { id, user: userName, avatar, tweets, followers } = user;
  return (
    <li>
      <UserCardContainer>
        <NameLabelThumb>
          <NameLabel name={userName} />
        </NameLabelThumb>
        <UserCardAvatar avatar={avatar} user={userName} />
        <TweetsLabel tweets={tweets} />
        <FollowersLabel followers={followers} />
        <FollowButton
          isFollowed={isFollowed}
          changeFollowed={changeFollowed}
          id={id}
        />
      </UserCardContainer>
    </li>
  );
};

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
  isFollowed: PropTypes.bool.isRequired,
  changeFollowed: PropTypes.func.isRequired,
};

export default UserCard;
