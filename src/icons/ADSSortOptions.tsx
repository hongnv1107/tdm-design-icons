// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSSortOptionsSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.22 1.22C4.513 0.927 4.987 0.927 5.28 1.22L8.53 4.47L7.47 5.53L5.5 3.561L5.5 14H4L4 3.561L2.03 5.53L0.97 4.47L4.22 1.22ZM10.5 12.439V2H12V12.439L13.97 10.47L15.03 11.53L11.78 14.78C11.488 15.073 11.013 15.073 10.72 14.78L7.47 11.53L8.53 10.47L10.5 12.439Z"/>
  </svg>
);

const aDSSortOptionsIconDefinition = svgToIconDefinition(
  aDSSortOptionsSvg,
  'ads-sort-options'
);

/**![ADSSortOptions](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQuMjIgMS4yMkM0LjUxMyAwLjkyNyA0Ljk4NyAwLjkyNyA1LjI4IDEuMjJMOC41MyA0LjQ3TDcuNDcgNS41M0w1LjUgMy41NjFMNS41IDE0SDRMNCAzLjU2MUwyLjAzIDUuNTNMMC45NyA0LjQ3TDQuMjIgMS4yMlpNMTAuNSAxMi40MzlWMkgxMlYxMi40MzlMMTMuOTcgMTAuNDdMMTUuMDMgMTEuNTNMMTEuNzggMTQuNzhDMTEuNDg4IDE1LjA3MyAxMS4wMTMgMTUuMDczIDEwLjcyIDE0Ljc4TDcuNDcgMTEuNTNMOC41MyAxMC40N0wxMC41IDEyLjQzOVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSSortOptionsIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSSortOptions';
}

export default RefIcon;
