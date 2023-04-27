import PropTypes from 'prop-types';
import { Select, FilterStyled, FilterWrapper } from './Filter.styled';

const Filter = ({ handleChange }) => {
  return (
    <FilterWrapper>
      <FilterStyled>
        <label>
          Choose option for filtering
          <Select name="filter" onInput={handleChange}>
            <option value="all">All</option>
            <option value="follow">Follow</option>
            <option value="followings">Followings</option>
          </Select>
        </label>
      </FilterStyled>
    </FilterWrapper>
  );
};

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Filter;
