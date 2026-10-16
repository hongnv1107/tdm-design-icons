// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSCheckMarkSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.959 3.971L6.709 12.971C6.568 13.146 6.354 13.249 6.129 13.25C5.903 13.251 5.689 13.151 5.546 12.977L2.046 8.727L3.204 7.773L6.118 11.312L12.791 3.029L13.959 3.971Z"/>
  </svg>
);

const aDSCheckMarkIconDefinition = svgToIconDefinition(
  aDSCheckMarkSvg,
  'ads-check-mark'
);

/**![ADSCheckMark](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTMuOTU5IDMuOTcxTDYuNzA5IDEyLjk3MUM2LjU2OCAxMy4xNDYgNi4zNTQgMTMuMjQ5IDYuMTI5IDEzLjI1QzUuOTAzIDEzLjI1MSA1LjY4OSAxMy4xNTEgNS41NDYgMTIuOTc3TDIuMDQ2IDguNzI3TDMuMjA0IDcuNzczTDYuMTE4IDExLjMxMkwxMi43OTEgMy4wMjlMMTMuOTU5IDMuOTcxWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSCheckMarkIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSCheckMark';
}

export default RefIcon;
