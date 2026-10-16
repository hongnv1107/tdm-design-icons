// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSLogInSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13 2.5H8V1H13C14.105 1 15 1.895 15 3V13C15 14.105 14.105 15 13 15H8V13.5H13C13.276 13.5 13.5 13.276 13.5 13V3C13.5 2.724 13.276 2.5 13 2.5ZM7.439 7.25L5.22 5.03L6.28 3.97L9.78 7.47C10.073 7.763 10.073 8.237 9.78 8.53L6.28 12.03L5.22 10.97L7.439 8.75H1V7.25H7.439Z"/>
  </svg>
);

const aDSLogInIconDefinition = svgToIconDefinition(
  aDSLogInSvg,
  'ads-log-in'
);

/**![ADSLogIn](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMgMi41SDhWMUgxM0MxNC4xMDUgMSAxNSAxLjg5NSAxNSAzVjEzQzE1IDE0LjEwNSAxNC4xMDUgMTUgMTMgMTVIOFYxMy41SDEzQzEzLjI3NiAxMy41IDEzLjUgMTMuMjc2IDEzLjUgMTNWM0MxMy41IDIuNzI0IDEzLjI3NiAyLjUgMTMgMi41Wk03LjQzOSA3LjI1TDUuMjIgNS4wM0w2LjI4IDMuOTdMOS43OCA3LjQ3QzEwLjA3MyA3Ljc2MyAxMC4wNzMgOC4yMzcgOS43OCA4LjUzTDYuMjggMTIuMDNMNS4yMiAxMC45N0w3LjQzOSA4Ljc1SDFWNy4yNUg3LjQzOVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSLogInIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSLogIn';
}

export default RefIcon;
