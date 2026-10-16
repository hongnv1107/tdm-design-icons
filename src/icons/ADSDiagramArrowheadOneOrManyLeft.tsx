// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramArrowheadOneOrManyLeftSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8 7.135V3.999H9.5V7.249H16V8.749H9.5V11.999H8V8.862L1.372 12.65L0.628 11.348L5.176 8.749H0V7.249H5.176L0.628 4.65L1.372 3.348L8 7.135Z"/>
  </svg>
);

const aDSDiagramArrowheadOneOrManyLeftIconDefinition = svgToIconDefinition(
  aDSDiagramArrowheadOneOrManyLeftSvg,
  'ads-diagram-arrowhead-one-or-many-left'
);

/**![ADSDiagramArrowheadOneOrManyLeft](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik04IDcuMTM1VjMuOTk5SDkuNVY3LjI0OUgxNlY4Ljc0OUg5LjVWMTEuOTk5SDhWOC44NjJMMS4zNzIgMTIuNjVMMC42MjggMTEuMzQ4TDUuMTc2IDguNzQ5SDBWNy4yNDlINS4xNzZMMC42MjggNC42NUwxLjM3MiAzLjM0OEw4IDcuMTM1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramArrowheadOneOrManyLeftIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramArrowheadOneOrManyLeft';
}

export default RefIcon;
