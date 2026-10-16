// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSScreenPlusSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 10V3C1 1.895 1.895 1 3 1H7V2.5H3C2.724 2.5 2.5 2.724 2.5 3V10C2.5 10.276 2.724 10.5 3 10.5H13C13.276 10.5 13.5 10.276 13.5 10V8H15V10C15 11.105 14.105 12 13 12H8.75V13.5H12V15H4V13.5H7.25V12H3C1.895 12 1 11.105 1 10Z"/><path d="M13.5 0V2.25H15.75V3.75H13.5V6H12V3.75H9.75V2.25H12V0H13.5Z"/>
  </svg>
);

const aDSScreenPlusIconDefinition = svgToIconDefinition(
  aDSScreenPlusSvg,
  'ads-screen-plus'
);

/**![ADSScreenPlus](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xIDEwVjNDMSAxLjg5NSAxLjg5NSAxIDMgMUg3VjIuNUgzQzIuNzI0IDIuNSAyLjUgMi43MjQgMi41IDNWMTBDMi41IDEwLjI3NiAyLjcyNCAxMC41IDMgMTAuNUgxM0MxMy4yNzYgMTAuNSAxMy41IDEwLjI3NiAxMy41IDEwVjhIMTVWMTBDMTUgMTEuMTA1IDE0LjEwNSAxMiAxMyAxMkg4Ljc1VjEzLjVIMTJWMTVINFYxMy41SDcuMjVWMTJIM0MxLjg5NSAxMiAxIDExLjEwNSAxIDEwWiIvPjxwYXRoIGQ9Ik0xMy41IDBWMi4yNUgxNS43NVYzLjc1SDEzLjVWNkgxMlYzLjc1SDkuNzVWMi4yNUgxMlYwSDEzLjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSScreenPlusIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSScreenPlus';
}

export default RefIcon;
