import PropTypes from 'prop-types';
import { useState } from 'react';
import UserCard from '../UserCard';
import { List } from './UserList.styled';

const LOCALSTORAGE_KEY = 'followed';

const UserList = ({
  users,
  filter,
  userFollowersIncrease,
  userFollowersDecrease,
}) => {
  const [followedUsers, setFollowedUsers] = useState(
    JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || []
  );

  const isFollowed = id => {
    return followedUsers.includes(id);
  };

  const handleChangeFollowed = id => {
    let newFollowedUsers = {};
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

  const visibleUsers = (allUsers, currentFilter) => {
    let filteredList = [];
    switch (currentFilter) {
      case 'all':
        return users;

      case 'follow':
        filteredList = allUsers.filter(
          user => !followedUsers.includes(user.id)
        );
        return filteredList;

      case 'followings':
        filteredList = allUsers.filter(user => followedUsers.includes(user.id));
        return filteredList;

      default:
        return users;
    }
  };

  return (
    <List>
      {visibleUsers(users, filter).map(user => {
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
  filter: PropTypes.string.isRequired,
  userFollowersIncrease: PropTypes.func,
  userFollowersDecrease: PropTypes.func,
};

export default UserList;
