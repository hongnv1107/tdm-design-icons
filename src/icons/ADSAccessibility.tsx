// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSAccessibilitySvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 2.5C7.586 2.5 7.25 2.836 7.25 3.25C7.25 3.664 7.586 4 8 4C8.414 4 8.75 3.664 8.75 3.25C8.75 2.836 8.414 2.5 8 2.5ZM5.75 3.25C5.75 2.007 6.757 1 8 1C9.243 1 10.25 2.007 10.25 3.25C10.25 4.493 9.243 5.5 8 5.5C6.757 5.5 5.75 4.493 5.75 3.25Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6.768 8H2V6.5H14V8H9.232L12.416 14.155L11.084 14.845L8 8.882L4.916 14.845L3.584 14.155L6.768 8Z"/>
  </svg>
);

const aDSAccessibilityIconDefinition = svgToIconDefinition(
  aDSAccessibilitySvg,
  'ads-accessibility'
);

/**![ADSAccessibility](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTggMi41QzcuNTg2IDIuNSA3LjI1IDIuODM2IDcuMjUgMy4yNUM3LjI1IDMuNjY0IDcuNTg2IDQgOCA0QzguNDE0IDQgOC43NSAzLjY2NCA4Ljc1IDMuMjVDOC43NSAyLjgzNiA4LjQxNCAyLjUgOCAyLjVaTTUuNzUgMy4yNUM1Ljc1IDIuMDA3IDYuNzU3IDEgOCAxQzkuMjQzIDEgMTAuMjUgMi4wMDcgMTAuMjUgMy4yNUMxMC4yNSA0LjQ5MyA5LjI0MyA1LjUgOCA1LjVDNi43NTcgNS41IDUuNzUgNC40OTMgNS43NSAzLjI1WiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNi43NjggOEgyVjYuNUgxNFY4SDkuMjMyTDEyLjQxNiAxNC4xNTVMMTEuMDg0IDE0Ljg0NUw4IDguODgyTDQuOTE2IDE0Ljg0NUwzLjU4NCAxNC4xNTVMNi43NjggOFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSAccessibilityIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSAccessibility';
}

export default RefIcon;
