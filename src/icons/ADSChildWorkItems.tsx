// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSChildWorkItemsSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8.5 13.5H13.5V11H8.5V13.5ZM8.5 6.5H13.5V4H8.5V6.5ZM15 6.75C15 7.44 14.44 8 13.75 8H8.25C7.56 8 7 7.44 7 6.75V6H2.5V11C2.5 11.276 2.724 11.5 3 11.5H7V10.75C7 10.06 7.56 9.5 8.25 9.5H13.75C14.44 9.5 15 10.06 15 10.75V13.75C15 14.44 14.44 15 13.75 15H8.25C7.56 15 7 14.44 7 13.75V13H3C1.895 13 1 12.105 1 11V1H2.5V4.5H7V3.75C7 3.06 7.56 2.5 8.25 2.5H13.75C14.44 2.5 15 3.06 15 3.75V6.75Z"/>
  </svg>
);

const aDSChildWorkItemsIconDefinition = svgToIconDefinition(
  aDSChildWorkItemsSvg,
  'ads-child-work-items'
);

/**![ADSChildWorkItems](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik04LjUgMTMuNUgxMy41VjExSDguNVYxMy41Wk04LjUgNi41SDEzLjVWNEg4LjVWNi41Wk0xNSA2Ljc1QzE1IDcuNDQgMTQuNDQgOCAxMy43NSA4SDguMjVDNy41NiA4IDcgNy40NCA3IDYuNzVWNkgyLjVWMTFDMi41IDExLjI3NiAyLjcyNCAxMS41IDMgMTEuNUg3VjEwLjc1QzcgMTAuMDYgNy41NiA5LjUgOC4yNSA5LjVIMTMuNzVDMTQuNDQgOS41IDE1IDEwLjA2IDE1IDEwLjc1VjEzLjc1QzE1IDE0LjQ0IDE0LjQ0IDE1IDEzLjc1IDE1SDguMjVDNy41NiAxNSA3IDE0LjQ0IDcgMTMuNzVWMTNIM0MxLjg5NSAxMyAxIDEyLjEwNSAxIDExVjFIMi41VjQuNUg3VjMuNzVDNyAzLjA2IDcuNTYgMi41IDguMjUgMi41SDEzLjc1QzE0LjQ0IDIuNSAxNSAzLjA2IDE1IDMuNzVWNi43NVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSChildWorkItemsIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSChildWorkItems';
}

export default RefIcon;
