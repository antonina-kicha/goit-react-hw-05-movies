import { GoBackButton } from './BackLink.styled';
import { BsArrowLeft } from 'react-icons/bs';
import PropTypes from 'prop-types';


export const BackLink = ({ to, children }) => {
  return (
    <GoBackButton to={to}>
      <BsArrowLeft size="16" />
      {children}
    </GoBackButton>
  );
};

BackLink.propTypes = {
    to: PropTypes.object,
    children: PropTypes.string,

  }