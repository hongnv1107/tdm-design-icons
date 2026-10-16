// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramArrowheadOneOrManyRightSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M15.372 4.65L10.824 7.249H16V8.749H10.824L15.372 11.348L14.628 12.65L8 8.862V11.999H6.5V8.749H0V7.249H6.5V3.999H8V7.135L14.628 3.348L15.372 4.65Z"/>
  </svg>
);

const aDSDiagramArrowheadOneOrManyRightIconDefinition = svgToIconDefinition(
  aDSDiagramArrowheadOneOrManyRightSvg,
  'ads-diagram-arrowhead-one-or-many-right'
);

/**![ADSDiagramArrowheadOneOrManyRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xNS4zNzIgNC42NUwxMC44MjQgNy4yNDlIMTZWOC43NDlIMTAuODI0TDE1LjM3MiAxMS4zNDhMMTQuNjI4IDEyLjY1TDggOC44NjJWMTEuOTk5SDYuNVY4Ljc0OUgwVjcuMjQ5SDYuNVYzLjk5OUg4VjcuMTM1TDE0LjYyOCAzLjM0OEwxNS4zNzIgNC42NVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramArrowheadOneOrManyRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramArrowheadOneOrManyRight';
}

export default RefIcon;
