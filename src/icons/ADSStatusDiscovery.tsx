// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSStatusDiscoverySvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10.5 15.061V11.25C10.5 10.836 10.836 10.5 11.25 10.5H15.061L10.5 15.061Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13 1C14.105 1 15 1.895 15 3V9H10.25C9.56 9 9 9.56 9 10.25V15H3C1.895 15 1 14.105 1 13V3C1 1.895 1.895 1 3 1H13ZM4 9H7V7.5H4V9ZM4 4V5.5H11V4H4Z"/>
  </svg>
);

const aDSStatusDiscoveryIconDefinition = svgToIconDefinition(
  aDSStatusDiscoverySvg,
  'ads-status-discovery'
);

/**![ADSStatusDiscovery](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xMC41IDE1LjA2MVYxMS4yNUMxMC41IDEwLjgzNiAxMC44MzYgMTAuNSAxMS4yNSAxMC41SDE1LjA2MUwxMC41IDE1LjA2MVoiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEzIDFDMTQuMTA1IDEgMTUgMS44OTUgMTUgM1Y5SDEwLjI1QzkuNTYgOSA5IDkuNTYgOSAxMC4yNVYxNUgzQzEuODk1IDE1IDEgMTQuMTA1IDEgMTNWM0MxIDEuODk1IDEuODk1IDEgMyAxSDEzWk00IDlIN1Y3LjVINFY5Wk00IDRWNS41SDExVjRINFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSStatusDiscoveryIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSStatusDiscovery';
}

export default RefIcon;
