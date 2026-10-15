// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSNodeSingleLeftSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSNodeSingleLeft](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMuMjUgNy4yNUMyLjgzNiA3LjI1IDIuNSA3LjU4NiAyLjUgOEMyLjUgOC40MTQgMi44MzYgOC43NSAzLjI1IDguNzVDMy42NjQgOC43NSA0IDguNDE0IDQgOEM0IDcuNTg2IDMuNjY0IDcuMjUgMy4yNSA3LjI1Wk0xIDhDMSA2Ljc1NyAyLjAwNyA1Ljc1IDMuMjUgNS43NUM0LjQ5MyA1Ljc1IDUuNSA2Ljc1NyA1LjUgOEM1LjUgOS4yNDMgNC40OTMgMTAuMjUgMy4yNSAxMC4yNUMyLjAwNyAxMC4yNSAxIDkuMjQzIDEgOFoiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQgNy4yNUwxNCA3LjI1VjguNzVMNCA4Ljc1TDQgNy4yNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSNodeSingleLeftIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSNodeSingleLeft';
}

export default RefIcon;
