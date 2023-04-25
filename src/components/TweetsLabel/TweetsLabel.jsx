import PropTypes from 'prop-types';
import { Tweets } from './TweetsLabel.styled';

const TweetsLabel = ({ tweets }) => {
  return <Tweets> {tweets} tweets</Tweets>;
};

TweetsLabel.propTypes = {
  tweets: PropTypes.number,
};

export default TweetsLabel;
