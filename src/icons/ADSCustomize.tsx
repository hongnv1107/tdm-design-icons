// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSCustomizeSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7.5 10.5V12H0V10.5H7.5ZM16 4V5.5H8.5V4H16ZM10.5 12.75H11.5V9.75H10.5V12.75ZM13 10.5H16V12H13V12.875C13 13.634 12.384 14.25 11.625 14.25H10.375C9.616 14.25 9 13.634 9 12.875V9.625C9 8.866 9.616 8.25 10.375 8.25H11.625C12.384 8.25 13 8.866 13 9.625V10.5ZM5.5 3.25H4.5V6.25H5.5V3.25ZM7 6.375C7 7.134 6.384 7.75 5.625 7.75H4.375C3.616 7.75 3 7.134 3 6.375V5.5H0V4H3V3.125C3 2.366 3.616 1.75 4.375 1.75H5.625C6.384 1.75 7 2.366 7 3.125V6.375Z"/>
  </svg>
);

const aDSCustomizeIconDefinition = svgToIconDefinition(
  aDSCustomizeSvg,
  'ads-customize'
);

/**![ADSCustomize](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik03LjUgMTAuNVYxMkgwVjEwLjVINy41Wk0xNiA0VjUuNUg4LjVWNEgxNlpNMTAuNSAxMi43NUgxMS41VjkuNzVIMTAuNVYxMi43NVpNMTMgMTAuNUgxNlYxMkgxM1YxMi44NzVDMTMgMTMuNjM0IDEyLjM4NCAxNC4yNSAxMS42MjUgMTQuMjVIMTAuMzc1QzkuNjE2IDE0LjI1IDkgMTMuNjM0IDkgMTIuODc1VjkuNjI1QzkgOC44NjYgOS42MTYgOC4yNSAxMC4zNzUgOC4yNUgxMS42MjVDMTIuMzg0IDguMjUgMTMgOC44NjYgMTMgOS42MjVWMTAuNVpNNS41IDMuMjVINC41VjYuMjVINS41VjMuMjVaTTcgNi4zNzVDNyA3LjEzNCA2LjM4NCA3Ljc1IDUuNjI1IDcuNzVINC4zNzVDMy42MTYgNy43NSAzIDcuMTM0IDMgNi4zNzVWNS41SDBWNEgzVjMuMTI1QzMgMi4zNjYgMy42MTYgMS43NSA0LjM3NSAxLjc1SDUuNjI1QzYuMzg0IDEuNzUgNyAyLjM2NiA3IDMuMTI1VjYuMzc1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSCustomizeIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSCustomize';
}

export default RefIcon;
