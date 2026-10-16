// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTextWrapSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.375 5L0 5L0 3.5L13.375 3.5C14.825 3.5 16 4.675 16 6.125L16 8.875C16 10.325 14.825 11.5 13.375 11.5L9.561 11.5L11.28 13.22L10.22 14.28L7.22 11.28C6.927 10.987 6.927 10.513 7.22 10.22L10.22 7.22L11.28 8.28L9.561 10L13.375 10C13.996 10 14.5 9.496 14.5 8.875L14.5 6.125C14.5 5.504 13.996 5 13.375 5ZM5 11.5L0 11.5L0 10L5 10L5 11.5Z"/>
  </svg>
);

const aDSTextWrapIconDefinition = svgToIconDefinition(
  aDSTextWrapSvg,
  'ads-text-wrap'
);

/**![ADSTextWrap](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuMzc1IDVMMCA1TDAgMy41TDEzLjM3NSAzLjVDMTQuODI1IDMuNSAxNiA0LjY3NSAxNiA2LjEyNUwxNiA4Ljg3NUMxNiAxMC4zMjUgMTQuODI1IDExLjUgMTMuMzc1IDExLjVMOS41NjEgMTEuNUwxMS4yOCAxMy4yMkwxMC4yMiAxNC4yOEw3LjIyIDExLjI4QzYuOTI3IDEwLjk4NyA2LjkyNyAxMC41MTMgNy4yMiAxMC4yMkwxMC4yMiA3LjIyTDExLjI4IDguMjhMOS41NjEgMTBMMTMuMzc1IDEwQzEzLjk5NiAxMCAxNC41IDkuNDk2IDE0LjUgOC44NzVMMTQuNSA2LjEyNUMxNC41IDUuNTA0IDEzLjk5NiA1IDEzLjM3NSA1Wk01IDExLjVMMCAxMS41TDAgMTBMNSAxMEw1IDExLjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTextWrapIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTextWrap';
}

export default RefIcon;
