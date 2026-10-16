// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramArrowheadOnlyOneUpRightSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.187 2.873L11.711 5.348L14.01 7.646L12.949 8.707L10.651 6.408L9.59 7.469L11.889 9.768L10.828 10.828L8.529 8.529L2.873 14.187L1.813 13.126L7.469 7.469L5.171 5.171L6.231 4.11L8.529 6.408L9.591 5.348L7.293 3.05L8.354 1.989L10.651 4.287L13.126 1.813L14.187 2.873Z"/>
  </svg>
);

const aDSDiagramArrowheadOnlyOneUpRightIconDefinition = svgToIconDefinition(
  aDSDiagramArrowheadOnlyOneUpRightSvg,
  'ads-diagram-arrowhead-only-one-up-right'
);

/**![ADSDiagramArrowheadOnlyOneUpRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTQuMTg3IDIuODczTDExLjcxMSA1LjM0OEwxNC4wMSA3LjY0NkwxMi45NDkgOC43MDdMMTAuNjUxIDYuNDA4TDkuNTkgNy40NjlMMTEuODg5IDkuNzY4TDEwLjgyOCAxMC44MjhMOC41MjkgOC41MjlMMi44NzMgMTQuMTg3TDEuODEzIDEzLjEyNkw3LjQ2OSA3LjQ2OUw1LjE3MSA1LjE3MUw2LjIzMSA0LjExTDguNTI5IDYuNDA4TDkuNTkxIDUuMzQ4TDcuMjkzIDMuMDVMOC4zNTQgMS45ODlMMTAuNjUxIDQuMjg3TDEzLjEyNiAxLjgxM0wxNC4xODcgMi44NzNaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramArrowheadOnlyOneUpRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramArrowheadOnlyOneUpRight';
}

export default RefIcon;
