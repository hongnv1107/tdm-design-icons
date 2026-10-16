// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSListChecklistSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5.591 9.969L2.591 13.719C2.44 13.907 2.208 14.011 1.967 13.999C1.756 13.988 1.562 13.89 1.429 13.73L1.375 13.657L0 11.532L1.26 10.718L2.068 11.968L4.419 9.031L5.591 9.969ZM5.591 2.469L2.591 6.219C2.44 6.407 2.208 6.511 1.967 6.499C1.756 6.488 1.562 6.389 1.429 6.229L1.375 6.157L0 4.032L1.26 3.218L2.068 4.468L4.419 1.531L5.591 2.469Z"/><path d="M16.005 11V12.5L7.005 12.5V11L16.005 11ZM16.005 3.5V5L7.005 5V3.5L16.005 3.5Z"/>
  </svg>
);

const aDSListChecklistIconDefinition = svgToIconDefinition(
  aDSListChecklistSvg,
  'ads-list-checklist'
);

/**![ADSListChecklist](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik01LjU5MSA5Ljk2OUwyLjU5MSAxMy43MTlDMi40NCAxMy45MDcgMi4yMDggMTQuMDExIDEuOTY3IDEzLjk5OUMxLjc1NiAxMy45ODggMS41NjIgMTMuODkgMS40MjkgMTMuNzNMMS4zNzUgMTMuNjU3TDAgMTEuNTMyTDEuMjYgMTAuNzE4TDIuMDY4IDExLjk2OEw0LjQxOSA5LjAzMUw1LjU5MSA5Ljk2OVpNNS41OTEgMi40NjlMMi41OTEgNi4yMTlDMi40NCA2LjQwNyAyLjIwOCA2LjUxMSAxLjk2NyA2LjQ5OUMxLjc1NiA2LjQ4OCAxLjU2MiA2LjM4OSAxLjQyOSA2LjIyOUwxLjM3NSA2LjE1N0wwIDQuMDMyTDEuMjYgMy4yMThMMi4wNjggNC40NjhMNC40MTkgMS41MzFMNS41OTEgMi40NjlaIi8+PHBhdGggZD0iTTE2LjAwNSAxMVYxMi41TDcuMDA1IDEyLjVWMTFMMTYuMDA1IDExWk0xNi4wMDUgMy41VjVMNy4wMDUgNVYzLjVMMTYuMDA1IDMuNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSListChecklistIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSListChecklist';
}

export default RefIcon;
