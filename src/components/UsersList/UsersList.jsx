import PropTypes from 'prop-types';
// import { useState } from 'react';
import UserCard from '../UserCard';
import { List } from './UserList.styled';

// func;

const UserList = ({ users }) => {
  // const [followedUsers, setFollowedUsers] = useState(
  //   JSON.parse(localStorage.getItem('followed')) || []
  // );

  return (
    <List>
      {users.map(user => {
        return (
          // <UserCard key={user.id} user={user} followed={isFollowed(user.id)} />
          <UserCard key={user.id} user={user} />
        );
      })}
    </List>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.exact),
};

export default UserList;
