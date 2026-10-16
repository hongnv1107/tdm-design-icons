// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSListBulletedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 4.25C0.5 3.422 1.172 2.75 2 2.75C2.828 2.75 3.5 3.422 3.5 4.25C3.5 5.078 2.828 5.75 2 5.75C1.172 5.75 0.5 5.078 0.5 4.25Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 11.75C0.5 10.922 1.172 10.25 2 10.25C2.828 10.25 3.5 10.922 3.5 11.75C3.5 12.578 2.828 13.25 2 13.25C1.172 13.25 0.5 12.578 0.5 11.75Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16 5L6 5V3.5L16 3.5V5ZM16 12.5L6 12.5V11L16 11V12.5Z"/>
  </svg>
);

const aDSListBulletedIconDefinition = svgToIconDefinition(
  aDSListBulletedSvg,
  'ads-list-bulleted'
);

/**![ADSListBulleted](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMC41IDQuMjVDMC41IDMuNDIyIDEuMTcyIDIuNzUgMiAyLjc1QzIuODI4IDIuNzUgMy41IDMuNDIyIDMuNSA0LjI1QzMuNSA1LjA3OCAyLjgyOCA1Ljc1IDIgNS43NUMxLjE3MiA1Ljc1IDAuNSA1LjA3OCAwLjUgNC4yNVoiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAuNSAxMS43NUMwLjUgMTAuOTIyIDEuMTcyIDEwLjI1IDIgMTAuMjVDMi44MjggMTAuMjUgMy41IDEwLjkyMiAzLjUgMTEuNzVDMy41IDEyLjU3OCAyLjgyOCAxMy4yNSAyIDEzLjI1QzEuMTcyIDEzLjI1IDAuNSAxMi41NzggMC41IDExLjc1WiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTYgNUw2IDVWMy41TDE2IDMuNVY1Wk0xNiAxMi41TDYgMTIuNVYxMUwxNiAxMVYxMi41WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSListBulletedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSListBulleted';
}

export default RefIcon;
