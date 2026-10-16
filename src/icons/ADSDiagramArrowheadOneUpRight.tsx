// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramArrowheadOneUpRightSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.187 2.873L11.888 5.171L14.187 7.47L13.126 8.53L10.827 6.231L2.873 14.187L1.813 13.126L9.768 5.171L7.47 2.873L8.53 1.813L10.828 4.11L13.126 1.813L14.187 2.873Z"/>
  </svg>
);

const aDSDiagramArrowheadOneUpRightIconDefinition = svgToIconDefinition(
  aDSDiagramArrowheadOneUpRightSvg,
  'ads-diagram-arrowhead-one-up-right'
);

/**![ADSDiagramArrowheadOneUpRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xNC4xODcgMi44NzNMMTEuODg4IDUuMTcxTDE0LjE4NyA3LjQ3TDEzLjEyNiA4LjUzTDEwLjgyNyA2LjIzMUwyLjg3MyAxNC4xODdMMS44MTMgMTMuMTI2TDkuNzY4IDUuMTcxTDcuNDcgMi44NzNMOC41MyAxLjgxM0wxMC44MjggNC4xMUwxMy4xMjYgMS44MTNMMTQuMTg3IDIuODczWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramArrowheadOneUpRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramArrowheadOneUpRight';
}

export default RefIcon;
