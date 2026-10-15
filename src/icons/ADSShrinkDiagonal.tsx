// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSShrinkDiagonalSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.72 6.22L13.97 0.97L15.03 2.03L9.78 7.28L8.72 6.22ZM7.28 9.78L2.03 15.03L0.97 13.97L6.22 8.72L7.28 9.78Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10 6V2H8.5V6.75C8.5 7.164 8.836 7.5 9.25 7.5H14V6H10ZM2 8.5H6.75C7.164 8.5 7.5 8.836 7.5 9.25V14H6V10H2V8.5Z"/>
  </svg>
);

const aDSShrinkDiagonalIconDefinition = svgToIconDefinition(
  aDSShrinkDiagonalSvg,
  'ads-shrink-diagonal'
);

/**![ADSShrinkDiagonal](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTguNzIgNi4yMkwxMy45NyAwLjk3TDE1LjAzIDIuMDNMOS43OCA3LjI4TDguNzIgNi4yMlpNNy4yOCA5Ljc4TDIuMDMgMTUuMDNMMC45NyAxMy45N0w2LjIyIDguNzJMNy4yOCA5Ljc4WiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTAgNlYySDguNVY2Ljc1QzguNSA3LjE2NCA4LjgzNiA3LjUgOS4yNSA3LjVIMTRWNkgxMFpNMiA4LjVINi43NUM3LjE2NCA4LjUgNy41IDguODM2IDcuNSA5LjI1VjE0SDZWMTBIMlY4LjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSShrinkDiagonalIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSShrinkDiagonal';
}

export default RefIcon;
