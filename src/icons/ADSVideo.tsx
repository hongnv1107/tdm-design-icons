// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSVideoSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 4C1.724 4 1.5 4.224 1.5 4.5V11.5C1.5 11.776 1.724 12 2 12H10C10.276 12 10.5 11.776 10.5 11.5V4.5C10.5 4.224 10.276 4 10 4H2ZM0 4.5C0 3.395 0.895 2.5 2 2.5H10C11.105 2.5 12 3.395 12 4.5V4.718L14.137 3.515C14.97 3.047 16 3.649 16 4.605V11.395C16 12.351 14.97 12.953 14.137 12.485L12 11.282V11.5C12 12.605 11.105 13.5 10 13.5H2C0.895 13.5 0 12.605 0 11.5V4.5ZM12 9.561L14.5 10.968V5.032L12 6.439V9.561Z"/>
  </svg>
);

const aDSVideoIconDefinition = svgToIconDefinition(
  aDSVideoSvg,
  'ads-video'
);

/**![ADSVideo](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMiA0QzEuNzI0IDQgMS41IDQuMjI0IDEuNSA0LjVWMTEuNUMxLjUgMTEuNzc2IDEuNzI0IDEyIDIgMTJIMTBDMTAuMjc2IDEyIDEwLjUgMTEuNzc2IDEwLjUgMTEuNVY0LjVDMTAuNSA0LjIyNCAxMC4yNzYgNCAxMCA0SDJaTTAgNC41QzAgMy4zOTUgMC44OTUgMi41IDIgMi41SDEwQzExLjEwNSAyLjUgMTIgMy4zOTUgMTIgNC41VjQuNzE4TDE0LjEzNyAzLjUxNUMxNC45NyAzLjA0NyAxNiAzLjY0OSAxNiA0LjYwNVYxMS4zOTVDMTYgMTIuMzUxIDE0Ljk3IDEyLjk1MyAxNC4xMzcgMTIuNDg1TDEyIDExLjI4MlYxMS41QzEyIDEyLjYwNSAxMS4xMDUgMTMuNSAxMCAxMy41SDJDMC44OTUgMTMuNSAwIDEyLjYwNSAwIDExLjVWNC41Wk0xMiA5LjU2MUwxNC41IDEwLjk2OFY1LjAzMkwxMiA2LjQzOVY5LjU2MVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSVideoIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSVideo';
}

export default RefIcon;
