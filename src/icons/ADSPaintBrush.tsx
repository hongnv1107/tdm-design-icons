// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSPaintBrushSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 0.75C2.5 0.336 2.836 0 3.25 0H12.75C13.164 0 13.5 0.336 13.5 0.75V9C13.5 10.105 12.605 11 11.5 11H10V14C10 15.105 9.105 16 8 16C6.895 16 6 15.105 6 14V11H4.5C3.395 11 2.5 10.105 2.5 9V0.75ZM7.5 11V14C7.5 14.276 7.724 14.5 8 14.5C8.276 14.5 8.5 14.276 8.5 14V11H7.5ZM4 1.5V6.5H12V1.5H10.5V4H9V1.5H7V3H5.5V1.5H4ZM12 8H4V9C4 9.276 4.224 9.5 4.5 9.5H11.5C11.776 9.5 12 9.276 12 9V8Z"/>
  </svg>
);

const aDSPaintBrushIconDefinition = svgToIconDefinition(
  aDSPaintBrushSvg,
  'ads-paint-brush'
);

/**![ADSPaintBrush](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMi41IDAuNzVDMi41IDAuMzM2IDIuODM2IDAgMy4yNSAwSDEyLjc1QzEzLjE2NCAwIDEzLjUgMC4zMzYgMTMuNSAwLjc1VjlDMTMuNSAxMC4xMDUgMTIuNjA1IDExIDExLjUgMTFIMTBWMTRDMTAgMTUuMTA1IDkuMTA1IDE2IDggMTZDNi44OTUgMTYgNiAxNS4xMDUgNiAxNFYxMUg0LjVDMy4zOTUgMTEgMi41IDEwLjEwNSAyLjUgOVYwLjc1Wk03LjUgMTFWMTRDNy41IDE0LjI3NiA3LjcyNCAxNC41IDggMTQuNUM4LjI3NiAxNC41IDguNSAxNC4yNzYgOC41IDE0VjExSDcuNVpNNCAxLjVWNi41SDEyVjEuNUgxMC41VjRIOVYxLjVIN1YzSDUuNVYxLjVINFpNMTIgOEg0VjlDNCA5LjI3NiA0LjIyNCA5LjUgNC41IDkuNUgxMS41QzExLjc3NiA5LjUgMTIgOS4yNzYgMTIgOVY4WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSPaintBrushIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSPaintBrush';
}

export default RefIcon;
