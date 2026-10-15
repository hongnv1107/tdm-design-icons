// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTableColumnsDistributeSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 2.375C2 1.616 2.616 1 3.375 1H12.625C13.384 1 14 1.616 14 2.375V13.625C14 14.384 13.384 15 12.625 15H3.375C2.616 15 2 14.384 2 13.625V2.375ZM3.5 2.5V13.5H5.5V2.5H3.5ZM7 2.5V13.5H9V2.5H7ZM10.5 2.5V13.5H12.5V2.5H10.5Z"/>
  </svg>
);

const aDSTableColumnsDistributeIconDefinition = svgToIconDefinition(
  aDSTableColumnsDistributeSvg,
  'ads-table-columns-distribute'
);

/**![ADSTableColumnsDistribute](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIgMi4zNzVDMiAxLjYxNiAyLjYxNiAxIDMuMzc1IDFIMTIuNjI1QzEzLjM4NCAxIDE0IDEuNjE2IDE0IDIuMzc1VjEzLjYyNUMxNCAxNC4zODQgMTMuMzg0IDE1IDEyLjYyNSAxNUgzLjM3NUMyLjYxNiAxNSAyIDE0LjM4NCAyIDEzLjYyNVYyLjM3NVpNMy41IDIuNVYxMy41SDUuNVYyLjVIMy41Wk03IDIuNVYxMy41SDlWMi41SDdaTTEwLjUgMi41VjEzLjVIMTIuNVYyLjVIMTAuNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTableColumnsDistributeIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTableColumnsDistribute';
}

export default RefIcon;
