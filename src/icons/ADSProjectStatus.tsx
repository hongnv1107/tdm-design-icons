// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSProjectStatusSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2.625C3.5 1.175 4.675 0 6.125 0H9.875C11.325 0 12.5 1.175 12.5 2.625V11.375C12.5 12.825 11.325 14 9.875 14H8.75V16H7.25L7.25 14H6.125C4.675 14 3.5 12.825 3.5 11.375V2.625ZM6.125 1.5C5.504 1.5 5 2.004 5 2.625V11.375C5 11.996 5.504 12.5 6.125 12.5H9.875C10.496 12.5 11 11.996 11 11.375V2.625C11 2.004 10.496 1.5 9.875 1.5H6.125ZM6.5 4.75C6.5 3.922 7.172 3.25 8 3.25C8.828 3.25 9.5 3.922 9.5 4.75C9.5 5.578 8.828 6.25 8 6.25C7.172 6.25 6.5 5.578 6.5 4.75ZM6.5 9.25C6.5 8.422 7.172 7.75 8 7.75C8.828 7.75 9.5 8.422 9.5 9.25C9.5 10.078 8.828 10.75 8 10.75C7.172 10.75 6.5 10.078 6.5 9.25Z"/>
  </svg>
);

const aDSProjectStatusIconDefinition = svgToIconDefinition(
  aDSProjectStatusSvg,
  'ads-project-status'
);

/**![ADSProjectStatus](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMy41IDIuNjI1QzMuNSAxLjE3NSA0LjY3NSAwIDYuMTI1IDBIOS44NzVDMTEuMzI1IDAgMTIuNSAxLjE3NSAxMi41IDIuNjI1VjExLjM3NUMxMi41IDEyLjgyNSAxMS4zMjUgMTQgOS44NzUgMTRIOC43NVYxNkg3LjI1TDcuMjUgMTRINi4xMjVDNC42NzUgMTQgMy41IDEyLjgyNSAzLjUgMTEuMzc1VjIuNjI1Wk02LjEyNSAxLjVDNS41MDQgMS41IDUgMi4wMDQgNSAyLjYyNVYxMS4zNzVDNSAxMS45OTYgNS41MDQgMTIuNSA2LjEyNSAxMi41SDkuODc1QzEwLjQ5NiAxMi41IDExIDExLjk5NiAxMSAxMS4zNzVWMi42MjVDMTEgMi4wMDQgMTAuNDk2IDEuNSA5Ljg3NSAxLjVINi4xMjVaTTYuNSA0Ljc1QzYuNSAzLjkyMiA3LjE3MiAzLjI1IDggMy4yNUM4LjgyOCAzLjI1IDkuNSAzLjkyMiA5LjUgNC43NUM5LjUgNS41NzggOC44MjggNi4yNSA4IDYuMjVDNy4xNzIgNi4yNSA2LjUgNS41NzggNi41IDQuNzVaTTYuNSA5LjI1QzYuNSA4LjQyMiA3LjE3MiA3Ljc1IDggNy43NUM4LjgyOCA3Ljc1IDkuNSA4LjQyMiA5LjUgOS4yNUM5LjUgMTAuMDc4IDguODI4IDEwLjc1IDggMTAuNzVDNy4xNzIgMTAuNzUgNi41IDEwLjA3OCA2LjUgOS4yNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSProjectStatusIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSProjectStatus';
}

export default RefIcon;
