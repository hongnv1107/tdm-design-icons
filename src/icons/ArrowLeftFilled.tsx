// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const arrowLeftFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.24537e-07 12C5.41926e-07 11.6022 0.158036 11.2206 0.43934 10.9393L10.9393 0.439343C11.5251 -0.146444 12.4749 -0.146444 13.0607 0.439343C13.6464 1.02513 13.6464 1.97488 13.0607 2.56066L5.12132 10.5L22.5 10.5C23.3284 10.5 24 11.1716 24 12C24 12.8284 23.3284 13.5 22.5 13.5L5.12132 13.5L13.0607 21.4393C13.6464 22.0251 13.6464 22.9749 13.0607 23.5607C12.4749 24.1464 11.5251 24.1464 10.9393 23.5607L0.43934 13.0607C0.158036 12.7794 5.07147e-07 12.3978 5.24537e-07 12Z"/>
  </svg>
);

const arrowLeftFilledIconDefinition = svgToIconDefinition(
  arrowLeftFilledSvg,
  'arrow-left-filled'
);

/**![ArrowLeftFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUuMjQ1MzdlLTA3IDEyQzUuNDE5MjZlLTA3IDExLjYwMjIgMC4xNTgwMzYgMTEuMjIwNiAwLjQzOTM0IDEwLjkzOTNMMTAuOTM5MyAwLjQzOTM0M0MxMS41MjUxIC0wLjE0NjQ0NCAxMi40NzQ5IC0wLjE0NjQ0NCAxMy4wNjA3IDAuNDM5MzQzQzEzLjY0NjQgMS4wMjUxMyAxMy42NDY0IDEuOTc0ODggMTMuMDYwNyAyLjU2MDY2TDUuMTIxMzIgMTAuNUwyMi41IDEwLjVDMjMuMzI4NCAxMC41IDI0IDExLjE3MTYgMjQgMTJDMjQgMTIuODI4NCAyMy4zMjg0IDEzLjUgMjIuNSAxMy41TDUuMTIxMzIgMTMuNUwxMy4wNjA3IDIxLjQzOTNDMTMuNjQ2NCAyMi4wMjUxIDEzLjY0NjQgMjIuOTc0OSAxMy4wNjA3IDIzLjU2MDdDMTIuNDc0OSAyNC4xNDY0IDExLjUyNTEgMjQuMTQ2NCAxMC45MzkzIDIzLjU2MDdMMC40MzkzNCAxMy4wNjA3QzAuMTU4MDM2IDEyLjc3OTQgNS4wNzE0N2UtMDcgMTIuMzk3OCA1LjI0NTM3ZS0wNyAxMloiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={arrowLeftFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ArrowLeftFilled';
}

export default RefIcon;
