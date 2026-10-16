// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSInboxSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 3C1 1.895 1.895 1 3 1H13C14.105 1 15 1.895 15 3V13C15 14.105 14.105 15 13 15H3C1.895 15 1 14.105 1 13V3ZM3 2.5C2.724 2.5 2.5 2.724 2.5 3V8H5.5C5.914 8 6.25 8.336 6.25 8.75C6.25 9.717 7.034 10.5 8 10.5C8.967 10.5 9.75 9.717 9.75 8.75C9.75 8.336 10.086 8 10.5 8H13.5V3C13.5 2.724 13.276 2.5 13 2.5H3ZM13.5 9.5H11.163C10.825 10.933 9.537 12 8 12C6.463 12 5.176 10.933 4.837 9.5H2.5V13C2.5 13.276 2.724 13.5 3 13.5H13C13.276 13.5 13.5 13.276 13.5 13V9.5ZM12 6H4V4.5H12V6Z"/>
  </svg>
);

const aDSInboxIconDefinition = svgToIconDefinition(
  aDSInboxSvg,
  'ads-inbox'
);

/**![ADSInbox](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMSAzQzEgMS44OTUgMS44OTUgMSAzIDFIMTNDMTQuMTA1IDEgMTUgMS44OTUgMTUgM1YxM0MxNSAxNC4xMDUgMTQuMTA1IDE1IDEzIDE1SDNDMS44OTUgMTUgMSAxNC4xMDUgMSAxM1YzWk0zIDIuNUMyLjcyNCAyLjUgMi41IDIuNzI0IDIuNSAzVjhINS41QzUuOTE0IDggNi4yNSA4LjMzNiA2LjI1IDguNzVDNi4yNSA5LjcxNyA3LjAzNCAxMC41IDggMTAuNUM4Ljk2NyAxMC41IDkuNzUgOS43MTcgOS43NSA4Ljc1QzkuNzUgOC4zMzYgMTAuMDg2IDggMTAuNSA4SDEzLjVWM0MxMy41IDIuNzI0IDEzLjI3NiAyLjUgMTMgMi41SDNaTTEzLjUgOS41SDExLjE2M0MxMC44MjUgMTAuOTMzIDkuNTM3IDEyIDggMTJDNi40NjMgMTIgNS4xNzYgMTAuOTMzIDQuODM3IDkuNUgyLjVWMTNDMi41IDEzLjI3NiAyLjcyNCAxMy41IDMgMTMuNUgxM0MxMy4yNzYgMTMuNSAxMy41IDEzLjI3NiAxMy41IDEzVjkuNVpNMTIgNkg0VjQuNUgxMlY2WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSInboxIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSInbox';
}

export default RefIcon;
