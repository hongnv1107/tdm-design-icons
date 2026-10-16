// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSScorecardSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 1.5C4.41 1.5 1.5 4.41 1.5 8C1.5 11.59 4.41 14.5 8 14.5V16C3.582 16 0 12.418 0 8C0 3.582 3.582 0 8 0C12.418 0 16 3.582 16 8H14.5C14.5 4.41 11.59 1.5 8 1.5ZM12.326 5.48L7.326 11.48C7.184 11.651 6.973 11.75 6.75 11.75C6.527 11.75 6.316 11.651 6.174 11.48L3.674 8.48L4.826 7.52L6.75 9.828L11.174 4.52L12.326 5.48ZM10.437 14.028C12.067 13.368 13.368 12.067 14.028 10.437L15.418 11C14.606 13.006 13.006 14.606 11 15.418L10.437 14.028Z"/>
  </svg>
);

const aDSScorecardIconDefinition = svgToIconDefinition(
  aDSScorecardSvg,
  'ads-scorecard'
);

/**![ADSScorecard](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOCAxLjVDNC40MSAxLjUgMS41IDQuNDEgMS41IDhDMS41IDExLjU5IDQuNDEgMTQuNSA4IDE0LjVWMTZDMy41ODIgMTYgMCAxMi40MTggMCA4QzAgMy41ODIgMy41ODIgMCA4IDBDMTIuNDE4IDAgMTYgMy41ODIgMTYgOEgxNC41QzE0LjUgNC40MSAxMS41OSAxLjUgOCAxLjVaTTEyLjMyNiA1LjQ4TDcuMzI2IDExLjQ4QzcuMTg0IDExLjY1MSA2Ljk3MyAxMS43NSA2Ljc1IDExLjc1QzYuNTI3IDExLjc1IDYuMzE2IDExLjY1MSA2LjE3NCAxMS40OEwzLjY3NCA4LjQ4TDQuODI2IDcuNTJMNi43NSA5LjgyOEwxMS4xNzQgNC41MkwxMi4zMjYgNS40OFpNMTAuNDM3IDE0LjAyOEMxMi4wNjcgMTMuMzY4IDEzLjM2OCAxMi4wNjcgMTQuMDI4IDEwLjQzN0wxNS40MTggMTFDMTQuNjA2IDEzLjAwNiAxMy4wMDYgMTQuNjA2IDExIDE1LjQxOEwxMC40MzcgMTQuMDI4WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSScorecardIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSScorecard';
}

export default RefIcon;
