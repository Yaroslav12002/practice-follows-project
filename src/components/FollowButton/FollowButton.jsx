import PropTypes from 'prop-types';
import { Button } from './FollowButton.styled';

const FollowButton = ({ isFollowed, changeFollowed, id }) => {
  const handleChengeFollowed = () => {
    changeFollowed(id);
  };

  return (
    <Button onClick={handleChengeFollowed} changeBgColor={isFollowed}>
      {isFollowed ? 'following' : 'follow'}
    </Button>
  );
};

FollowButton.propTypes = {
  isFollowed: PropTypes.bool.isRequired,
  changeFollowed: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default FollowButton;
