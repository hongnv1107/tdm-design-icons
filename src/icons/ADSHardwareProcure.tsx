// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSHardwareProcureSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 10V3C1 1.895 1.895 1 3 1H7V2.5H3C2.724 2.5 2.5 2.724 2.5 3V10C2.5 10.276 2.724 10.5 3 10.5H13C13.276 10.5 13.5 10.276 13.5 10V9H15V10C15 11.105 14.105 12 13 12H8.75V13.5H12V15H4V13.5H7.25V12H3C1.895 12 1 11.105 1 10Z"/><path d="M14 6.125C14 6.884 13.384 7.5 12.625 7.5H12.25V8.5H10.75V7.5H9.5V6H12.5V5H10.375C9.616 5 9 4.384 9 3.625V2.375C9 1.616 9.616 1 10.375 1H11V0H12.5V1H13.5V2.5H10.5V3.5H12.625C13.384 3.5 14 4.116 14 4.875V6.125Z"/>
  </svg>
);

const aDSHardwareProcureIconDefinition = svgToIconDefinition(
  aDSHardwareProcureSvg,
  'ads-hardware-procure'
);

/**![ADSHardwareProcure](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xIDEwVjNDMSAxLjg5NSAxLjg5NSAxIDMgMUg3VjIuNUgzQzIuNzI0IDIuNSAyLjUgMi43MjQgMi41IDNWMTBDMi41IDEwLjI3NiAyLjcyNCAxMC41IDMgMTAuNUgxM0MxMy4yNzYgMTAuNSAxMy41IDEwLjI3NiAxMy41IDEwVjlIMTVWMTBDMTUgMTEuMTA1IDE0LjEwNSAxMiAxMyAxMkg4Ljc1VjEzLjVIMTJWMTVINFYxMy41SDcuMjVWMTJIM0MxLjg5NSAxMiAxIDExLjEwNSAxIDEwWiIvPjxwYXRoIGQ9Ik0xNCA2LjEyNUMxNCA2Ljg4NCAxMy4zODQgNy41IDEyLjYyNSA3LjVIMTIuMjVWOC41SDEwLjc1VjcuNUg5LjVWNkgxMi41VjVIMTAuMzc1QzkuNjE2IDUgOSA0LjM4NCA5IDMuNjI1VjIuMzc1QzkgMS42MTYgOS42MTYgMSAxMC4zNzUgMUgxMVYwSDEyLjVWMUgxMy41VjIuNUgxMC41VjMuNUgxMi42MjVDMTMuMzg0IDMuNSAxNCA0LjExNiAxNCA0Ljg3NVY2LjEyNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSHardwareProcureIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSHardwareProcure';
}

export default RefIcon;
