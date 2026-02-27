// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const arrowDownRightFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M17 6C16.4477 6 16 6.44772 16 7V14.5858L7.70711 6.29289C7.31658 5.90237 6.68342 5.90237 6.29289 6.29289C5.90237 6.68342 5.90237 7.31658 6.29289 7.70711L14.5858 16H7C6.44771 16 6 16.4477 6 17C6 17.5523 6.44771 18 7 18H17C17.5523 18 18 17.5523 18 17V7C18 6.44772 17.5523 6 17 6Z"/>
  </svg>
);

const arrowDownRightFilledIconDefinition = svgToIconDefinition(
  arrowDownRightFilledSvg,
  'arrow-down-right-filled'
);

/**![ArrowDownRightFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE3IDZDMTYuNDQ3NyA2IDE2IDYuNDQ3NzIgMTYgN1YxNC41ODU4TDcuNzA3MTEgNi4yOTI4OUM3LjMxNjU4IDUuOTAyMzcgNi42ODM0MiA1LjkwMjM3IDYuMjkyODkgNi4yOTI4OUM1LjkwMjM3IDYuNjgzNDIgNS45MDIzNyA3LjMxNjU4IDYuMjkyODkgNy43MDcxMUwxNC41ODU4IDE2SDdDNi40NDc3MSAxNiA2IDE2LjQ0NzcgNiAxN0M2IDE3LjU1MjMgNi40NDc3MSAxOCA3IDE4SDE3QzE3LjU1MjMgMTggMTggMTcuNTUyMyAxOCAxN1Y3QzE4IDYuNDQ3NzIgMTcuNTUyMyA2IDE3IDZaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={arrowDownRightFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ArrowDownRightFilledIcon';
}

export default RefIcon;
