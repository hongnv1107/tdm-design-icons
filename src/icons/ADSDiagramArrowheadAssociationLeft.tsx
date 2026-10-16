// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramArrowheadAssociationLeftSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6.235 4.321L2.79 7.25H16V8.75H2.79L6.235 11.679L5.265 12.821L0.265 8.571C0.097 8.429 0 8.22 0 8C0 7.78 0.097 7.571 0.265 7.429L5.265 3.179L6.235 4.321Z"/>
  </svg>
);

const aDSDiagramArrowheadAssociationLeftIconDefinition = svgToIconDefinition(
  aDSDiagramArrowheadAssociationLeftSvg,
  'ads-diagram-arrowhead-association-left'
);

/**![ADSDiagramArrowheadAssociationLeft](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik02LjIzNSA0LjMyMUwyLjc5IDcuMjVIMTZWOC43NUgyLjc5TDYuMjM1IDExLjY3OUw1LjI2NSAxMi44MjFMMC4yNjUgOC41NzFDMC4wOTcgOC40MjkgMCA4LjIyIDAgOEMwIDcuNzggMC4wOTcgNy41NzEgMC4yNjUgNy40MjlMNS4yNjUgMy4xNzlMNi4yMzUgNC4zMjFaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramArrowheadAssociationLeftIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramArrowheadAssociationLeft';
}

export default RefIcon;
