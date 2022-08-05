import React from 'react';

import CloudIcon from '@mui/icons-material/Cloud';

import IWidget from '../../types/widget';
import CardContainer from '../CardContainer/CardContainer';
import { Icon } from '../Icon/Icon';

export default function Widget({ title, subtitle, children }: IWidget) {
  return (
    <CardContainer>
      <section>
        <header>
          <Icon>
            <CloudIcon />
          </Icon>
          <h1 data-testid="widget-type">{title}</h1>

          {subtitle && <p data-testid="subtitle">{subtitle}</p>}
        </header>
        <section>
          22º
          <label>Partly cloudy</label>
        </section>
        {children}
      </section>
    </CardContainer>
  );
}
