// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSWorkItemsSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.5 4C11.5 3.724 11.276 3.5 11 3.5H2C1.724 3.5 1.5 3.724 1.5 4V10C1.5 10.276 1.724 10.5 2 10.5H11C11.276 10.5 11.5 10.276 11.5 10V4ZM9.448 5.608L6.281 9.358C6.139 9.527 5.929 9.625 5.708 9.625C5.515 9.625 5.33 9.551 5.191 9.419L5.136 9.358L3.552 7.483L4.698 6.517L5.708 7.713L8.302 4.642L9.448 5.608ZM13 10C13 11.105 12.105 12 11 12H2C0.895 12 0 11.105 0 10V4C0 2.895 0.895 2 2 2H11C12.105 2 13 2.895 13 4V10Z"/><path d="M14.5 11.75V7H16V11.75C16 13.545 14.545 15 12.75 15H5V13.5H12.75C13.717 13.5 14.5 12.717 14.5 11.75Z"/>
  </svg>
);

const aDSWorkItemsIconDefinition = svgToIconDefinition(
  aDSWorkItemsSvg,
  'ads-work-items'
);

/**![ADSWorkItems](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xMS41IDRDMTEuNSAzLjcyNCAxMS4yNzYgMy41IDExIDMuNUgyQzEuNzI0IDMuNSAxLjUgMy43MjQgMS41IDRWMTBDMS41IDEwLjI3NiAxLjcyNCAxMC41IDIgMTAuNUgxMUMxMS4yNzYgMTAuNSAxMS41IDEwLjI3NiAxMS41IDEwVjRaTTkuNDQ4IDUuNjA4TDYuMjgxIDkuMzU4QzYuMTM5IDkuNTI3IDUuOTI5IDkuNjI1IDUuNzA4IDkuNjI1QzUuNTE1IDkuNjI1IDUuMzMgOS41NTEgNS4xOTEgOS40MTlMNS4xMzYgOS4zNThMMy41NTIgNy40ODNMNC42OTggNi41MTdMNS43MDggNy43MTNMOC4zMDIgNC42NDJMOS40NDggNS42MDhaTTEzIDEwQzEzIDExLjEwNSAxMi4xMDUgMTIgMTEgMTJIMkMwLjg5NSAxMiAwIDExLjEwNSAwIDEwVjRDMCAyLjg5NSAwLjg5NSAyIDIgMkgxMUMxMi4xMDUgMiAxMyAyLjg5NSAxMyA0VjEwWiIvPjxwYXRoIGQ9Ik0xNC41IDExLjc1VjdIMTZWMTEuNzVDMTYgMTMuNTQ1IDE0LjU0NSAxNSAxMi43NSAxNUg1VjEzLjVIMTIuNzVDMTMuNzE3IDEzLjUgMTQuNSAxMi43MTcgMTQuNSAxMS43NVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSWorkItemsIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSWorkItems';
}

export default RefIcon;
