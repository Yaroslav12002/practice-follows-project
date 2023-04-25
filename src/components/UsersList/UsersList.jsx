import PropTypes from 'prop-types';
import UserCard from '../UserCard';
import { List } from './UserList.styled';

const UserList = ({ users }) => {
  return (
    <List>
      {users.map(user => {
        return <UserCard key={user.id} user={user} />;
      })}
    </List>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.exact),
};

export default UserList;
