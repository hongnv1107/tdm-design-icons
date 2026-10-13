// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const arrowUpFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C12.3978 0 12.7794 0.158035 13.0607 0.43934L23.5607 10.9393C24.1464 11.5251 24.1464 12.4749 23.5607 13.0607C22.9749 13.6464 22.0251 13.6464 21.4393 13.0607L13.5 5.12132V22.5C13.5 23.3284 12.8284 24 12 24C11.1716 24 10.5 23.3284 10.5 22.5V5.12132L2.56066 13.0607C1.97487 13.6464 1.02513 13.6464 0.43934 13.0607C-0.146447 12.4749 -0.146447 11.5251 0.43934 10.9393L10.9393 0.43934C11.2206 0.158035 11.6022 0 12 0Z"/>
  </svg>
);

const arrowUpFilledIconDefinition = svgToIconDefinition(
  arrowUpFilledSvg,
  'arrow-up-filled'
);

/**![ArrowUpFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDBDMTIuMzk3OCAwIDEyLjc3OTQgMC4xNTgwMzUgMTMuMDYwNyAwLjQzOTM0TDIzLjU2MDcgMTAuOTM5M0MyNC4xNDY0IDExLjUyNTEgMjQuMTQ2NCAxMi40NzQ5IDIzLjU2MDcgMTMuMDYwN0MyMi45NzQ5IDEzLjY0NjQgMjIuMDI1MSAxMy42NDY0IDIxLjQzOTMgMTMuMDYwN0wxMy41IDUuMTIxMzJWMjIuNUMxMy41IDIzLjMyODQgMTIuODI4NCAyNCAxMiAyNEMxMS4xNzE2IDI0IDEwLjUgMjMuMzI4NCAxMC41IDIyLjVWNS4xMjEzMkwyLjU2MDY2IDEzLjA2MDdDMS45NzQ4NyAxMy42NDY0IDEuMDI1MTMgMTMuNjQ2NCAwLjQzOTM0IDEzLjA2MDdDLTAuMTQ2NDQ3IDEyLjQ3NDkgLTAuMTQ2NDQ3IDExLjUyNTEgMC40MzkzNCAxMC45MzkzTDEwLjkzOTMgMC40MzkzNEMxMS4yMjA2IDAuMTU4MDM1IDExLjYwMjIgMCAxMiAwWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={arrowUpFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ArrowUpFilled';
}

export default RefIcon;
