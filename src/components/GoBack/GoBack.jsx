import PropTypes from 'prop-types';
import { HiArrowLeft } from 'react-icons/hi';
import { StyledLink, GoBackWrapper } from './GoBack.styled';

const GoBack = ({ to, children }) => {
  return (
    <GoBackWrapper>
      <StyledLink to={to}>
        <HiArrowLeft />
        {children}
      </StyledLink>
    </GoBackWrapper>
  );
};

GoBack.propTypes = {
  to: PropTypes.string,
  children: PropTypes.string,
};

export default GoBack;
