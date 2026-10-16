// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDeviceMobileSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 2C2.5 0.895 3.395 0 4.5 0H11.5C12.605 0 13.5 0.895 13.5 2V14C13.5 15.105 12.605 16 11.5 16H4.5C3.395 16 2.5 15.105 2.5 14V2ZM4.5 1.5C4.224 1.5 4 1.724 4 2V14C4 14.276 4.224 14.5 4.5 14.5H11.5C11.776 14.5 12 14.276 12 14V2C12 1.724 11.776 1.5 11.5 1.5H4.5ZM10 13H6V11.5H10V13Z"/>
  </svg>
);

const aDSDeviceMobileIconDefinition = svgToIconDefinition(
  aDSDeviceMobileSvg,
  'ads-device-mobile'
);

/**![ADSDeviceMobile](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMi41IDJDMi41IDAuODk1IDMuMzk1IDAgNC41IDBIMTEuNUMxMi42MDUgMCAxMy41IDAuODk1IDEzLjUgMlYxNEMxMy41IDE1LjEwNSAxMi42MDUgMTYgMTEuNSAxNkg0LjVDMy4zOTUgMTYgMi41IDE1LjEwNSAyLjUgMTRWMlpNNC41IDEuNUM0LjIyNCAxLjUgNCAxLjcyNCA0IDJWMTRDNCAxNC4yNzYgNC4yMjQgMTQuNSA0LjUgMTQuNUgxMS41QzExLjc3NiAxNC41IDEyIDE0LjI3NiAxMiAxNFYyQzEyIDEuNzI0IDExLjc3NiAxLjUgMTEuNSAxLjVINC41Wk0xMCAxM0g2VjExLjVIMTBWMTNaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDeviceMobileIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDeviceMobile';
}

export default RefIcon;
