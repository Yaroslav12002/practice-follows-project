import PropTypes from 'prop-types';
import {
  AvatarWrapper,
  AvatarImage,
  ElipseImage,
} from './UserCardAvatar.styled';
import placeholder from '../../images/Card/card-avatar-placeholder.png';
import ellipse from '../../images/Card/ellipse.png';

const UserCardAvatar = ({ avatar, user }) => {
  return (
    <AvatarWrapper>
      <AvatarImage
        src={placeholder}
        alt={user}
        width="62"
        height="62"
        onError={e => (e.currentTarget.src = { avatar })}
      />
      <ElipseImage src={ellipse} width="80" height="80" />
    </AvatarWrapper>
  );
};

UserCardAvatar.propTypes = {
  avatar: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};

export default UserCardAvatar;
