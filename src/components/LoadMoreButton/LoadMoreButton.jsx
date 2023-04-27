import PropTypes from 'prop-types';
import { Button, Spinner } from './LoadMoreButton.styled';
const LoadMoreButton = ({ loadMore, isLoading, isFiltering }) => {
  return (
    <Button onClick={loadMore} disabled={isLoading || isFiltering}>
      {isLoading && <Spinner />}
      Load more
    </Button>
  );
};

LoadMoreButton.propTypes = {
  loadMore: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isFiltering: PropTypes.bool.isRequired,
};

export default LoadMoreButton;
