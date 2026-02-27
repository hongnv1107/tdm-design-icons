// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const arrowUpLeftFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 18C7.55228 18 8 17.5523 8 17V9.41421L16.2929 17.7071C16.6834 18.0976 17.3166 18.0976 17.7071 17.7071C18.0976 17.3166 18.0976 16.6834 17.7071 16.2929L9.41421 8H17C17.5523 8 18 7.55229 18 7C18 6.44771 17.5523 6 17 6H7C6.44772 6 6 6.44771 6 7V17C6 17.5523 6.44772 18 7 18Z"/>
  </svg>
);

const arrowUpLeftFilledIconDefinition = svgToIconDefinition(
  arrowUpLeftFilledSvg,
  'arrow-up-left-filled'
);

/**![ArrowUpLeftFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTcgMThDNy41NTIyOCAxOCA4IDE3LjU1MjMgOCAxN1Y5LjQxNDIxTDE2LjI5MjkgMTcuNzA3MUMxNi42ODM0IDE4LjA5NzYgMTcuMzE2NiAxOC4wOTc2IDE3LjcwNzEgMTcuNzA3MUMxOC4wOTc2IDE3LjMxNjYgMTguMDk3NiAxNi42ODM0IDE3LjcwNzEgMTYuMjkyOUw5LjQxNDIxIDhIMTdDMTcuNTUyMyA4IDE4IDcuNTUyMjkgMTggN0MxOCA2LjQ0NzcxIDE3LjU1MjMgNiAxNyA2SDdDNi40NDc3MiA2IDYgNi40NDc3MSA2IDdWMTdDNiAxNy41NTIzIDYuNDQ3NzIgMTggNyAxOFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={arrowUpLeftFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ArrowUpLeftFilledIcon';
}

export default RefIcon;
