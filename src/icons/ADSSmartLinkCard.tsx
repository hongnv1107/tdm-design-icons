// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSSmartLinkCardSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 4.5C1.724 4.5 1.5 4.724 1.5 5V11C1.5 11.276 1.724 11.5 2 11.5H10V4.5H2ZM11.5 4.5V11.5H14C14.276 11.5 14.5 11.276 14.5 11V5C14.5 4.724 14.276 4.5 14 4.5H11.5ZM0 5C0 3.895 0.895 3 2 3H14C15.105 3 16 3.895 16 5V11C16 12.105 15.105 13 14 13H2C0.895 13 0 12.105 0 11V5ZM8.5 7.5H3V6H8.5V7.5ZM6 10H3V8.5H6V10Z"/>
  </svg>
);

const aDSSmartLinkCardIconDefinition = svgToIconDefinition(
  aDSSmartLinkCardSvg,
  'ads-smart-link-card'
);

/**![ADSSmartLinkCard](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIgNC41QzEuNzI0IDQuNSAxLjUgNC43MjQgMS41IDVWMTFDMS41IDExLjI3NiAxLjcyNCAxMS41IDIgMTEuNUgxMFY0LjVIMlpNMTEuNSA0LjVWMTEuNUgxNEMxNC4yNzYgMTEuNSAxNC41IDExLjI3NiAxNC41IDExVjVDMTQuNSA0LjcyNCAxNC4yNzYgNC41IDE0IDQuNUgxMS41Wk0wIDVDMCAzLjg5NSAwLjg5NSAzIDIgM0gxNEMxNS4xMDUgMyAxNiAzLjg5NSAxNiA1VjExQzE2IDEyLjEwNSAxNS4xMDUgMTMgMTQgMTNIMkMwLjg5NSAxMyAwIDEyLjEwNSAwIDExVjVaTTguNSA3LjVIM1Y2SDguNVY3LjVaTTYgMTBIM1Y4LjVINlYxMFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSSmartLinkCardIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSSmartLinkCard';
}

export default RefIcon;
