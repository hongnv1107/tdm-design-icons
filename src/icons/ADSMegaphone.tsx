// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSMegaphoneSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.5 3.096C13.5 2.742 13.143 2.5 12.815 2.631L7.5 4.756V9.492L12.815 11.618C13.143 11.749 13.5 11.506 13.5 11.153V3.096ZM5 13C5 13.276 5.224 13.5 5.5 13.5H6V10.75H5V13ZM2.5 8.749C2.5 9.026 2.724 9.249 3 9.249H6V4.999H3C2.724 4.999 2.5 5.223 2.5 5.499V8.749ZM15 11.153C15 12.568 13.571 13.536 12.257 13.01L7.5 11.107V14.25C7.5 14.664 7.164 15 6.75 15H5.5C4.395 15 3.5 14.104 3.5 13V10.75H3C1.895 10.75 1 9.854 1 8.749V5.499C1 4.395 1.895 3.499 3 3.499H6.605L12.257 1.239C13.571 0.713 15 1.681 15 3.096V11.153Z"/>
  </svg>
);

const aDSMegaphoneIconDefinition = svgToIconDefinition(
  aDSMegaphoneSvg,
  'ads-megaphone'
);

/**![ADSMegaphone](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xMy41IDMuMDk2QzEzLjUgMi43NDIgMTMuMTQzIDIuNSAxMi44MTUgMi42MzFMNy41IDQuNzU2VjkuNDkyTDEyLjgxNSAxMS42MThDMTMuMTQzIDExLjc0OSAxMy41IDExLjUwNiAxMy41IDExLjE1M1YzLjA5NlpNNSAxM0M1IDEzLjI3NiA1LjIyNCAxMy41IDUuNSAxMy41SDZWMTAuNzVINVYxM1pNMi41IDguNzQ5QzIuNSA5LjAyNiAyLjcyNCA5LjI0OSAzIDkuMjQ5SDZWNC45OTlIM0MyLjcyNCA0Ljk5OSAyLjUgNS4yMjMgMi41IDUuNDk5VjguNzQ5Wk0xNSAxMS4xNTNDMTUgMTIuNTY4IDEzLjU3MSAxMy41MzYgMTIuMjU3IDEzLjAxTDcuNSAxMS4xMDdWMTQuMjVDNy41IDE0LjY2NCA3LjE2NCAxNSA2Ljc1IDE1SDUuNUM0LjM5NSAxNSAzLjUgMTQuMTA0IDMuNSAxM1YxMC43NUgzQzEuODk1IDEwLjc1IDEgOS44NTQgMSA4Ljc0OVY1LjQ5OUMxIDQuMzk1IDEuODk1IDMuNDk5IDMgMy40OTlINi42MDVMMTIuMjU3IDEuMjM5QzEzLjU3MSAwLjcxMyAxNSAxLjY4MSAxNSAzLjA5NlYxMS4xNTNaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSMegaphoneIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSMegaphone';
}

export default RefIcon;
