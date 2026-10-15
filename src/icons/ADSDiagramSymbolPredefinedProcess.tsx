// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolPredefinedProcessSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.5 3.5C14.5 3.258 14.329 3.056 14.101 3.01L14 3H13V13H14C14.276 13 14.5 12.776 14.5 12.5V3.5ZM4.5 13H11.5V3H4.5V13ZM1.5 12.5C1.5 12.776 1.724 13 2 13H3V3H2C1.724 3 1.5 3.224 1.5 3.5V12.5ZM16 12.5C16 13.605 15.105 14.5 14 14.5H2C0.895 14.5 0 13.605 0 12.5V3.5C0 2.395 0.895 1.5 2 1.5H14L14.204 1.511C15.213 1.613 16 2.464 16 3.5V12.5Z"/>
  </svg>
);

const aDSDiagramSymbolPredefinedProcessIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolPredefinedProcessSvg,
  'ads-diagram-symbol-predefined-process'
);

/**![ADSDiagramSymbolPredefinedProcess](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTQuNSAzLjVDMTQuNSAzLjI1OCAxNC4zMjkgMy4wNTYgMTQuMTAxIDMuMDFMMTQgM0gxM1YxM0gxNEMxNC4yNzYgMTMgMTQuNSAxMi43NzYgMTQuNSAxMi41VjMuNVpNNC41IDEzSDExLjVWM0g0LjVWMTNaTTEuNSAxMi41QzEuNSAxMi43NzYgMS43MjQgMTMgMiAxM0gzVjNIMkMxLjcyNCAzIDEuNSAzLjIyNCAxLjUgMy41VjEyLjVaTTE2IDEyLjVDMTYgMTMuNjA1IDE1LjEwNSAxNC41IDE0IDE0LjVIMkMwLjg5NSAxNC41IDAgMTMuNjA1IDAgMTIuNVYzLjVDMCAyLjM5NSAwLjg5NSAxLjUgMiAxLjVIMTRMMTQuMjA0IDEuNTExQzE1LjIxMyAxLjYxMyAxNiAyLjQ2NCAxNiAzLjVWMTIuNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolPredefinedProcessIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolPredefinedProcess';
}

export default RefIcon;
