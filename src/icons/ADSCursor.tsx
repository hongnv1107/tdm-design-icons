// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSCursorSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.827 2.827L6.914 13.23L8.186 9.096C8.32 8.66 8.66 8.32 9.096 8.186L13.23 6.914L2.827 2.827ZM1.326 3.109C0.887 1.991 1.991 0.887 3.109 1.326L14.111 5.648C15.322 6.124 15.256 7.86 14.012 8.242L9.6 9.6L8.242 14.012C7.86 15.256 6.124 15.322 5.648 14.111L1.326 3.109Z"/>
  </svg>
);

const aDSCursorIconDefinition = svgToIconDefinition(
  aDSCursorSvg,
  'ads-cursor'
);

/**![ADSCursor](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMi44MjcgMi44MjdMNi45MTQgMTMuMjNMOC4xODYgOS4wOTZDOC4zMiA4LjY2IDguNjYgOC4zMiA5LjA5NiA4LjE4NkwxMy4yMyA2LjkxNEwyLjgyNyAyLjgyN1pNMS4zMjYgMy4xMDlDMC44ODcgMS45OTEgMS45OTEgMC44ODcgMy4xMDkgMS4zMjZMMTQuMTExIDUuNjQ4QzE1LjMyMiA2LjEyNCAxNS4yNTYgNy44NiAxNC4wMTIgOC4yNDJMOS42IDkuNkw4LjI0MiAxNC4wMTJDNy44NiAxNS4yNTYgNi4xMjQgMTUuMzIyIDUuNjQ4IDE0LjExMUwxLjMyNiAzLjEwOVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSCursorIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSCursor';
}

export default RefIcon;
