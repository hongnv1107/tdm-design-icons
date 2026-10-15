// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSBedSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.5 8C14.5 7.724 14.276 7.5 14 7.5H2C1.724 7.5 1.5 7.724 1.5 8V11.5H14.5V8ZM16 14H14.5V13H1.5V14H0V8C0 6.895 0.895 6 2 6H14C15.105 6 16 6.895 16 8V14Z"/><path d="M13 4C13 3.724 12.776 3.5 12.5 3.5H8.75V6H13V4ZM3 6H7.25V3.5H3.5C3.224 3.5 3 3.724 3 4V6ZM14.5 6.75C14.5 7.164 14.164 7.5 13.75 7.5H2.25C1.836 7.5 1.5 7.164 1.5 6.75V4C1.5 2.895 2.395 2 3.5 2H12.5C13.605 2 14.5 2.895 14.5 4V6.75Z"/>
  </svg>
);

const aDSBedIconDefinition = svgToIconDefinition(
  aDSBedSvg,
  'ads-bed'
);

/**![ADSBed](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTQuNSA4QzE0LjUgNy43MjQgMTQuMjc2IDcuNSAxNCA3LjVIMkMxLjcyNCA3LjUgMS41IDcuNzI0IDEuNSA4VjExLjVIMTQuNVY4Wk0xNiAxNEgxNC41VjEzSDEuNVYxNEgwVjhDMCA2Ljg5NSAwLjg5NSA2IDIgNkgxNEMxNS4xMDUgNiAxNiA2Ljg5NSAxNiA4VjE0WiIvPjxwYXRoIGQ9Ik0xMyA0QzEzIDMuNzI0IDEyLjc3NiAzLjUgMTIuNSAzLjVIOC43NVY2SDEzVjRaTTMgNkg3LjI1VjMuNUgzLjVDMy4yMjQgMy41IDMgMy43MjQgMyA0VjZaTTE0LjUgNi43NUMxNC41IDcuMTY0IDE0LjE2NCA3LjUgMTMuNzUgNy41SDIuMjVDMS44MzYgNy41IDEuNSA3LjE2NCAxLjUgNi43NVY0QzEuNSAyLjg5NSAyLjM5NSAyIDMuNSAySDEyLjVDMTMuNjA1IDIgMTQuNSAyLjg5NSAxNC41IDRWNi43NVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSBedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSBed';
}

export default RefIcon;
