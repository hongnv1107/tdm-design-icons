// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const arrowDownFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 24C12.3978 24 12.7794 23.842 13.0607 23.5607L23.5607 13.0607C24.1464 12.4749 24.1464 11.5251 23.5607 10.9393C22.9749 10.3536 22.0251 10.3536 21.4393 10.9393L13.5 18.8787V1.5C13.5 0.671572 12.8284 0 12 0C11.1716 0 10.5 0.671572 10.5 1.5V18.8787L2.56066 10.9393C1.97487 10.3536 1.02513 10.3536 0.43934 10.9393C-0.146447 11.5251 -0.146447 12.4749 0.43934 13.0607L10.9393 23.5607C11.2206 23.842 11.6022 24 12 24Z"/>
  </svg>
);

const arrowDownFilledIconDefinition = svgToIconDefinition(
  arrowDownFilledSvg,
  'arrow-down-filled'
);

/**![ArrowDownFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDI0QzEyLjM5NzggMjQgMTIuNzc5NCAyMy44NDIgMTMuMDYwNyAyMy41NjA3TDIzLjU2MDcgMTMuMDYwN0MyNC4xNDY0IDEyLjQ3NDkgMjQuMTQ2NCAxMS41MjUxIDIzLjU2MDcgMTAuOTM5M0MyMi45NzQ5IDEwLjM1MzYgMjIuMDI1MSAxMC4zNTM2IDIxLjQzOTMgMTAuOTM5M0wxMy41IDE4Ljg3ODdWMS41QzEzLjUgMC42NzE1NzIgMTIuODI4NCAwIDEyIDBDMTEuMTcxNiAwIDEwLjUgMC42NzE1NzIgMTAuNSAxLjVWMTguODc4N0wyLjU2MDY2IDEwLjkzOTNDMS45NzQ4NyAxMC4zNTM2IDEuMDI1MTMgMTAuMzUzNiAwLjQzOTM0IDEwLjkzOTNDLTAuMTQ2NDQ3IDExLjUyNTEgLTAuMTQ2NDQ3IDEyLjQ3NDkgMC40MzkzNCAxMy4wNjA3TDEwLjkzOTMgMjMuNTYwN0MxMS4yMjA2IDIzLjg0MiAxMS42MDIyIDI0IDEyIDI0WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={arrowDownFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ArrowDownFilled';
}

export default RefIcon;
