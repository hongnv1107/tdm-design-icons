// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSArrowRightSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.439 7.25L8.72 3.53L9.78 2.47L14.78 7.47C15.073 7.763 15.073 8.237 14.78 8.53L9.78 13.53L8.72 12.47L12.439 8.75L1 8.75V7.25L12.439 7.25Z"/>
  </svg>
);

const aDSArrowRightIconDefinition = svgToIconDefinition(
  aDSArrowRightSvg,
  'ads-arrow-right'
);

/**![ADSArrowRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEyLjQzOSA3LjI1TDguNzIgMy41M0w5Ljc4IDIuNDdMMTQuNzggNy40N0MxNS4wNzMgNy43NjMgMTUuMDczIDguMjM3IDE0Ljc4IDguNTNMOS43OCAxMy41M0w4LjcyIDEyLjQ3TDEyLjQzOSA4Ljc1TDEgOC43NVY3LjI1TDEyLjQzOSA3LjI1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSArrowRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSArrowRight';
}

export default RefIcon;
