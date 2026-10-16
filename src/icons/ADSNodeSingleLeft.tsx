// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSNodeSingleLeftSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.25 7.25C2.836 7.25 2.5 7.586 2.5 8C2.5 8.414 2.836 8.75 3.25 8.75C3.664 8.75 4 8.414 4 8C4 7.586 3.664 7.25 3.25 7.25ZM1 8C1 6.757 2.007 5.75 3.25 5.75C4.493 5.75 5.5 6.757 5.5 8C5.5 9.243 4.493 10.25 3.25 10.25C2.007 10.25 1 9.243 1 8Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4 7.25L14 7.25V8.75L4 8.75L4 7.25Z"/>
  </svg>
);

const aDSNodeSingleLeftIconDefinition = svgToIconDefinition(
  aDSNodeSingleLeftSvg,
  'ads-node-single-left'
);

/**![ADSNodeSingleLeft](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMy4yNSA3LjI1QzIuODM2IDcuMjUgMi41IDcuNTg2IDIuNSA4QzIuNSA4LjQxNCAyLjgzNiA4Ljc1IDMuMjUgOC43NUMzLjY2NCA4Ljc1IDQgOC40MTQgNCA4QzQgNy41ODYgMy42NjQgNy4yNSAzLjI1IDcuMjVaTTEgOEMxIDYuNzU3IDIuMDA3IDUuNzUgMy4yNSA1Ljc1QzQuNDkzIDUuNzUgNS41IDYuNzU3IDUuNSA4QzUuNSA5LjI0MyA0LjQ5MyAxMC4yNSAzLjI1IDEwLjI1QzIuMDA3IDEwLjI1IDEgOS4yNDMgMSA4WiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNCA3LjI1TDE0IDcuMjVWOC43NUw0IDguNzVMNCA3LjI1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSNodeSingleLeftIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSNodeSingleLeft';
}

export default RefIcon;
