// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSCheckboxCheckedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 1C1.895 1 1 1.895 1 3V13C1 14.105 1.895 15 3 15H13C14.105 15 15 14.105 15 13V3C15 1.895 14.105 1 13 1H3ZM12.326 5.48L11.174 4.52L6.75 9.828L4.826 7.52L3.674 8.48L6.174 11.48C6.316 11.651 6.527 11.75 6.75 11.75C6.973 11.75 7.184 11.651 7.326 11.48L12.326 5.48Z"/>
  </svg>
);

const aDSCheckboxCheckedIconDefinition = svgToIconDefinition(
  aDSCheckboxCheckedSvg,
  'ads-checkbox-checked'
);

/**![ADSCheckboxChecked](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMyAxQzEuODk1IDEgMSAxLjg5NSAxIDNWMTNDMSAxNC4xMDUgMS44OTUgMTUgMyAxNUgxM0MxNC4xMDUgMTUgMTUgMTQuMTA1IDE1IDEzVjNDMTUgMS44OTUgMTQuMTA1IDEgMTMgMUgzWk0xMi4zMjYgNS40OEwxMS4xNzQgNC41Mkw2Ljc1IDkuODI4TDQuODI2IDcuNTJMMy42NzQgOC40OEw2LjE3NCAxMS40OEM2LjMxNiAxMS42NTEgNi41MjcgMTEuNzUgNi43NSAxMS43NUM2Ljk3MyAxMS43NSA3LjE4NCAxMS42NTEgNy4zMjYgMTEuNDhMMTIuMzI2IDUuNDhaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSCheckboxCheckedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSCheckboxChecked';
}

export default RefIcon;
