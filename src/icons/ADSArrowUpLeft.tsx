// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSArrowUpLeftSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.061 4H10.25V2.5H3.25C2.836 2.5 2.5 2.836 2.5 3.25V10.25H4V5.061L12.47 13.53L13.53 12.47L5.061 4Z"/>
  </svg>
);

const aDSArrowUpLeftIconDefinition = svgToIconDefinition(
  aDSArrowUpLeftSvg,
  'ads-arrow-up-left'
);

/**![ADSArrowUpLeft](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNS4wNjEgNEgxMC4yNVYyLjVIMy4yNUMyLjgzNiAyLjUgMi41IDIuODM2IDIuNSAzLjI1VjEwLjI1SDRWNS4wNjFMMTIuNDcgMTMuNTNMMTMuNTMgMTIuNDdMNS4wNjEgNFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSArrowUpLeftIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSArrowUpLeft';
}

export default RefIcon;
