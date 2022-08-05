import styled from 'styled-components';
import { IIcon } from '../../types/Icon';
import { BackgroundContainer } from '../Styled/BackgroundContainer/BackgroundContainer';

const IconStyled = styled(BackgroundContainer)`
  border: 1px solid red;
`;

export const Icon = ({ children, bgColor }: IIcon) => (
  <IconStyled
    data-testid="container"
    bgColorDefault="#cccccc"
    bgColor={bgColor}
  >
    {children}
  </IconStyled>
);
