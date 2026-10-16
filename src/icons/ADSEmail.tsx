// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSEmailSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4C0 2.895 0.895 2 2 2H14C15.105 2 16 2.895 16 4V12C16 13.105 15.105 14 14 14H2C0.895 14 0 13.105 0 12V4ZM2 3.5C1.724 3.5 1.5 3.724 1.5 4V4.529L8 8.128L14.5 4.529V4C14.5 3.724 14.276 3.5 14 3.5H2ZM14.5 6.243L8.363 9.641C8.137 9.767 7.863 9.767 7.637 9.641L1.5 6.243V12C1.5 12.276 1.724 12.5 2 12.5H14C14.276 12.5 14.5 12.276 14.5 12V6.243Z"/>
  </svg>
);

const aDSEmailIconDefinition = svgToIconDefinition(
  aDSEmailSvg,
  'ads-email'
);

/**![ADSEmail](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMCA0QzAgMi44OTUgMC44OTUgMiAyIDJIMTRDMTUuMTA1IDIgMTYgMi44OTUgMTYgNFYxMkMxNiAxMy4xMDUgMTUuMTA1IDE0IDE0IDE0SDJDMC44OTUgMTQgMCAxMy4xMDUgMCAxMlY0Wk0yIDMuNUMxLjcyNCAzLjUgMS41IDMuNzI0IDEuNSA0VjQuNTI5TDggOC4xMjhMMTQuNSA0LjUyOVY0QzE0LjUgMy43MjQgMTQuMjc2IDMuNSAxNCAzLjVIMlpNMTQuNSA2LjI0M0w4LjM2MyA5LjY0MUM4LjEzNyA5Ljc2NyA3Ljg2MyA5Ljc2NyA3LjYzNyA5LjY0MUwxLjUgNi4yNDNWMTJDMS41IDEyLjI3NiAxLjcyNCAxMi41IDIgMTIuNUgxNEMxNC4yNzYgMTIuNSAxNC41IDEyLjI3NiAxNC41IDEyVjYuMjQzWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSEmailIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSEmail';
}

export default RefIcon;
