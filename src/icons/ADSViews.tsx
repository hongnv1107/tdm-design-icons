// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSViewsSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.5 5.5H6V11.5H11C11.276 11.5 11.5 11.276 11.5 11V5.5ZM2.5 11C2.5 11.276 2.724 11.5 3 11.5H4.5V5.5H2.5V11ZM11.5 3C11.5 2.724 11.276 2.5 11 2.5H3C2.724 2.5 2.5 2.724 2.5 3V4H11.5V3ZM13 11C13 12.105 12.105 13 11 13H3C1.895 13 1 12.105 1 11V3C1 1.895 1.895 1 3 1H11C12.105 1 13 1.895 13 3V11Z"/><path d="M14.5 12.75V6H16V12.75C16 14.545 14.545 16 12.75 16H6V14.5H12.75C13.717 14.5 14.5 13.717 14.5 12.75Z"/>
  </svg>
);

const aDSViewsIconDefinition = svgToIconDefinition(
  aDSViewsSvg,
  'ads-views'
);

/**![ADSViews](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTEuNSA1LjVINlYxMS41SDExQzExLjI3NiAxMS41IDExLjUgMTEuMjc2IDExLjUgMTFWNS41Wk0yLjUgMTFDMi41IDExLjI3NiAyLjcyNCAxMS41IDMgMTEuNUg0LjVWNS41SDIuNVYxMVpNMTEuNSAzQzExLjUgMi43MjQgMTEuMjc2IDIuNSAxMSAyLjVIM0MyLjcyNCAyLjUgMi41IDIuNzI0IDIuNSAzVjRIMTEuNVYzWk0xMyAxMUMxMyAxMi4xMDUgMTIuMTA1IDEzIDExIDEzSDNDMS44OTUgMTMgMSAxMi4xMDUgMSAxMVYzQzEgMS44OTUgMS44OTUgMSAzIDFIMTFDMTIuMTA1IDEgMTMgMS44OTUgMTMgM1YxMVoiLz48cGF0aCBkPSJNMTQuNSAxMi43NVY2SDE2VjEyLjc1QzE2IDE0LjU0NSAxNC41NDUgMTYgMTIuNzUgMTZINlYxNC41SDEyLjc1QzEzLjcxNyAxNC41IDE0LjUgMTMuNzE3IDE0LjUgMTIuNzVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSViewsIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSViews';
}

export default RefIcon;
