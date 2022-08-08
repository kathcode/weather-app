import styled from 'styled-components';
import { IIcon } from '../../types/Icon';
import { BackgroundContainer } from '../Styled/BackgroundContainer/BackgroundContainer';

const IconStyled = styled(BackgroundContainer)`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = ({ children, bgColor }: IIcon) => (
  <IconStyled
    data-testid="container"
    bgColorDefault="#FFFFFF"
    bgColor={bgColor}
  >
    {children}
  </IconStyled>
);
