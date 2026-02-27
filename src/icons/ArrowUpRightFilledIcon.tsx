// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const arrowUpRightFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M17 18C16.4477 18 16 17.5523 16 17V9.41421L7.70711 17.7071C7.31658 18.0976 6.68342 18.0976 6.29289 17.7071C5.90237 17.3166 5.90237 16.6834 6.29289 16.2929L14.5858 8H7C6.44771 8 6 7.55229 6 7C6 6.44771 6.44771 6 7 6H17C17.5523 6 18 6.44771 18 7V17C18 17.5523 17.5523 18 17 18Z"/>
  </svg>
);

const arrowUpRightFilledIconDefinition = svgToIconDefinition(
  arrowUpRightFilledSvg,
  'arrow-up-right-filled'
);

/**![ArrowUpRightFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE3IDE4QzE2LjQ0NzcgMTggMTYgMTcuNTUyMyAxNiAxN1Y5LjQxNDIxTDcuNzA3MTEgMTcuNzA3MUM3LjMxNjU4IDE4LjA5NzYgNi42ODM0MiAxOC4wOTc2IDYuMjkyODkgMTcuNzA3MUM1LjkwMjM3IDE3LjMxNjYgNS45MDIzNyAxNi42ODM0IDYuMjkyODkgMTYuMjkyOUwxNC41ODU4IDhIN0M2LjQ0NzcxIDggNiA3LjU1MjI5IDYgN0M2IDYuNDQ3NzEgNi40NDc3MSA2IDcgNkgxN0MxNy41NTIzIDYgMTggNi40NDc3MSAxOCA3VjE3QzE4IDE3LjU1MjMgMTcuNTUyMyAxOCAxNyAxOFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={arrowUpRightFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ArrowUpRightFilledIcon';
}

export default RefIcon;
