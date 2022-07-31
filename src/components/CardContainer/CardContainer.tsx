import React from 'react';
import styled from 'styled-components';

export const CardContainerStyled = styled.section`
  background-color: ${(props: any) => props.bgColor};
`;

export default function CardContainer({ bgColor, children }) {
  return (
    <CardContainerStyled data-testid="card-container">
      {children}
    </CardContainerStyled>
  );
}
