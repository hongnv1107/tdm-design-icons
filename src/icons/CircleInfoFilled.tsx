// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const circleInfoFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C18.6274 1.54626e-07 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 1.54622e-07 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM12 10.7998C11.3373 10.7998 10.7998 11.3373 10.7998 12V16.3193C10.7998 16.9821 11.3373 17.5195 12 17.5195C12.6627 17.5195 13.2002 16.9821 13.2002 16.3193V12C13.2002 11.3373 12.6627 10.7998 12 10.7998ZM12 6.48047C11.3373 6.48047 10.7998 7.01792 10.7998 7.68066C10.8002 8.3431 11.3375 8.88086 12 8.88086H12.0107L12.1338 8.87305C12.7385 8.81145 13.2106 8.30156 13.2109 7.68066C13.2109 7.05945 12.7387 6.54792 12.1338 6.48633L12.0107 6.48047H12Z"/>
  </svg>
);

const circleInfoFilledIconDefinition = svgToIconDefinition(
  circleInfoFilledSvg,
  'circle-info-filled'
);

/**![CircleInfoFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDBDMTguNjI3NCAxLjU0NjI2ZS0wNyAyNCA1LjM3MjU4IDI0IDEyQzI0IDE4LjYyNzQgMTguNjI3NCAyNCAxMiAyNEM1LjM3MjU4IDI0IDEuNTQ2MjJlLTA3IDE4LjYyNzQgMCAxMkMwIDUuMzcyNTggNS4zNzI1OCAwIDEyIDBaTTEyIDEwLjc5OThDMTEuMzM3MyAxMC43OTk4IDEwLjc5OTggMTEuMzM3MyAxMC43OTk4IDEyVjE2LjMxOTNDMTAuNzk5OCAxNi45ODIxIDExLjMzNzMgMTcuNTE5NSAxMiAxNy41MTk1QzEyLjY2MjcgMTcuNTE5NSAxMy4yMDAyIDE2Ljk4MjEgMTMuMjAwMiAxNi4zMTkzVjEyQzEzLjIwMDIgMTEuMzM3MyAxMi42NjI3IDEwLjc5OTggMTIgMTAuNzk5OFpNMTIgNi40ODA0N0MxMS4zMzczIDYuNDgwNDcgMTAuNzk5OCA3LjAxNzkyIDEwLjc5OTggNy42ODA2NkMxMC44MDAyIDguMzQzMSAxMS4zMzc1IDguODgwODYgMTIgOC44ODA4NkgxMi4wMTA3TDEyLjEzMzggOC44NzMwNUMxMi43Mzg1IDguODExNDUgMTMuMjEwNiA4LjMwMTU2IDEzLjIxMDkgNy42ODA2NkMxMy4yMTA5IDcuMDU5NDUgMTIuNzM4NyA2LjU0NzkyIDEyLjEzMzggNi40ODYzM0wxMi4wMTA3IDYuNDgwNDdIMTJaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={circleInfoFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CircleInfoFilled';
}

export default RefIcon;
