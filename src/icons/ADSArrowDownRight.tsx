// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSArrowDownRightSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.939 12H5.75V13.5H12.75C13.164 13.5 13.5 13.164 13.5 12.75V5.75H12V10.939L3.53 2.47L2.47 3.53L10.939 12Z"/>
  </svg>
);

const aDSArrowDownRightIconDefinition = svgToIconDefinition(
  aDSArrowDownRightSvg,
  'ads-arrow-down-right'
);

/**![ADSArrowDownRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTAuOTM5IDEySDUuNzVWMTMuNUgxMi43NUMxMy4xNjQgMTMuNSAxMy41IDEzLjE2NCAxMy41IDEyLjc1VjUuNzVIMTJWMTAuOTM5TDMuNTMgMi40N0wyLjQ3IDMuNTNMMTAuOTM5IDEyWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSArrowDownRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSArrowDownRight';
}

export default RefIcon;
