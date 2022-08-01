import React from 'react';
import styled from 'styled-components';

import ICardContainer from '../../types/Card';


// Styled components
export const CardContainerStyled = styled.section`
  background-color: ${(props: any) => props.bgColor || '#cccccc'};
`;

export default function CardContainer({ bgColor, children }: ICardContainer) {
  return (
    <CardContainerStyled bgColor={bgColor} data-testid="card-container">
      {children}
    </CardContainerStyled>
  );
}
