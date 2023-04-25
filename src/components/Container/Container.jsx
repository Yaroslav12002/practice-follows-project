import PropTypes from 'prop-types';

import { ContainerDiv } from './Container.styled';

function Container({ children }) {
  return <ContainerDiv>{children}</ContainerDiv>;
}

Container.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Container;
