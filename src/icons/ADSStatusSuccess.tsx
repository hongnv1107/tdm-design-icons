// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSStatusSuccessSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C12.418 0 16 3.582 16 8C16 12.418 12.418 16 8 16C3.582 16 0 12.418 0 8C0 3.582 3.582 0 8 0ZM6.75 9.828L4.826 7.52L3.674 8.48L6.174 11.481C6.316 11.651 6.528 11.75 6.75 11.75C6.973 11.75 7.184 11.651 7.326 11.481L12.326 5.48L11.174 4.52L6.75 9.828Z"/>
  </svg>
);

const aDSStatusSuccessIconDefinition = svgToIconDefinition(
  aDSStatusSuccessSvg,
  'ads-status-success'
);

/**![ADSStatusSuccess](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOCAwQzEyLjQxOCAwIDE2IDMuNTgyIDE2IDhDMTYgMTIuNDE4IDEyLjQxOCAxNiA4IDE2QzMuNTgyIDE2IDAgMTIuNDE4IDAgOEMwIDMuNTgyIDMuNTgyIDAgOCAwWk02Ljc1IDkuODI4TDQuODI2IDcuNTJMMy42NzQgOC40OEw2LjE3NCAxMS40ODFDNi4zMTYgMTEuNjUxIDYuNTI4IDExLjc1IDYuNzUgMTEuNzVDNi45NzMgMTEuNzUgNy4xODQgMTEuNjUxIDcuMzI2IDExLjQ4MUwxMi4zMjYgNS40OEwxMS4xNzQgNC41Mkw2Ljc1IDkuODI4WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSStatusSuccessIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSStatusSuccess';
}

export default RefIcon;
