// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSRefreshSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 3.67V1H1V6C1 6.414 1.336 6.75 1.75 6.75H6.5V5.25H3.236C4.187 3.606 5.965 2.5 8 2.5C11.038 2.5 13.5 4.962 13.5 8C13.5 11.038 11.038 13.5 8 13.5C5.263 13.5 2.991 11.5 2.57 8.881L1.089 9.119C1.625 12.453 4.515 15 8 15C11.866 15 15 11.866 15 8C15 4.134 11.866 1 8 1C5.768 1 3.781 2.044 2.5 3.67Z"/>
  </svg>
);

const aDSRefreshIconDefinition = svgToIconDefinition(
  aDSRefreshSvg,
  'ads-refresh'
);

/**![ADSRefresh](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMi41IDMuNjdWMUgxVjZDMSA2LjQxNCAxLjMzNiA2Ljc1IDEuNzUgNi43NUg2LjVWNS4yNUgzLjIzNkM0LjE4NyAzLjYwNiA1Ljk2NSAyLjUgOCAyLjVDMTEuMDM4IDIuNSAxMy41IDQuOTYyIDEzLjUgOEMxMy41IDExLjAzOCAxMS4wMzggMTMuNSA4IDEzLjVDNS4yNjMgMTMuNSAyLjk5MSAxMS41IDIuNTcgOC44ODFMMS4wODkgOS4xMTlDMS42MjUgMTIuNDUzIDQuNTE1IDE1IDggMTVDMTEuODY2IDE1IDE1IDExLjg2NiAxNSA4QzE1IDQuMTM0IDExLjg2NiAxIDggMUM1Ljc2OCAxIDMuNzgxIDIuMDQ0IDIuNSAzLjY3WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSRefreshIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSRefresh';
}

export default RefIcon;
