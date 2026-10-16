// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramArrowheadOneUpRightSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSDiagramArrowheadOneUpRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTQuMTg3IDIuODczTDExLjg4OCA1LjE3MUwxNC4xODcgNy40N0wxMy4xMjYgOC41M0wxMC44MjcgNi4yMzFMMi44NzMgMTQuMTg3TDEuODEzIDEzLjEyNkw5Ljc2OCA1LjE3MUw3LjQ3IDIuODczTDguNTMgMS44MTNMMTAuODI4IDQuMTFMMTMuMTI2IDEuODEzTDE0LjE4NyAyLjg3M1oiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramArrowheadOneUpRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramArrowheadOneUpRight';
}

export default RefIcon;
