import PropTypes from 'prop-types';
import { useState } from 'react';
import UserCard from '../UserCard';
import { List } from './UserList.styled';

const UserList = ({ users }) => {
  const [followedUsers, setFollowedUsers] = useState(
    JSON.parse(localStorage.getItem('followed')) || []
  );

  const isFollowed = id => {
    return followedUsers.includes(id);
  };

  const handleChangeFollowed = id => {
    if (isFollowed(id)) {
      const newFollowedUsers = followedUsers.filter(
        followedUser => followedUser !== id
      );
      setFollowedUsers([...newFollowedUsers]);
      return;
    }
    setFollowedUsers([...followedUsers, id]);
  };

  return (
    <List>
      {users.map(user => {
        return (
          <UserCard
            key={user.id}
            user={user}
            isFollowed={isFollowed(user.id)}
            changeFollowed={handleChangeFollowed}
          />
        );
      })}
    </List>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.exact),
};

export default UserList;
