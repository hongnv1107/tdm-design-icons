// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSBluetoothSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.69 0.317C7.958 0.195 8.272 0.242 8.494 0.436L12.494 3.936C12.656 4.078 12.75 4.284 12.75 4.5C12.75 4.716 12.656 4.922 12.494 5.064L9.139 8L12.494 10.936C12.656 11.078 12.75 11.284 12.75 11.5C12.75 11.716 12.656 11.922 12.494 12.064L8.494 15.564C8.272 15.758 7.958 15.805 7.69 15.683C7.422 15.561 7.25 15.294 7.25 15V9.653L4.494 12.064L3.506 10.936L6.861 8L3.506 5.064L4.494 3.936L7.25 6.347V1C7.25 0.706 7.422 0.439 7.69 0.317ZM8.75 9.653L10.861 11.5L8.75 13.347V9.653ZM8.75 6.347V2.653L10.861 4.5L8.75 6.347Z"/>
  </svg>
);

const aDSBluetoothIconDefinition = svgToIconDefinition(
  aDSBluetoothSvg,
  'ads-bluetooth'
);

/**![ADSBluetooth](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNy42OSAwLjMxN0M3Ljk1OCAwLjE5NSA4LjI3MiAwLjI0MiA4LjQ5NCAwLjQzNkwxMi40OTQgMy45MzZDMTIuNjU2IDQuMDc4IDEyLjc1IDQuMjg0IDEyLjc1IDQuNUMxMi43NSA0LjcxNiAxMi42NTYgNC45MjIgMTIuNDk0IDUuMDY0TDkuMTM5IDhMMTIuNDk0IDEwLjkzNkMxMi42NTYgMTEuMDc4IDEyLjc1IDExLjI4NCAxMi43NSAxMS41QzEyLjc1IDExLjcxNiAxMi42NTYgMTEuOTIyIDEyLjQ5NCAxMi4wNjRMOC40OTQgMTUuNTY0QzguMjcyIDE1Ljc1OCA3Ljk1OCAxNS44MDUgNy42OSAxNS42ODNDNy40MjIgMTUuNTYxIDcuMjUgMTUuMjk0IDcuMjUgMTVWOS42NTNMNC40OTQgMTIuMDY0TDMuNTA2IDEwLjkzNkw2Ljg2MSA4TDMuNTA2IDUuMDY0TDQuNDk0IDMuOTM2TDcuMjUgNi4zNDdWMUM3LjI1IDAuNzA2IDcuNDIyIDAuNDM5IDcuNjkgMC4zMTdaTTguNzUgOS42NTNMMTAuODYxIDExLjVMOC43NSAxMy4zNDdWOS42NTNaTTguNzUgNi4zNDdWMi42NTNMMTAuODYxIDQuNUw4Ljc1IDYuMzQ3WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSBluetoothIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSBluetooth';
}

export default RefIcon;
