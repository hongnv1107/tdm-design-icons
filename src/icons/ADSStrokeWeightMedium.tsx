// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSStrokeWeightMediumSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 8C5.25 6.481 6.481 5.25 8 5.25C9.519 5.25 10.75 6.481 10.75 8C10.75 9.519 9.519 10.75 8 10.75C6.481 10.75 5.25 9.519 5.25 8Z"/>
  </svg>
);

const aDSStrokeWeightMediumIconDefinition = svgToIconDefinition(
  aDSStrokeWeightMediumSvg,
  'ads-stroke-weight-medium'
);

/**![ADSStrokeWeightMedium](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNS4yNSA4QzUuMjUgNi40ODEgNi40ODEgNS4yNSA4IDUuMjVDOS41MTkgNS4yNSAxMC43NSA2LjQ4MSAxMC43NSA4QzEwLjc1IDkuNTE5IDkuNTE5IDEwLjc1IDggMTAuNzVDNi40ODEgMTAuNzUgNS4yNSA5LjUxOSA1LjI1IDhaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSStrokeWeightMediumIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSStrokeWeightMedium';
}

export default RefIcon;
