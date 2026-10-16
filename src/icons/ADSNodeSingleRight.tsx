// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSNodeSingleRightSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.75 7.25C12.336 7.25 12 7.586 12 8C12 8.414 12.336 8.75 12.75 8.75C13.164 8.75 13.5 8.414 13.5 8C13.5 7.586 13.164 7.25 12.75 7.25ZM10.5 8C10.5 6.757 11.507 5.75 12.75 5.75C13.993 5.75 15 6.757 15 8C15 9.243 13.993 10.25 12.75 10.25C11.507 10.25 10.5 9.243 10.5 8Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2 7.25L12 7.25V8.75L2 8.75L2 7.25Z"/>
  </svg>
);

const aDSNodeSingleRightIconDefinition = svgToIconDefinition(
  aDSNodeSingleRightSvg,
  'ads-node-single-right'
);

/**![ADSNodeSingleRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTIuNzUgNy4yNUMxMi4zMzYgNy4yNSAxMiA3LjU4NiAxMiA4QzEyIDguNDE0IDEyLjMzNiA4Ljc1IDEyLjc1IDguNzVDMTMuMTY0IDguNzUgMTMuNSA4LjQxNCAxMy41IDhDMTMuNSA3LjU4NiAxMy4xNjQgNy4yNSAxMi43NSA3LjI1Wk0xMC41IDhDMTAuNSA2Ljc1NyAxMS41MDcgNS43NSAxMi43NSA1Ljc1QzEzLjk5MyA1Ljc1IDE1IDYuNzU3IDE1IDhDMTUgOS4yNDMgMTMuOTkzIDEwLjI1IDEyLjc1IDEwLjI1QzExLjUwNyAxMC4yNSAxMC41IDkuMjQzIDEwLjUgOFoiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIgNy4yNUwxMiA3LjI1VjguNzVMMiA4Ljc1TDIgNy4yNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSNodeSingleRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSNodeSingleRight';
}

export default RefIcon;
