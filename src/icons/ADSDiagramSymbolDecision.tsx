// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolDecisionSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7.132 0.317C7.636 -0.094 8.364 -0.094 8.869 0.317L8.973 0.411L15.589 7.027L15.683 7.132C16.094 7.636 16.094 8.364 15.683 8.868L15.589 8.973L8.973 15.589C8.47 16.092 7.672 16.123 7.132 15.683L7.028 15.589L0.411 8.973C-0.125 8.436 -0.125 7.564 0.411 7.027L7.028 0.411L7.132 0.317ZM1.562 8L8 14.438L14.439 8L8 1.561L1.562 8Z"/>
  </svg>
);

const aDSDiagramSymbolDecisionIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolDecisionSvg,
  'ads-diagram-symbol-decision'
);

/**![ADSDiagramSymbolDecision](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNNy4xMzIgMC4zMTdDNy42MzYgLTAuMDk0IDguMzY0IC0wLjA5NCA4Ljg2OSAwLjMxN0w4Ljk3MyAwLjQxMUwxNS41ODkgNy4wMjdMMTUuNjgzIDcuMTMyQzE2LjA5NCA3LjYzNiAxNi4wOTQgOC4zNjQgMTUuNjgzIDguODY4TDE1LjU4OSA4Ljk3M0w4Ljk3MyAxNS41ODlDOC40NyAxNi4wOTIgNy42NzIgMTYuMTIzIDcuMTMyIDE1LjY4M0w3LjAyOCAxNS41ODlMMC40MTEgOC45NzNDLTAuMTI1IDguNDM2IC0wLjEyNSA3LjU2NCAwLjQxMSA3LjAyN0w3LjAyOCAwLjQxMUw3LjEzMiAwLjMxN1pNMS41NjIgOEw4IDE0LjQzOEwxNC40MzkgOEw4IDEuNTYxTDEuNTYyIDhaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolDecisionIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolDecision';
}

export default RefIcon;
