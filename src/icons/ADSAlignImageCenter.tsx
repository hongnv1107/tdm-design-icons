// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSAlignImageCenterSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15 2.5L1 2.5L1 1L15 1V2.5ZM6.5 6.5V9.5H9.5V6.5L6.5 6.5ZM6.375 5L9.625 5C10.384 5 11 5.616 11 6.375V9.625C11 10.384 10.384 11 9.625 11H6.375C5.616 11 5 10.384 5 9.625L5 6.375C5 5.616 5.616 5 6.375 5ZM15 15L1 15L1 13.5L15 13.5V15Z"/>
  </svg>
);

const aDSAlignImageCenterIconDefinition = svgToIconDefinition(
  aDSAlignImageCenterSvg,
  'ads-align-image-center'
);

/**![ADSAlignImageCenter](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1IDIuNUwxIDIuNUwxIDFMMTUgMVYyLjVaTTYuNSA2LjVWOS41SDkuNVY2LjVMNi41IDYuNVpNNi4zNzUgNUw5LjYyNSA1QzEwLjM4NCA1IDExIDUuNjE2IDExIDYuMzc1VjkuNjI1QzExIDEwLjM4NCAxMC4zODQgMTEgOS42MjUgMTFINi4zNzVDNS42MTYgMTEgNSAxMC4zODQgNSA5LjYyNUw1IDYuMzc1QzUgNS42MTYgNS42MTYgNSA2LjM3NSA1Wk0xNSAxNUwxIDE1TDEgMTMuNUwxNSAxMy41VjE1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSAlignImageCenterIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSAlignImageCenter';
}

export default RefIcon;
