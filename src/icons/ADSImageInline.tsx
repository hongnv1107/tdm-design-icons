// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSImageInlineSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 6.375C0 5.616 0.616 5 1.375 5H4.625C5.384 5 6 5.616 6 6.375V9.625C6 10.384 5.384 11 4.625 11H1.375C0.616 11 0 10.384 0 9.625V6.375ZM1.5 6.5V9.5H4.5V6.5H1.5ZM16 8.75H8V7.25H16V8.75Z"/>
  </svg>
);

const aDSImageInlineIconDefinition = svgToIconDefinition(
  aDSImageInlineSvg,
  'ads-image-inline'
);

/**![ADSImageInline](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgNi4zNzVDMCA1LjYxNiAwLjYxNiA1IDEuMzc1IDVINC42MjVDNS4zODQgNSA2IDUuNjE2IDYgNi4zNzVWOS42MjVDNiAxMC4zODQgNS4zODQgMTEgNC42MjUgMTFIMS4zNzVDMC42MTYgMTEgMCAxMC4zODQgMCA5LjYyNVY2LjM3NVpNMS41IDYuNVY5LjVINC41VjYuNUgxLjVaTTE2IDguNzVIOFY3LjI1SDE2VjguNzVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSImageInlineIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSImageInline';
}

export default RefIcon;
