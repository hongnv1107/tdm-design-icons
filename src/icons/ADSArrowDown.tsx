// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSArrowDownSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 1V12.439L12.47 8.72L13.53 9.78L8.53 14.78C8.237 15.073 7.763 15.073 7.47 14.78L2.47 9.78L3.53 8.72L7.25 12.439V1H8.75Z"/>
  </svg>
);

const aDSArrowDownIconDefinition = svgToIconDefinition(
  aDSArrowDownSvg,
  'ads-arrow-down'
);

/**![ADSArrowDown](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOC43NSAxVjEyLjQzOUwxMi40NyA4LjcyTDEzLjUzIDkuNzhMOC41MyAxNC43OEM4LjIzNyAxNS4wNzMgNy43NjMgMTUuMDczIDcuNDcgMTQuNzhMMi40NyA5Ljc4TDMuNTMgOC43Mkw3LjI1IDEyLjQzOVYxSDguNzVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSArrowDownIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSArrowDown';
}

export default RefIcon;
