// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTextUnderlineStrikethroughSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3.5 4.5H5V1H3.5V4.5Z"/><path d="M5.171 9C5.583 10.165 6.694 11 8 11C9.306 11 10.417 10.165 10.829 9H12.388C11.934 11.004 10.142 12.5 8 12.5C5.858 12.5 4.066 11.004 3.612 9H5.171Z"/><path d="M12.5 4.5H11V1H12.5V4.5Z"/><path d="M0 16V14.5H16V16H0Z"/><path d="M15 6H1V7.5H15V6Z"/>
  </svg>
);

const aDSTextUnderlineStrikethroughIconDefinition = svgToIconDefinition(
  aDSTextUnderlineStrikethroughSvg,
  'ads-text-underline-strikethrough'
);

/**![ADSTextUnderlineStrikethrough](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMy41IDQuNUg1VjFIMy41VjQuNVoiLz48cGF0aCBkPSJNNS4xNzEgOUM1LjU4MyAxMC4xNjUgNi42OTQgMTEgOCAxMUM5LjMwNiAxMSAxMC40MTcgMTAuMTY1IDEwLjgyOSA5SDEyLjM4OEMxMS45MzQgMTEuMDA0IDEwLjE0MiAxMi41IDggMTIuNUM1Ljg1OCAxMi41IDQuMDY2IDExLjAwNCAzLjYxMiA5SDUuMTcxWiIvPjxwYXRoIGQ9Ik0xMi41IDQuNUgxMVYxSDEyLjVWNC41WiIvPjxwYXRoIGQ9Ik0wIDE2VjE0LjVIMTZWMTZIMFoiLz48cGF0aCBkPSJNMTUgNkgxVjcuNUgxNVY2WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTextUnderlineStrikethroughIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTextUnderlineStrikethrough';
}

export default RefIcon;
