// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const arrowDownLeftFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 6C7.55228 6 8 6.44772 8 7V14.5858L16.2929 6.29289C16.6834 5.90237 17.3166 5.90237 17.7071 6.29289C18.0976 6.68342 18.0976 7.31658 17.7071 7.70711L9.41421 16H17C17.5523 16 18 16.4477 18 17C18 17.5523 17.5523 18 17 18H7C6.44772 18 6 17.5523 6 17V7C6 6.44772 6.44772 6 7 6Z"/>
  </svg>
);

const arrowDownLeftFilledIconDefinition = svgToIconDefinition(
  arrowDownLeftFilledSvg,
  'arrow-down-left-filled'
);

/**![ArrowDownLeftFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTcgNkM3LjU1MjI4IDYgOCA2LjQ0NzcyIDggN1YxNC41ODU4TDE2LjI5MjkgNi4yOTI4OUMxNi42ODM0IDUuOTAyMzcgMTcuMzE2NiA1LjkwMjM3IDE3LjcwNzEgNi4yOTI4OUMxOC4wOTc2IDYuNjgzNDIgMTguMDk3NiA3LjMxNjU4IDE3LjcwNzEgNy43MDcxMUw5LjQxNDIxIDE2SDE3QzE3LjU1MjMgMTYgMTggMTYuNDQ3NyAxOCAxN0MxOCAxNy41NTIzIDE3LjU1MjMgMTggMTcgMThIN0M2LjQ0NzcyIDE4IDYgMTcuNTUyMyA2IDE3VjdDNiA2LjQ0NzcyIDYuNDQ3NzIgNiA3IDZaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={arrowDownLeftFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ArrowDownLeftFilledIcon';
}

export default RefIcon;
