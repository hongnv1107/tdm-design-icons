// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTableSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.5 8.75H6.5V12.5H14C14.276 12.5 14.5 12.276 14.5 12V8.75ZM1.5 12C1.5 12.276 1.724 12.5 2 12.5H5V8.75H1.5V12ZM14.5 4C14.5 3.724 14.276 3.5 14 3.5H6.5V7.25H14.5V4ZM1.5 7.25H5V3.5H2C1.724 3.5 1.5 3.724 1.5 4V7.25ZM16 12C16 13.105 15.105 14 14 14H2C0.895 14 0 13.105 0 12V4C0 2.895 0.895 2 2 2H14C15.105 2 16 2.895 16 4V12Z"/>
  </svg>
);

const aDSTableIconDefinition = svgToIconDefinition(
  aDSTableSvg,
  'ads-table'
);

/**![ADSTable](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTQuNSA4Ljc1SDYuNVYxMi41SDE0QzE0LjI3NiAxMi41IDE0LjUgMTIuMjc2IDE0LjUgMTJWOC43NVpNMS41IDEyQzEuNSAxMi4yNzYgMS43MjQgMTIuNSAyIDEyLjVINVY4Ljc1SDEuNVYxMlpNMTQuNSA0QzE0LjUgMy43MjQgMTQuMjc2IDMuNSAxNCAzLjVINi41VjcuMjVIMTQuNVY0Wk0xLjUgNy4yNUg1VjMuNUgyQzEuNzI0IDMuNSAxLjUgMy43MjQgMS41IDRWNy4yNVpNMTYgMTJDMTYgMTMuMTA1IDE1LjEwNSAxNCAxNCAxNEgyQzAuODk1IDE0IDAgMTMuMTA1IDAgMTJWNEMwIDIuODk1IDAuODk1IDIgMiAySDE0QzE1LjEwNSAyIDE2IDIuODk1IDE2IDRWMTJaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTableIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTable';
}

export default RefIcon;
