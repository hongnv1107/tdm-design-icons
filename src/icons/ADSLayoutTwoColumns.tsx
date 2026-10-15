// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSLayoutTwoColumnsSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.375C0 1.616 0.616 1 1.375 1H5.875C6.634 1 7.25 1.616 7.25 2.375V13.625C7.25 14.384 6.634 15 5.875 15H1.375C0.616 15 0 14.384 0 13.625V2.375ZM1.5 2.5V13.5H5.75V2.5H1.5ZM8.75 2.375C8.75 1.616 9.366 1 10.125 1H14.625C15.384 1 16 1.616 16 2.375V13.625C16 14.384 15.384 15 14.625 15H10.125C9.366 15 8.75 14.384 8.75 13.625V2.375ZM10.25 2.5V13.5H14.5V2.5H10.25Z"/>
  </svg>
);

const aDSLayoutTwoColumnsIconDefinition = svgToIconDefinition(
  aDSLayoutTwoColumnsSvg,
  'ads-layout-two-columns'
);

/**![ADSLayoutTwoColumns](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgMi4zNzVDMCAxLjYxNiAwLjYxNiAxIDEuMzc1IDFINS44NzVDNi42MzQgMSA3LjI1IDEuNjE2IDcuMjUgMi4zNzVWMTMuNjI1QzcuMjUgMTQuMzg0IDYuNjM0IDE1IDUuODc1IDE1SDEuMzc1QzAuNjE2IDE1IDAgMTQuMzg0IDAgMTMuNjI1VjIuMzc1Wk0xLjUgMi41VjEzLjVINS43NVYyLjVIMS41Wk04Ljc1IDIuMzc1QzguNzUgMS42MTYgOS4zNjYgMSAxMC4xMjUgMUgxNC42MjVDMTUuMzg0IDEgMTYgMS42MTYgMTYgMi4zNzVWMTMuNjI1QzE2IDE0LjM4NCAxNS4zODQgMTUgMTQuNjI1IDE1SDEwLjEyNUM5LjM2NiAxNSA4Ljc1IDE0LjM4NCA4Ljc1IDEzLjYyNVYyLjM3NVpNMTAuMjUgMi41VjEzLjVIMTQuNVYyLjVIMTAuMjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSLayoutTwoColumnsIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSLayoutTwoColumns';
}

export default RefIcon;
