// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSFieldCheckboxGroupSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 2.75C1 2.336 1.336 2 1.75 2H5.25C5.664 2 6 2.336 6 2.75V6.25C6 6.664 5.664 7 5.25 7H1.75C1.336 7 1 6.664 1 6.25V2.75ZM2.5 3.5V5.5H4.5V3.5H2.5ZM16 5.25H8V3.75H16V5.25ZM1 9.75C1 9.336 1.336 9 1.75 9H5.25C5.664 9 6 9.336 6 9.75V13.25C6 13.664 5.664 14 5.25 14H1.75C1.336 14 1 13.664 1 13.25V9.75ZM2.5 10.5V12.5H4.5V10.5H2.5ZM16 12.25H8V10.75H16V12.25Z"/>
  </svg>
);

const aDSFieldCheckboxGroupIconDefinition = svgToIconDefinition(
  aDSFieldCheckboxGroupSvg,
  'ads-field-checkbox-group'
);

/**![ADSFieldCheckboxGroup](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEgMi43NUMxIDIuMzM2IDEuMzM2IDIgMS43NSAySDUuMjVDNS42NjQgMiA2IDIuMzM2IDYgMi43NVY2LjI1QzYgNi42NjQgNS42NjQgNyA1LjI1IDdIMS43NUMxLjMzNiA3IDEgNi42NjQgMSA2LjI1VjIuNzVaTTIuNSAzLjVWNS41SDQuNVYzLjVIMi41Wk0xNiA1LjI1SDhWMy43NUgxNlY1LjI1Wk0xIDkuNzVDMSA5LjMzNiAxLjMzNiA5IDEuNzUgOUg1LjI1QzUuNjY0IDkgNiA5LjMzNiA2IDkuNzVWMTMuMjVDNiAxMy42NjQgNS42NjQgMTQgNS4yNSAxNEgxLjc1QzEuMzM2IDE0IDEgMTMuNjY0IDEgMTMuMjVWOS43NVpNMi41IDEwLjVWMTIuNUg0LjVWMTAuNUgyLjVaTTE2IDEyLjI1SDhWMTAuNzVIMTZWMTIuMjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSFieldCheckboxGroupIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSFieldCheckboxGroup';
}

export default RefIcon;
