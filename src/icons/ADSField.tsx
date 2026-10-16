// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSFieldSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 3.5H0V2H6V3.5ZM0 7C0 5.895 0.895 5 2 5H14C15.105 5 16 5.895 16 7V10C16 11.105 15.105 12 14 12H2C0.895 12 0 11.105 0 10V7ZM2 6.5C1.724 6.5 1.5 6.724 1.5 7V10C1.5 10.276 1.724 10.5 2 10.5H14C14.276 10.5 14.5 10.276 14.5 10V7C14.5 6.724 14.276 6.5 14 6.5H2Z"/>
  </svg>
);

const aDSFieldIconDefinition = svgToIconDefinition(
  aDSFieldSvg,
  'ads-field'
);

/**![ADSField](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTYgMy41SDBWMkg2VjMuNVpNMCA3QzAgNS44OTUgMC44OTUgNSAyIDVIMTRDMTUuMTA1IDUgMTYgNS44OTUgMTYgN1YxMEMxNiAxMS4xMDUgMTUuMTA1IDEyIDE0IDEySDJDMC44OTUgMTIgMCAxMS4xMDUgMCAxMFY3Wk0yIDYuNUMxLjcyNCA2LjUgMS41IDYuNzI0IDEuNSA3VjEwQzEuNSAxMC4yNzYgMS43MjQgMTAuNSAyIDEwLjVIMTRDMTQuMjc2IDEwLjUgMTQuNSAxMC4yNzYgMTQuNSAxMFY3QzE0LjUgNi43MjQgMTQuMjc2IDYuNSAxNCA2LjVIMloiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSFieldIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSField';
}

export default RefIcon;
