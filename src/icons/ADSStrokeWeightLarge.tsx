// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSStrokeWeightLargeSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.25 8C4.25 5.929 5.929 4.25 8 4.25C10.071 4.25 11.75 5.929 11.75 8C11.75 10.071 10.071 11.75 8 11.75C5.929 11.75 4.25 10.071 4.25 8Z"/>
  </svg>
);

const aDSStrokeWeightLargeIconDefinition = svgToIconDefinition(
  aDSStrokeWeightLargeSvg,
  'ads-stroke-weight-large'
);

/**![ADSStrokeWeightLarge](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNC4yNSA4QzQuMjUgNS45MjkgNS45MjkgNC4yNSA4IDQuMjVDMTAuMDcxIDQuMjUgMTEuNzUgNS45MjkgMTEuNzUgOEMxMS43NSAxMC4wNzEgMTAuMDcxIDExLjc1IDggMTEuNzVDNS45MjkgMTEuNzUgNC4yNSAxMC4wNzEgNC4yNSA4WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSStrokeWeightLargeIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSStrokeWeightLarge';
}

export default RefIcon;
