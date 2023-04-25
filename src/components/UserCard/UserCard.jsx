import PropTypes from 'prop-types';

import { UserCardContainer, NameLabelThumb } from './UserCard.styled';
import UserCardAvatar from '../UserCardAvatar';
import TweetsLabel from '../TweetsLabel';
import FollowersLabel from '../FollowersLabel';
import FollowButton from '../FollowButton';
import NameLabel from '../NameLabel';

const UserCard = ({ user: { user, avatar, tweets, followers } }) => {
  return (
    <li>
      <UserCardContainer>
        <NameLabelThumb>
          <NameLabel name={user} />
        </NameLabelThumb>
        <UserCardAvatar avatar={avatar} user={user} />
        <TweetsLabel tweets={tweets} />
        <FollowersLabel followers={followers} />
        <FollowButton isFollowed={false} />
      </UserCardContainer>
    </li>
  );
};

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserCard;
