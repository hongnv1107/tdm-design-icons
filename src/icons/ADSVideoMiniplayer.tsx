// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSVideoMiniplayerSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4C0 2.895 0.895 2 2 2H14C15.105 2 16 2.895 16 4V12C16 13.105 15.105 14 14 14H2C0.895 14 0 13.105 0 12V4ZM2 3.5C1.724 3.5 1.5 3.724 1.5 4V12C1.5 12.276 1.724 12.5 2 12.5H14C14.276 12.5 14.5 12.276 14.5 12V4C14.5 3.724 14.276 3.5 14 3.5H2ZM6.75 7.5C6.75 7.086 7.086 6.75 7.5 6.75H12.25C12.664 6.75 13 7.086 13 7.5V10.25C13 10.664 12.664 11 12.25 11H7.5C7.086 11 6.75 10.664 6.75 10.25V7.5Z"/>
  </svg>
);

const aDSVideoMiniplayerIconDefinition = svgToIconDefinition(
  aDSVideoMiniplayerSvg,
  'ads-video-miniplayer'
);

/**![ADSVideoMiniplayer](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMCA0QzAgMi44OTUgMC44OTUgMiAyIDJIMTRDMTUuMTA1IDIgMTYgMi44OTUgMTYgNFYxMkMxNiAxMy4xMDUgMTUuMTA1IDE0IDE0IDE0SDJDMC44OTUgMTQgMCAxMy4xMDUgMCAxMlY0Wk0yIDMuNUMxLjcyNCAzLjUgMS41IDMuNzI0IDEuNSA0VjEyQzEuNSAxMi4yNzYgMS43MjQgMTIuNSAyIDEyLjVIMTRDMTQuMjc2IDEyLjUgMTQuNSAxMi4yNzYgMTQuNSAxMlY0QzE0LjUgMy43MjQgMTQuMjc2IDMuNSAxNCAzLjVIMlpNNi43NSA3LjVDNi43NSA3LjA4NiA3LjA4NiA2Ljc1IDcuNSA2Ljc1SDEyLjI1QzEyLjY2NCA2Ljc1IDEzIDcuMDg2IDEzIDcuNVYxMC4yNUMxMyAxMC42NjQgMTIuNjY0IDExIDEyLjI1IDExSDcuNUM3LjA4NiAxMSA2Ljc1IDEwLjY2NCA2Ljc1IDEwLjI1VjcuNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSVideoMiniplayerIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSVideoMiniplayer';
}

export default RefIcon;
