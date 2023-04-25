import PropTypes from 'prop-types';
import { Followers } from './FollowersLabel.styled';

const FollowersLabel = ({ followers }) => {
  return <Followers> {followers} followers</Followers>;
};

FollowersLabel.propTypes = {
  followers: PropTypes.number,
};

export default FollowersLabel;
