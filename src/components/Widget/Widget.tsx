import React from 'react';
import IWidget from '../../types/widget';
import CardContainer from '../CardContainer/CardContainer';

export default function Widget({ title, subtitle }: IWidget) {
  return (
    <CardContainer>
      <section>
        <h1 data-testid="widget-type">{title}</h1>

        {subtitle && <p data-testid="subtitle">{subtitle}</p>}
      </section>
    </CardContainer>
  );
}
