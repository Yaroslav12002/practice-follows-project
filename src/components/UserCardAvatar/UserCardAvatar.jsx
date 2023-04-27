import PropTypes from 'prop-types';
import {
  AvatarWrapper,
  AvatarPicture,
  EllipseImage,
} from './UserCardAvatar.styled';
import placeholder from '../../images/Card/card-avatar-placeholder.png';
import placeholder2x from '../../images/Card/card-avatar-placeholder@2x.png';
import ellipse from '../../images/Card/ellipse.png';
import ellipse2x from '../../images/Card/ellipse@2x.png';

const UserCardAvatar = ({ avatar, user }) => {
  return (
    <AvatarWrapper>
      <AvatarPicture>
        <source srcSet={`${placeholder} 1x,${placeholder2x} 2x`} />
        <img
          src={placeholder}
          alt={user}
          width="62"
          height="62"
          onError={e => (e.currentTarget.src = { avatar })}
        />
      </AvatarPicture>
      <picture>
        <source srcSet={`${ellipse} 1x,${ellipse2x} 2x`} />
        <EllipseImage src={ellipse} alt="ellipse" width="80" height="80" />
      </picture>
    </AvatarWrapper>
  );
};

UserCardAvatar.propTypes = {
  avatar: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};

export default UserCardAvatar;
