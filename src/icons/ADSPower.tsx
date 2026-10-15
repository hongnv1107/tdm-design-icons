// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSPowerSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 0L8.75 8H7.25L7.25 0H8.75ZM5.142 3.213C3.557 4.185 2.5 5.939 2.5 7.943C2.5 11.007 4.97 13.5 8 13.5C11.03 13.5 13.5 11.007 13.5 7.943C13.5 5.939 12.443 4.185 10.858 3.213L11.642 1.934C13.655 3.169 15 5.399 15 7.943C15 11.821 11.873 15 8 15C4.127 15 1 11.821 1 7.943C1 5.399 2.345 3.169 4.358 1.934L5.142 3.213Z"/>
  </svg>
);

const aDSPowerIconDefinition = svgToIconDefinition(
  aDSPowerSvg,
  'ads-power'
);

/**![ADSPower](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTguNzUgMEw4Ljc1IDhINy4yNUw3LjI1IDBIOC43NVpNNS4xNDIgMy4yMTNDMy41NTcgNC4xODUgMi41IDUuOTM5IDIuNSA3Ljk0M0MyLjUgMTEuMDA3IDQuOTcgMTMuNSA4IDEzLjVDMTEuMDMgMTMuNSAxMy41IDExLjAwNyAxMy41IDcuOTQzQzEzLjUgNS45MzkgMTIuNDQzIDQuMTg1IDEwLjg1OCAzLjIxM0wxMS42NDIgMS45MzRDMTMuNjU1IDMuMTY5IDE1IDUuMzk5IDE1IDcuOTQzQzE1IDExLjgyMSAxMS44NzMgMTUgOCAxNUM0LjEyNyAxNSAxIDExLjgyMSAxIDcuOTQzQzEgNS4zOTkgMi4zNDUgMy4xNjkgNC4zNTggMS45MzRMNS4xNDIgMy4yMTNaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSPowerIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSPower';
}

export default RefIcon;
