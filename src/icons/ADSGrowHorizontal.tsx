// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSGrowHorizontalSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.22 7.47L3.72 3.97L4.78 5.03L2.561 7.25H7V8.75H2.561L4.78 10.97L3.72 12.03L0.22 8.53C-0.073 8.237 -0.073 7.763 0.22 7.47ZM13.439 7.25L11.22 5.03L12.28 3.97L15.78 7.47C16.073 7.763 16.073 8.237 15.78 8.53L12.28 12.03L11.22 10.97L13.439 8.75H9V7.25H13.439Z"/>
  </svg>
);

const aDSGrowHorizontalIconDefinition = svgToIconDefinition(
  aDSGrowHorizontalSvg,
  'ads-grow-horizontal'
);

/**![ADSGrowHorizontal](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAuMjIgNy40N0wzLjcyIDMuOTdMNC43OCA1LjAzTDIuNTYxIDcuMjVIN1Y4Ljc1SDIuNTYxTDQuNzggMTAuOTdMMy43MiAxMi4wM0wwLjIyIDguNTNDLTAuMDczIDguMjM3IC0wLjA3MyA3Ljc2MyAwLjIyIDcuNDdaTTEzLjQzOSA3LjI1TDExLjIyIDUuMDNMMTIuMjggMy45N0wxNS43OCA3LjQ3QzE2LjA3MyA3Ljc2MyAxNi4wNzMgOC4yMzcgMTUuNzggOC41M0wxMi4yOCAxMi4wM0wxMS4yMiAxMC45N0wxMy40MzkgOC43NUg5VjcuMjVIMTMuNDM5WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSGrowHorizontalIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSGrowHorizontal';
}

export default RefIcon;
