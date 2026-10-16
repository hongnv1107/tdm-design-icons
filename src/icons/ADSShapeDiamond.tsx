// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSShapeDiamondSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.028 0.662C7.565 0.125 8.435 0.125 8.972 0.662L15.338 7.028C15.875 7.565 15.875 8.435 15.338 8.972L8.972 15.338C8.435 15.875 7.565 15.875 7.028 15.338L0.662 8.972C0.125 8.435 0.125 7.565 0.662 7.028L7.028 0.662ZM8 1.811L1.811 8L8 14.189L14.189 8L8 1.811Z"/>
  </svg>
);

const aDSShapeDiamondIconDefinition = svgToIconDefinition(
  aDSShapeDiamondSvg,
  'ads-shape-diamond'
);

/**![ADSShapeDiamond](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNy4wMjggMC42NjJDNy41NjUgMC4xMjUgOC40MzUgMC4xMjUgOC45NzIgMC42NjJMMTUuMzM4IDcuMDI4QzE1Ljg3NSA3LjU2NSAxNS44NzUgOC40MzUgMTUuMzM4IDguOTcyTDguOTcyIDE1LjMzOEM4LjQzNSAxNS44NzUgNy41NjUgMTUuODc1IDcuMDI4IDE1LjMzOEwwLjY2MiA4Ljk3MkMwLjEyNSA4LjQzNSAwLjEyNSA3LjU2NSAwLjY2MiA3LjAyOEw3LjAyOCAwLjY2MlpNOCAxLjgxMUwxLjgxMSA4TDggMTQuMTg5TDE0LjE4OSA4TDggMS44MTFaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSShapeDiamondIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSShapeDiamond';
}

export default RefIcon;
