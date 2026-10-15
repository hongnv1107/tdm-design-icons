// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSContentWidthWideSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.5L4 2.5L4 1L12 1L12 2.5ZM1.5 5.5L1.5 10.5L14.5 10.5L14.5 5.5L1.5 5.5ZM1.375 4L14.625 4C15.384 4 16 4.616 16 5.375L16 10.625C16 11.384 15.384 12 14.625 12L1.375 12C0.616 12 0 11.384 0 10.625L0 5.375C0 4.616 0.616 4 1.375 4ZM12 15L4 15L4 13.5L12 13.5L12 15Z"/>
  </svg>
);

const aDSContentWidthWideIconDefinition = svgToIconDefinition(
  aDSContentWidthWideSvg,
  'ads-content-width-wide'
);

/**![ADSContentWidthWide](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDIuNUw0IDIuNUw0IDFMMTIgMUwxMiAyLjVaTTEuNSA1LjVMMS41IDEwLjVMMTQuNSAxMC41TDE0LjUgNS41TDEuNSA1LjVaTTEuMzc1IDRMMTQuNjI1IDRDMTUuMzg0IDQgMTYgNC42MTYgMTYgNS4zNzVMMTYgMTAuNjI1QzE2IDExLjM4NCAxNS4zODQgMTIgMTQuNjI1IDEyTDEuMzc1IDEyQzAuNjE2IDEyIDAgMTEuMzg0IDAgMTAuNjI1TDAgNS4zNzVDMCA0LjYxNiAwLjYxNiA0IDEuMzc1IDRaTTEyIDE1TDQgMTVMNCAxMy41TDEyIDEzLjVMMTIgMTVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSContentWidthWideIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSContentWidthWide';
}

export default RefIcon;
