// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramArrowheadManyRightSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M15.372 4.65L10.824 7.249H16V8.749H10.824L15.372 11.348L14.628 12.65L7.801 8.749H0V7.249H7.801L14.628 3.348L15.372 4.65Z"/>
  </svg>
);

const aDSDiagramArrowheadManyRightIconDefinition = svgToIconDefinition(
  aDSDiagramArrowheadManyRightSvg,
  'ads-diagram-arrowhead-many-right'
);

/**![ADSDiagramArrowheadManyRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xNS4zNzIgNC42NUwxMC44MjQgNy4yNDlIMTZWOC43NDlIMTAuODI0TDE1LjM3MiAxMS4zNDhMMTQuNjI4IDEyLjY1TDcuODAxIDguNzQ5SDBWNy4yNDlINy44MDFMMTQuNjI4IDMuMzQ4TDE1LjM3MiA0LjY1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramArrowheadManyRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramArrowheadManyRight';
}

export default RefIcon;
