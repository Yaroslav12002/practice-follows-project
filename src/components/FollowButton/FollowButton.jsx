import PropTypes from 'prop-types';
import { Button } from './FollowButton.styled';

const FollowButton = ({ isFollowed }) => {
  return <Button> {isFollowed} following</Button>;
};

FollowButton.propTypes = {
  isFollowed: PropTypes.bool,
};

export default FollowButton;
