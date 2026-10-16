// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTagSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11 4C10.448 4 10 4.448 10 5C10 5.552 10.448 6 11 6C11.552 6 12 5.552 12 5C12 4.448 11.552 4 11 4Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.285 1C8.423 1 7.597 1.342 6.987 1.952L1.603 7.336C0.822 8.117 0.822 9.383 1.603 10.164L5.836 14.396C6.617 15.178 7.883 15.178 8.664 14.396L14.048 9.013C14.657 8.403 15 7.576 15 6.714V3C15 1.895 14.104 1 13 1H9.285ZM8.048 3.013C8.376 2.684 8.821 2.5 9.285 2.5H13C13.276 2.5 13.5 2.724 13.5 3V6.714C13.5 7.179 13.315 7.624 12.987 7.952L7.603 13.336C7.408 13.531 7.092 13.531 6.896 13.336L2.664 9.104C2.469 8.908 2.469 8.592 2.664 8.396L8.048 3.013Z"/>
  </svg>
);

const aDSTagIconDefinition = svgToIconDefinition(
  aDSTagSvg,
  'ads-tag'
);

/**![ADSTag](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xMSA0QzEwLjQ0OCA0IDEwIDQuNDQ4IDEwIDVDMTAgNS41NTIgMTAuNDQ4IDYgMTEgNkMxMS41NTIgNiAxMiA1LjU1MiAxMiA1QzEyIDQuNDQ4IDExLjU1MiA0IDExIDRaIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05LjI4NSAxQzguNDIzIDEgNy41OTcgMS4zNDIgNi45ODcgMS45NTJMMS42MDMgNy4zMzZDMC44MjIgOC4xMTcgMC44MjIgOS4zODMgMS42MDMgMTAuMTY0TDUuODM2IDE0LjM5NkM2LjYxNyAxNS4xNzggNy44ODMgMTUuMTc4IDguNjY0IDE0LjM5NkwxNC4wNDggOS4wMTNDMTQuNjU3IDguNDAzIDE1IDcuNTc2IDE1IDYuNzE0VjNDMTUgMS44OTUgMTQuMTA0IDEgMTMgMUg5LjI4NVpNOC4wNDggMy4wMTNDOC4zNzYgMi42ODQgOC44MjEgMi41IDkuMjg1IDIuNUgxM0MxMy4yNzYgMi41IDEzLjUgMi43MjQgMTMuNSAzVjYuNzE0QzEzLjUgNy4xNzkgMTMuMzE1IDcuNjI0IDEyLjk4NyA3Ljk1Mkw3LjYwMyAxMy4zMzZDNy40MDggMTMuNTMxIDcuMDkyIDEzLjUzMSA2Ljg5NiAxMy4zMzZMMi42NjQgOS4xMDRDMi40NjkgOC45MDggMi40NjkgOC41OTIgMi42NjQgOC4zOTZMOC4wNDggMy4wMTNaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTagIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTag';
}

export default RefIcon;
