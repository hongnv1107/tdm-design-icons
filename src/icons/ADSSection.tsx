// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSSectionSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 2.5H1V1H9V2.5ZM1 6C1 4.895 1.895 4 3 4H13C14.105 4 15 4.895 15 6V13C15 14.105 14.105 15 13 15H3C1.895 15 1 14.105 1 13V6ZM3 5.5C2.724 5.5 2.5 5.724 2.5 6V13C2.5 13.276 2.724 13.5 3 13.5H13C13.276 13.5 13.5 13.276 13.5 13V6C13.5 5.724 13.276 5.5 13 5.5H3Z"/>
  </svg>
);

const aDSSectionIconDefinition = svgToIconDefinition(
  aDSSectionSvg,
  'ads-section'
);

/**![ADSSection](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTkgMi41SDFWMUg5VjIuNVpNMSA2QzEgNC44OTUgMS44OTUgNCAzIDRIMTNDMTQuMTA1IDQgMTUgNC44OTUgMTUgNlYxM0MxNSAxNC4xMDUgMTQuMTA1IDE1IDEzIDE1SDNDMS44OTUgMTUgMSAxNC4xMDUgMSAxM1Y2Wk0zIDUuNUMyLjcyNCA1LjUgMi41IDUuNzI0IDIuNSA2VjEzQzIuNSAxMy4yNzYgMi43MjQgMTMuNSAzIDEzLjVIMTNDMTMuMjc2IDEzLjUgMTMuNSAxMy4yNzYgMTMuNSAxM1Y2QzEzLjUgNS43MjQgMTMuMjc2IDUuNSAxMyA1LjVIM1oiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSSectionIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSSection';
}

export default RefIcon;
