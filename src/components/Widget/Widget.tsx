import React from 'react';

import CloudIcon from '@mui/icons-material/Cloud';

import IWidget from '../../types/widget';
import CardContainer from '../CardContainer/CardContainer';
import { Icon } from '../Icon/Icon';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .text {
    padding-left: 20px;
  }
`;

const Value = styled.h1`
  text-align: center;
  font-size: 50px;
  padding: 0px;
  margin: 30px 30px 5px 30px;
`;

export default function Widget({
  title,
  subtitle,
  children,
  bgColor,
  value,
}: IWidget) {
  return (
    <CardContainer bgColor={bgColor}>
      <section>
        <Header>
          <Icon>
            <CloudIcon color="primary" />
          </Icon>
          <div className="text">
            <h3 data-testid="widget-type">{title}</h3>
            {subtitle && <p data-testid="subtitle">{subtitle}</p>}
          </div>
        </Header>

        <Value>{value.toFixed(0)}</Value>

        {children}
      </section>
    </CardContainer>
  );
}
