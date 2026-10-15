// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSArrowStartSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8.78 4.03L5.561 7.25H16V8.75H5.561L8.78 11.97L7.72 13.03L3.22 8.53C2.927 8.237 2.927 7.763 3.22 7.47L7.72 2.97L8.78 4.03ZM1.5 3V13H0V3H1.5Z"/>
  </svg>
);

const aDSArrowStartIconDefinition = svgToIconDefinition(
  aDSArrowStartSvg,
  'ads-arrow-start'
);

/**![ADSArrowStart](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNOC43OCA0LjAzTDUuNTYxIDcuMjVIMTZWOC43NUg1LjU2MUw4Ljc4IDExLjk3TDcuNzIgMTMuMDNMMy4yMiA4LjUzQzIuOTI3IDguMjM3IDIuOTI3IDcuNzYzIDMuMjIgNy40N0w3LjcyIDIuOTdMOC43OCA0LjAzWk0xLjUgM1YxM0gwVjNIMS41WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSArrowStartIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSArrowStart';
}

export default RefIcon;
