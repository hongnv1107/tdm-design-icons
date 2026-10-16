// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSSignpostSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3 4.5C2.724 4.5 2.5 4.724 2.5 5L2.5 8C2.5 8.276 2.724 8.5 3 8.5H11.792C11.91 8.5 12.025 8.458 12.115 8.382L14.338 6.5L12.115 4.618C12.025 4.542 11.91 4.5 11.792 4.5L3 4.5ZM7 3V0L8.5 0V3L11.792 3C12.265 3 12.723 3.168 13.084 3.474L15.421 5.45C16.07 5.999 16.07 7.001 15.421 7.55L13.084 9.526C12.723 9.832 12.265 10 11.792 10H8.5L8.5 16H7L7 10H3C1.895 10 1 9.105 1 8L1 5C1 3.895 1.895 3 3 3L7 3Z"/>
  </svg>
);

const aDSSignpostIconDefinition = svgToIconDefinition(
  aDSSignpostSvg,
  'ads-signpost'
);

/**![ADSSignpost](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0zIDQuNUMyLjcyNCA0LjUgMi41IDQuNzI0IDIuNSA1TDIuNSA4QzIuNSA4LjI3NiAyLjcyNCA4LjUgMyA4LjVIMTEuNzkyQzExLjkxIDguNSAxMi4wMjUgOC40NTggMTIuMTE1IDguMzgyTDE0LjMzOCA2LjVMMTIuMTE1IDQuNjE4QzEyLjAyNSA0LjU0MiAxMS45MSA0LjUgMTEuNzkyIDQuNUwzIDQuNVpNNyAzVjBMOC41IDBWM0wxMS43OTIgM0MxMi4yNjUgMyAxMi43MjMgMy4xNjggMTMuMDg0IDMuNDc0TDE1LjQyMSA1LjQ1QzE2LjA3IDUuOTk5IDE2LjA3IDcuMDAxIDE1LjQyMSA3LjU1TDEzLjA4NCA5LjUyNkMxMi43MjMgOS44MzIgMTIuMjY1IDEwIDExLjc5MiAxMEg4LjVMOC41IDE2SDdMNyAxMEgzQzEuODk1IDEwIDEgOS4xMDUgMSA4TDEgNUMxIDMuODk1IDEuODk1IDMgMyAzTDcgM1oiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSSignpostIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSSignpost';
}

export default RefIcon;
