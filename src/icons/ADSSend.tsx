// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSSendSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.78 1.22C14.988 1.427 15.055 1.736 14.953 2.01L9.953 15.511C9.851 15.786 9.597 15.977 9.304 15.998C9.011 16.019 8.732 15.867 8.592 15.609L5.697 10.303L0.391 7.408C0.133 7.268 -0.019 6.989 0.002 6.696C0.023 6.403 0.214 6.149 0.49 6.047L13.99 1.047C14.264 0.945 14.573 1.012 14.78 1.22ZM7.177 9.884L9.119 13.444L12.356 4.705L7.177 9.884ZM11.295 3.644L2.556 6.881L6.116 8.823L11.295 3.644Z"/>
  </svg>
);

const aDSSendIconDefinition = svgToIconDefinition(
  aDSSendSvg,
  'ads-send'
);

/**![ADSSend](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTQuNzggMS4yMkMxNC45ODggMS40MjcgMTUuMDU1IDEuNzM2IDE0Ljk1MyAyLjAxTDkuOTUzIDE1LjUxMUM5Ljg1MSAxNS43ODYgOS41OTcgMTUuOTc3IDkuMzA0IDE1Ljk5OEM5LjAxMSAxNi4wMTkgOC43MzIgMTUuODY3IDguNTkyIDE1LjYwOUw1LjY5NyAxMC4zMDNMMC4zOTEgNy40MDhDMC4xMzMgNy4yNjggLTAuMDE5IDYuOTg5IDAuMDAyIDYuNjk2QzAuMDIzIDYuNDAzIDAuMjE0IDYuMTQ5IDAuNDkgNi4wNDdMMTMuOTkgMS4wNDdDMTQuMjY0IDAuOTQ1IDE0LjU3MyAxLjAxMiAxNC43OCAxLjIyWk03LjE3NyA5Ljg4NEw5LjExOSAxMy40NDRMMTIuMzU2IDQuNzA1TDcuMTc3IDkuODg0Wk0xMS4yOTUgMy42NDRMMi41NTYgNi44ODFMNi4xMTYgOC44MjNMMTEuMjk1IDMuNjQ0WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSSendIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSSend';
}

export default RefIcon;
