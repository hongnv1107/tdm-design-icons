// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSListNumberedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 5L6 5V3.5L16 3.5V5ZM16 12.5L6 12.5V11L16 11V12.5Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 1H2.25C2.664 1 3 1.336 3 1.75V7H1.5V2.5H0.5V1Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M0 8.5H2.625C3.384 8.5 4 9.116 4 9.875V11.125C4 11.884 3.384 12.5 2.625 12.5H1.5V13.5H4V15H0.75C0.336 15 0 14.664 0 14.25V12.375C0 11.616 0.616 11 1.375 11H2.5V10H0V8.5Z"/>
  </svg>
);

const aDSListNumberedIconDefinition = svgToIconDefinition(
  aDSListNumberedSvg,
  'ads-list-numbered'
);

/**![ADSListNumbered](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTYgNUw2IDVWMy41TDE2IDMuNVY1Wk0xNiAxMi41TDYgMTIuNVYxMUwxNiAxMVYxMi41WiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMC41IDFIMi4yNUMyLjY2NCAxIDMgMS4zMzYgMyAxLjc1VjdIMS41VjIuNUgwLjVWMVoiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgOC41SDIuNjI1QzMuMzg0IDguNSA0IDkuMTE2IDQgOS44NzVWMTEuMTI1QzQgMTEuODg0IDMuMzg0IDEyLjUgMi42MjUgMTIuNUgxLjVWMTMuNUg0VjE1SDAuNzVDMC4zMzYgMTUgMCAxNC42NjQgMCAxNC4yNVYxMi4zNzVDMCAxMS42MTYgMC42MTYgMTEgMS4zNzUgMTFIMi41VjEwSDBWOC41WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSListNumberedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSListNumbered';
}

export default RefIcon;
