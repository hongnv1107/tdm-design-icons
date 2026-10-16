// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolLoopLimitSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1.5 7.062V12.5H14.5V7.062L10.939 3.5H5.062L1.5 7.062ZM16 12.625C16 13.384 15.384 14 14.625 14H1.375C0.616 14 0 13.384 0 12.625V7.009C0 6.644 0.145 6.294 0.402 6.036L4.036 2.402L4.138 2.312C4.382 2.111 4.69 2 5.009 2H10.991C11.31 2 11.618 2.111 11.862 2.312L11.964 2.402L15.598 6.036L15.689 6.138C15.889 6.382 16 6.69 16 7.009V12.625Z"/>
  </svg>
);

const aDSDiagramSymbolLoopLimitIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolLoopLimitSvg,
  'ads-diagram-symbol-loop-limit'
);

/**![ADSDiagramSymbolLoopLimit](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMS41IDcuMDYyVjEyLjVIMTQuNVY3LjA2MkwxMC45MzkgMy41SDUuMDYyTDEuNSA3LjA2MlpNMTYgMTIuNjI1QzE2IDEzLjM4NCAxNS4zODQgMTQgMTQuNjI1IDE0SDEuMzc1QzAuNjE2IDE0IDAgMTMuMzg0IDAgMTIuNjI1VjcuMDA5QzAgNi42NDQgMC4xNDUgNi4yOTQgMC40MDIgNi4wMzZMNC4wMzYgMi40MDJMNC4xMzggMi4zMTJDNC4zODIgMi4xMTEgNC42OSAyIDUuMDA5IDJIMTAuOTkxQzExLjMxIDIgMTEuNjE4IDIuMTExIDExLjg2MiAyLjMxMkwxMS45NjQgMi40MDJMMTUuNTk4IDYuMDM2TDE1LjY4OSA2LjEzOEMxNS44ODkgNi4zODIgMTYgNi42OSAxNiA3LjAwOVYxMi42MjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolLoopLimitIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolLoopLimit';
}

export default RefIcon;
