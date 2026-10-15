// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSPulseSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 1C6.586 1 6.882 1.224 6.972 1.548L9.75 11.468L10.778 7.798C10.869 7.474 11.164 7.25 11.5 7.25H16V8.75H12.069L10.472 14.452C10.382 14.776 10.086 15 9.75 15C9.414 15 9.118 14.776 9.028 14.452L6.25 4.532L5.222 8.202C5.132 8.526 4.836 8.75 4.5 8.75H0V7.25H3.931L5.528 1.548C5.618 1.224 5.914 1 6.25 1Z"/>
  </svg>
);

const aDSPulseIconDefinition = svgToIconDefinition(
  aDSPulseSvg,
  'ads-pulse'
);

/**![ADSPulse](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTYuMjUgMUM2LjU4NiAxIDYuODgyIDEuMjI0IDYuOTcyIDEuNTQ4TDkuNzUgMTEuNDY4TDEwLjc3OCA3Ljc5OEMxMC44NjkgNy40NzQgMTEuMTY0IDcuMjUgMTEuNSA3LjI1SDE2VjguNzVIMTIuMDY5TDEwLjQ3MiAxNC40NTJDMTAuMzgyIDE0Ljc3NiAxMC4wODYgMTUgOS43NSAxNUM5LjQxNCAxNSA5LjExOCAxNC43NzYgOS4wMjggMTQuNDUyTDYuMjUgNC41MzJMNS4yMjIgOC4yMDJDNS4xMzIgOC41MjYgNC44MzYgOC43NSA0LjUgOC43NUgwVjcuMjVIMy45MzFMNS41MjggMS41NDhDNS42MTggMS4yMjQgNS45MTQgMSA2LjI1IDFaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSPulseIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSPulse';
}

export default RefIcon;
