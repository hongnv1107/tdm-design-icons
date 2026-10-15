// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSListBulletedSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 4.25C0.5 3.422 1.172 2.75 2 2.75C2.828 2.75 3.5 3.422 3.5 4.25C3.5 5.078 2.828 5.75 2 5.75C1.172 5.75 0.5 5.078 0.5 4.25Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 11.75C0.5 10.922 1.172 10.25 2 10.25C2.828 10.25 3.5 10.922 3.5 11.75C3.5 12.578 2.828 13.25 2 13.25C1.172 13.25 0.5 12.578 0.5 11.75Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16 5L6 5V3.5L16 3.5V5ZM16 12.5L6 12.5V11L16 11V12.5Z"/>
  </svg>
);

const aDSListBulletedIconDefinition = svgToIconDefinition(
  aDSListBulletedSvg,
  'ads-list-bulleted'
);

/**![ADSListBulleted](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAuNSA0LjI1QzAuNSAzLjQyMiAxLjE3MiAyLjc1IDIgMi43NUMyLjgyOCAyLjc1IDMuNSAzLjQyMiAzLjUgNC4yNUMzLjUgNS4wNzggMi44MjggNS43NSAyIDUuNzVDMS4xNzIgNS43NSAwLjUgNS4wNzggMC41IDQuMjVaIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wLjUgMTEuNzVDMC41IDEwLjkyMiAxLjE3MiAxMC4yNSAyIDEwLjI1QzIuODI4IDEwLjI1IDMuNSAxMC45MjIgMy41IDExLjc1QzMuNSAxMi41NzggMi44MjggMTMuMjUgMiAxMy4yNUMxLjE3MiAxMy4yNSAwLjUgMTIuNTc4IDAuNSAxMS43NVoiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE2IDVMNiA1VjMuNUwxNiAzLjVWNVpNMTYgMTIuNUw2IDEyLjVWMTFMMTYgMTFWMTIuNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSListBulletedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSListBulleted';
}

export default RefIcon;
