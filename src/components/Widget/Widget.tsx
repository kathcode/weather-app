import React from 'react';
import IWidget from '../../types/widget';
import CardContainer from '../CardContainer/CardContainer';

export default function Widget({ widgetType }: IWidget) {
  return (
    <CardContainer>
      <h1 data-testid="widget-type">{widgetType}</h1>
    </CardContainer>
  );
}
