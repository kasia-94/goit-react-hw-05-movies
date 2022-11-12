import { HiArrowLeft } from 'react-icons/hi';
import { StyledLink } from './BackLink.styled';
import { useLocation } from 'react-router-dom';

export const BackLink = () => {
  const { state } = useLocation();
  return (
    state?.from && (
      <StyledLink to={state.from}>
        <HiArrowLeft size="24" />
        <span>Go back</span>
      </StyledLink>
    )
  );
};
