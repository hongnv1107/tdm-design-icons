// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSLayoutOneColumnSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.375C0 1.616 0.616 1 1.375 1H14.625C15.384 1 16 1.616 16 2.375V13.625C16 14.384 15.384 15 14.625 15H1.375C0.616 15 0 14.384 0 13.625V2.375ZM1.5 2.5V13.5H14.5V2.5H1.5Z"/>
  </svg>
);

const aDSLayoutOneColumnIconDefinition = svgToIconDefinition(
  aDSLayoutOneColumnSvg,
  'ads-layout-one-column'
);

/**![ADSLayoutOneColumn](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgMi4zNzVDMCAxLjYxNiAwLjYxNiAxIDEuMzc1IDFIMTQuNjI1QzE1LjM4NCAxIDE2IDEuNjE2IDE2IDIuMzc1VjEzLjYyNUMxNiAxNC4zODQgMTUuMzg0IDE1IDE0LjYyNSAxNUgxLjM3NUMwLjYxNiAxNSAwIDE0LjM4NCAwIDEzLjYyNVYyLjM3NVpNMS41IDIuNVYxMy41SDE0LjVWMi41SDEuNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSLayoutOneColumnIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSLayoutOneColumn';
}

export default RefIcon;
