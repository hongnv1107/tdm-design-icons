// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const arrowDownSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd"
    d="M12 20C12.2652 20 12.5196 19.8946 12.7071 19.7071L19.7071 12.7071C20.0976 12.3166 20.0976 11.6834 19.7071 11.2929C19.3166 10.9024 18.6834 10.9024 18.2929 11.2929L13 16.5858V5C13 4.44771 12.5523 4 12 4C11.4477 4 11 4.44771 11 5V16.5858L5.70711 11.2929C5.31658 10.9024 4.68342 10.9024 4.29289 11.2929C3.90237 11.6834 3.90237 12.3166 4.29289 12.7071L11.2929 19.7071C11.4804 19.8946 11.7348 20 12 20Z" />
  </svg>
);

const arrowDownIconDefinition = svgToIconDefinition(
  arrowDownSvg,
  'arrow-down'
);

/**![ArrowDownIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2NhY2FjYSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDIwQzEyLjI2NTIgMjAgMTIuNTE5NiAxOS44OTQ2IDEyLjcwNzEgMTkuNzA3MUwxOS43MDcxIDEyLjcwNzFDMjAuMDk3NiAxMi4zMTY2IDIwLjA5NzYgMTEuNjgzNCAxOS43MDcxIDExLjI5MjlDMTkuMzE2NiAxMC45MDI0IDE4LjY4MzQgMTAuOTAyNCAxOC4yOTI5IDExLjI5MjlMMTMgMTYuNTg1OFY1QzEzIDQuNDQ3NzEgMTIuNTUyMyA0IDEyIDRDMTEuNDQ3NyA0IDExIDQuNDQ3NzEgMTEgNVYxNi41ODU4TDUuNzA3MTEgMTEuMjkyOUM1LjMxNjU4IDEwLjkwMjQgNC42ODM0MiAxMC45MDI0IDQuMjkyODkgMTEuMjkyOUMzLjkwMjM3IDExLjY4MzQgMy45MDIzNyAxMi4zMTY2IDQuMjkyODkgMTIuNzA3MUwxMS4yOTI5IDE5LjcwNzFDMTEuNDgwNCAxOS44OTQ2IDExLjczNDggMjAgMTIgMjBaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={arrowDownIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ArrowDownIcon';
}

export default RefIcon;
