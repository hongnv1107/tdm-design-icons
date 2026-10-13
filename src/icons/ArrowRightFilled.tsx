// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const arrowRightFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 11.6022 23.842 11.2206 23.5607 10.9393L13.0607 0.439343C12.4749 -0.146444 11.5251 -0.146444 10.9393 0.439343C10.3536 1.02513 10.3536 1.97488 10.9393 2.56066L18.8787 10.5L1.5 10.5C0.671573 10.5 1.3466e-06 11.1716 1.38281e-06 12C1.41902e-06 12.8284 0.671573 13.5 1.5 13.5L18.8787 13.5L10.9393 21.4393C10.3536 22.0251 10.3536 22.9749 10.9393 23.5607C11.5251 24.1464 12.4749 24.1464 13.0607 23.5607L23.5607 13.0607C23.842 12.7794 24 12.3978 24 12Z"/>
  </svg>
);

const arrowRightFilledIconDefinition = svgToIconDefinition(
  arrowRightFilledSvg,
  'arrow-right-filled'
);

/**![ArrowRightFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI0IDEyQzI0IDExLjYwMjIgMjMuODQyIDExLjIyMDYgMjMuNTYwNyAxMC45MzkzTDEzLjA2MDcgMC40MzkzNDNDMTIuNDc0OSAtMC4xNDY0NDQgMTEuNTI1MSAtMC4xNDY0NDQgMTAuOTM5MyAwLjQzOTM0M0MxMC4zNTM2IDEuMDI1MTMgMTAuMzUzNiAxLjk3NDg4IDEwLjkzOTMgMi41NjA2NkwxOC44Nzg3IDEwLjVMMS41IDEwLjVDMC42NzE1NzMgMTAuNSAxLjM0NjZlLTA2IDExLjE3MTYgMS4zODI4MWUtMDYgMTJDMS40MTkwMmUtMDYgMTIuODI4NCAwLjY3MTU3MyAxMy41IDEuNSAxMy41TDE4Ljg3ODcgMTMuNUwxMC45MzkzIDIxLjQzOTNDMTAuMzUzNiAyMi4wMjUxIDEwLjM1MzYgMjIuOTc0OSAxMC45MzkzIDIzLjU2MDdDMTEuNTI1MSAyNC4xNDY0IDEyLjQ3NDkgMjQuMTQ2NCAxMy4wNjA3IDIzLjU2MDdMMjMuNTYwNyAxMy4wNjA3QzIzLjg0MiAxMi43Nzk0IDI0IDEyLjM5NzggMjQgMTJaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={arrowRightFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ArrowRightFilled';
}

export default RefIcon;
