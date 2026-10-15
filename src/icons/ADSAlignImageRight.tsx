// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSAlignImageRightSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15 2.5L1 2.5L1 1L15 1V2.5ZM10.5 6.5V9.5L13.5 9.5V6.5H10.5ZM10.375 5L13.625 5C14.384 5 15 5.616 15 6.375V9.625C15 10.384 14.384 11 13.625 11L10.375 11C9.616 11 9 10.384 9 9.625V6.375C9 5.616 9.616 5 10.375 5ZM15 15L1 15L1 13.5L15 13.5V15Z"/>
  </svg>
);

const aDSAlignImageRightIconDefinition = svgToIconDefinition(
  aDSAlignImageRightSvg,
  'ads-align-image-right'
);

/**![ADSAlignImageRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1IDIuNUwxIDIuNUwxIDFMMTUgMVYyLjVaTTEwLjUgNi41VjkuNUwxMy41IDkuNVY2LjVIMTAuNVpNMTAuMzc1IDVMMTMuNjI1IDVDMTQuMzg0IDUgMTUgNS42MTYgMTUgNi4zNzVWOS42MjVDMTUgMTAuMzg0IDE0LjM4NCAxMSAxMy42MjUgMTFMMTAuMzc1IDExQzkuNjE2IDExIDkgMTAuMzg0IDkgOS42MjVWNi4zNzVDOSA1LjYxNiA5LjYxNiA1IDEwLjM3NSA1Wk0xNSAxNUwxIDE1TDEgMTMuNUwxNSAxMy41VjE1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSAlignImageRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSAlignImageRight';
}

export default RefIcon;
