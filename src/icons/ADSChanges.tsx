// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSChangesSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.78 4.22L11.53 0.97L10.47 2.03L12.439 4H2V5.5H12.439L10.47 7.47L11.53 8.53L14.78 5.28C15.073 4.987 15.073 4.513 14.78 4.22ZM3.561 10.5L5.53 8.53L4.47 7.47L1.22 10.72C0.927 11.013 0.927 11.488 1.22 11.78L4.47 15.03L5.53 13.97L3.561 12H14V10.5H3.561Z"/>
  </svg>
);

const aDSChangesIconDefinition = svgToIconDefinition(
  aDSChangesSvg,
  'ads-changes'
);

/**![ADSChanges](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE0Ljc4IDQuMjJMMTEuNTMgMC45N0wxMC40NyAyLjAzTDEyLjQzOSA0SDJWNS41SDEyLjQzOUwxMC40NyA3LjQ3TDExLjUzIDguNTNMMTQuNzggNS4yOEMxNS4wNzMgNC45ODcgMTUuMDczIDQuNTEzIDE0Ljc4IDQuMjJaTTMuNTYxIDEwLjVMNS41MyA4LjUzTDQuNDcgNy40N0wxLjIyIDEwLjcyQzAuOTI3IDExLjAxMyAwLjkyNyAxMS40ODggMS4yMiAxMS43OEw0LjQ3IDE1LjAzTDUuNTMgMTMuOTdMMy41NjEgMTJIMTRWMTAuNUgzLjU2MVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSChangesIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSChanges';
}

export default RefIcon;
