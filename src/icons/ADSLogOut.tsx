// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSLogOutSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 2.5H8V1H3C1.895 1 1 1.895 1 3V13C1 14.105 1.895 15 3 15H8V13.5H3C2.724 13.5 2.5 13.276 2.5 13V3C2.5 2.724 2.724 2.5 3 2.5ZM14.78 7.47L11.28 3.97L10.22 5.03L12.439 7.25H6V8.75H12.439L10.22 10.97L11.28 12.03L14.78 8.53C14.921 8.39 15 8.199 15 8C15 7.801 14.921 7.61 14.78 7.47Z"/>
  </svg>
);

const aDSLogOutIconDefinition = svgToIconDefinition(
  aDSLogOutSvg,
  'ads-log-out'
);

/**![ADSLogOut](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMyAyLjVIOFYxSDNDMS44OTUgMSAxIDEuODk1IDEgM1YxM0MxIDE0LjEwNSAxLjg5NSAxNSAzIDE1SDhWMTMuNUgzQzIuNzI0IDEzLjUgMi41IDEzLjI3NiAyLjUgMTNWM0MyLjUgMi43MjQgMi43MjQgMi41IDMgMi41Wk0xNC43OCA3LjQ3TDExLjI4IDMuOTdMMTAuMjIgNS4wM0wxMi40MzkgNy4yNUg2VjguNzVIMTIuNDM5TDEwLjIyIDEwLjk3TDExLjI4IDEyLjAzTDE0Ljc4IDguNTNDMTQuOTIxIDguMzkgMTUgOC4xOTkgMTUgOEMxNSA3LjgwMSAxNC45MjEgNy42MSAxNC43OCA3LjQ3WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSLogOutIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSLogOut';
}

export default RefIcon;
