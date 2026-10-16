// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSSignpostSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSSignpost](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMyA0LjVDMi43MjQgNC41IDIuNSA0LjcyNCAyLjUgNUwyLjUgOEMyLjUgOC4yNzYgMi43MjQgOC41IDMgOC41SDExLjc5MkMxMS45MSA4LjUgMTIuMDI1IDguNDU4IDEyLjExNSA4LjM4MkwxNC4zMzggNi41TDEyLjExNSA0LjYxOEMxMi4wMjUgNC41NDIgMTEuOTEgNC41IDExLjc5MiA0LjVMMyA0LjVaTTcgM1YwTDguNSAwVjNMMTEuNzkyIDNDMTIuMjY1IDMgMTIuNzIzIDMuMTY4IDEzLjA4NCAzLjQ3NEwxNS40MjEgNS40NUMxNi4wNyA1Ljk5OSAxNi4wNyA3LjAwMSAxNS40MjEgNy41NUwxMy4wODQgOS41MjZDMTIuNzIzIDkuODMyIDEyLjI2NSAxMCAxMS43OTIgMTBIOC41TDguNSAxNkg3TDcgMTBIM0MxLjg5NSAxMCAxIDkuMTA1IDEgOEwxIDVDMSAzLjg5NSAxLjg5NSAzIDMgM0w3IDNaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSSignpostIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSSignpost';
}

export default RefIcon;
