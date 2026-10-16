// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSStrokeWeightExtraLargeSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.25 8C3.25 5.377 5.377 3.25 8 3.25C10.623 3.25 12.75 5.377 12.75 8C12.75 10.623 10.623 12.75 8 12.75C5.377 12.75 3.25 10.623 3.25 8Z"/>
  </svg>
);

const aDSStrokeWeightExtraLargeIconDefinition = svgToIconDefinition(
  aDSStrokeWeightExtraLargeSvg,
  'ads-stroke-weight-extra-large'
);

/**![ADSStrokeWeightExtraLarge](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMy4yNSA4QzMuMjUgNS4zNzcgNS4zNzcgMy4yNSA4IDMuMjVDMTAuNjIzIDMuMjUgMTIuNzUgNS4zNzcgMTIuNzUgOEMxMi43NSAxMC42MjMgMTAuNjIzIDEyLjc1IDggMTIuNzVDNS4zNzcgMTIuNzUgMy4yNSAxMC42MjMgMy4yNSA4WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSStrokeWeightExtraLargeIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSStrokeWeightExtraLarge';
}

export default RefIcon;
