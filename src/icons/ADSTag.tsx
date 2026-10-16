// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTagSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11 4C10.448 4 10 4.448 10 5C10 5.552 10.448 6 11 6C11.552 6 12 5.552 12 5C12 4.448 11.552 4 11 4Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.285 1C8.423 1 7.597 1.342 6.987 1.952L1.603 7.336C0.822 8.117 0.822 9.383 1.603 10.164L5.836 14.396C6.617 15.178 7.883 15.178 8.664 14.396L14.048 9.013C14.657 8.403 15 7.576 15 6.714V3C15 1.895 14.104 1 13 1H9.285ZM8.048 3.013C8.376 2.684 8.821 2.5 9.285 2.5H13C13.276 2.5 13.5 2.724 13.5 3V6.714C13.5 7.179 13.315 7.624 12.987 7.952L7.603 13.336C7.408 13.531 7.092 13.531 6.896 13.336L2.664 9.104C2.469 8.908 2.469 8.592 2.664 8.396L8.048 3.013Z"/>
  </svg>
);

const aDSTagIconDefinition = svgToIconDefinition(
  aDSTagSvg,
  'ads-tag'
);

/**![ADSTag](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTEgNEMxMC40NDggNCAxMCA0LjQ0OCAxMCA1QzEwIDUuNTUyIDEwLjQ0OCA2IDExIDZDMTEuNTUyIDYgMTIgNS41NTIgMTIgNUMxMiA0LjQ0OCAxMS41NTIgNCAxMSA0WiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOS4yODUgMUM4LjQyMyAxIDcuNTk3IDEuMzQyIDYuOTg3IDEuOTUyTDEuNjAzIDcuMzM2QzAuODIyIDguMTE3IDAuODIyIDkuMzgzIDEuNjAzIDEwLjE2NEw1LjgzNiAxNC4zOTZDNi42MTcgMTUuMTc4IDcuODgzIDE1LjE3OCA4LjY2NCAxNC4zOTZMMTQuMDQ4IDkuMDEzQzE0LjY1NyA4LjQwMyAxNSA3LjU3NiAxNSA2LjcxNFYzQzE1IDEuODk1IDE0LjEwNCAxIDEzIDFIOS4yODVaTTguMDQ4IDMuMDEzQzguMzc2IDIuNjg0IDguODIxIDIuNSA5LjI4NSAyLjVIMTNDMTMuMjc2IDIuNSAxMy41IDIuNzI0IDEzLjUgM1Y2LjcxNEMxMy41IDcuMTc5IDEzLjMxNSA3LjYyNCAxMi45ODcgNy45NTJMNy42MDMgMTMuMzM2QzcuNDA4IDEzLjUzMSA3LjA5MiAxMy41MzEgNi44OTYgMTMuMzM2TDIuNjY0IDkuMTA0QzIuNDY5IDguOTA4IDIuNDY5IDguNTkyIDIuNjY0IDguMzk2TDguMDQ4IDMuMDEzWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTagIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTag';
}

export default RefIcon;
