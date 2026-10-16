// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSListNumberedSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 5L6 5V3.5L16 3.5V5ZM16 12.5L6 12.5V11L16 11V12.5Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 1H2.25C2.664 1 3 1.336 3 1.75V7H1.5V2.5H0.5V1Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M0 8.5H2.625C3.384 8.5 4 9.116 4 9.875V11.125C4 11.884 3.384 12.5 2.625 12.5H1.5V13.5H4V15H0.75C0.336 15 0 14.664 0 14.25V12.375C0 11.616 0.616 11 1.375 11H2.5V10H0V8.5Z"/>
  </svg>
);

const aDSListNumberedIconDefinition = svgToIconDefinition(
  aDSListNumberedSvg,
  'ads-list-numbered'
);

/**![ADSListNumbered](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE2IDVMNiA1VjMuNUwxNiAzLjVWNVpNMTYgMTIuNUw2IDEyLjVWMTFMMTYgMTFWMTIuNVoiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAuNSAxSDIuMjVDMi42NjQgMSAzIDEuMzM2IDMgMS43NVY3SDEuNVYyLjVIMC41VjFaIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDguNUgyLjYyNUMzLjM4NCA4LjUgNCA5LjExNiA0IDkuODc1VjExLjEyNUM0IDExLjg4NCAzLjM4NCAxMi41IDIuNjI1IDEyLjVIMS41VjEzLjVINFYxNUgwLjc1QzAuMzM2IDE1IDAgMTQuNjY0IDAgMTQuMjVWMTIuMzc1QzAgMTEuNjE2IDAuNjE2IDExIDEuMzc1IDExSDIuNVYxMEgwVjguNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSListNumberedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSListNumbered';
}

export default RefIcon;
