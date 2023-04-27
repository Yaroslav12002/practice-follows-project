import PropTypes from 'prop-types';
import { useState } from 'react';
import UserCard from '../UserCard';
import { List } from './UserList.styled';

const LOCALSTORAGE_KEY = 'followed';

const UserList = ({ users, userFollowersIncrease, userFollowersDecrease }) => {
  const [followedUsers, setFollowedUsers] = useState(
    JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || []
  );

  const isFollowed = id => {
    return followedUsers.includes(id);
  };

  const handleChangeFollowed = id => {
    let newFollowedUsers = [];
    if (isFollowed(id)) {
      newFollowedUsers = followedUsers.filter(
        followedUser => followedUser !== id
      );
      userFollowersDecrease(id);
    } else {
      newFollowedUsers = [...followedUsers, id];
      userFollowersIncrease(id);
    }
    setFollowedUsers([...newFollowedUsers]);
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(newFollowedUsers));
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
  userFollowersIncrease: PropTypes.func,
  userFollowersDecrease: PropTypes.func,
};

export default UserList;
