// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSExpandElementSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 3C1 1.895 1.895 1 3 1H15V2.5H3C2.724 2.5 2.5 2.724 2.5 3V15H1V3Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.482 8.417L4.607 5.667L5.643 4.583L8 6.837L10.357 4.583L11.393 5.667L8.518 8.417C8.228 8.694 7.772 8.694 7.482 8.417Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15 12H4.5V10.5H15V12ZM15 15H4.5V13.5H15V15Z"/>
  </svg>
);

const aDSExpandElementIconDefinition = svgToIconDefinition(
  aDSExpandElementSvg,
  'ads-expand-element'
);

/**![ADSExpandElement](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEgM0MxIDEuODk1IDEuODk1IDEgMyAxSDE1VjIuNUgzQzIuNzI0IDIuNSAyLjUgMi43MjQgMi41IDNWMTVIMVYzWiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNy40ODIgOC40MTdMNC42MDcgNS42NjdMNS42NDMgNC41ODNMOCA2LjgzN0wxMC4zNTcgNC41ODNMMTEuMzkzIDUuNjY3TDguNTE4IDguNDE3QzguMjI4IDguNjk0IDcuNzcyIDguNjk0IDcuNDgyIDguNDE3WiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTUgMTJINC41VjEwLjVIMTVWMTJaTTE1IDE1SDQuNVYxMy41SDE1VjE1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSExpandElementIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSExpandElement';
}

export default RefIcon;
