// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolSortSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7.132 0.317C7.636 -0.094 8.364 -0.094 8.869 0.317L8.973 0.411L15.589 7.027L15.683 7.132C16.094 7.636 16.094 8.364 15.683 8.868L15.589 8.973L8.973 15.589C8.47 16.092 7.672 16.123 7.132 15.683L7.028 15.589L0.411 8.973C-0.125 8.436 -0.125 7.564 0.411 7.027L7.028 0.411L7.132 0.317ZM8 14.438L13.689 8.75H2.312L8 14.438ZM2.312 7.25H13.689L8 1.561L2.312 7.25Z"/>
  </svg>
);

const aDSDiagramSymbolSortIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolSortSvg,
  'ads-diagram-symbol-sort'
);

/**![ADSDiagramSymbolSort](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNNy4xMzIgMC4zMTdDNy42MzYgLTAuMDk0IDguMzY0IC0wLjA5NCA4Ljg2OSAwLjMxN0w4Ljk3MyAwLjQxMUwxNS41ODkgNy4wMjdMMTUuNjgzIDcuMTMyQzE2LjA5NCA3LjYzNiAxNi4wOTQgOC4zNjQgMTUuNjgzIDguODY4TDE1LjU4OSA4Ljk3M0w4Ljk3MyAxNS41ODlDOC40NyAxNi4wOTIgNy42NzIgMTYuMTIzIDcuMTMyIDE1LjY4M0w3LjAyOCAxNS41ODlMMC40MTEgOC45NzNDLTAuMTI1IDguNDM2IC0wLjEyNSA3LjU2NCAwLjQxMSA3LjAyN0w3LjAyOCAwLjQxMUw3LjEzMiAwLjMxN1pNOCAxNC40MzhMMTMuNjg5IDguNzVIMi4zMTJMOCAxNC40MzhaTTIuMzEyIDcuMjVIMTMuNjg5TDggMS41NjFMMi4zMTIgNy4yNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolSortIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolSort';
}

export default RefIcon;
