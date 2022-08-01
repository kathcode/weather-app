import React from 'react';
import styled from 'styled-components';

import { ICardContainer } from '../../types/card';

// Styled components
export const CardContainerStyled = styled.section<{
  bgColor: string | undefined;
}>`
  background-color: ${(props) => props.bgColor || '#cccccc'};
`;

export default function CardContainer({ bgColor, children }: ICardContainer) {
  return (
    <CardContainerStyled bgColor={bgColor} data-testid="card-container">
      {children}
    </CardContainerStyled>
  );
}
