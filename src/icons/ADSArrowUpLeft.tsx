// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSArrowUpLeftSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.061 4H10.25V2.5H3.25C2.836 2.5 2.5 2.836 2.5 3.25V10.25H4V5.061L12.47 13.53L13.53 12.47L5.061 4Z"/>
  </svg>
);

const aDSArrowUpLeftIconDefinition = svgToIconDefinition(
  aDSArrowUpLeftSvg,
  'ads-arrow-up-left'
);

/**![ADSArrowUpLeft](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUuMDYxIDRIMTAuMjVWMi41SDMuMjVDMi44MzYgMi41IDIuNSAyLjgzNiAyLjUgMy4yNVYxMC4yNUg0VjUuMDYxTDEyLjQ3IDEzLjUzTDEzLjUzIDEyLjQ3TDUuMDYxIDRaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSArrowUpLeftIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSArrowUpLeft';
}

export default RefIcon;
