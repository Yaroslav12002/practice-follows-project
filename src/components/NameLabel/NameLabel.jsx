import PropTypes from 'prop-types';
import { NamePlate, NameWrapper } from './NameLabel.styled';

const NameLabel = ({ name }) => {
  return (
    <NameWrapper>
      <NamePlate>{name}</NamePlate>
    </NameWrapper>
  );
};

NameLabel.propTypes = {
  name: PropTypes.string,
};

export default NameLabel;
