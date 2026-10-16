// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSChangesSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.78 4.22L11.53 0.97L10.47 2.03L12.439 4H2V5.5H12.439L10.47 7.47L11.53 8.53L14.78 5.28C15.073 4.987 15.073 4.513 14.78 4.22ZM3.561 10.5L5.53 8.53L4.47 7.47L1.22 10.72C0.927 11.013 0.927 11.488 1.22 11.78L4.47 15.03L5.53 13.97L3.561 12H14V10.5H3.561Z"/>
  </svg>
);

const aDSChangesIconDefinition = svgToIconDefinition(
  aDSChangesSvg,
  'ads-changes'
);

/**![ADSChanges](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTQuNzggNC4yMkwxMS41MyAwLjk3TDEwLjQ3IDIuMDNMMTIuNDM5IDRIMlY1LjVIMTIuNDM5TDEwLjQ3IDcuNDdMMTEuNTMgOC41M0wxNC43OCA1LjI4QzE1LjA3MyA0Ljk4NyAxNS4wNzMgNC41MTMgMTQuNzggNC4yMlpNMy41NjEgMTAuNUw1LjUzIDguNTNMNC40NyA3LjQ3TDEuMjIgMTAuNzJDMC45MjcgMTEuMDEzIDAuOTI3IDExLjQ4OCAxLjIyIDExLjc4TDQuNDcgMTUuMDNMNS41MyAxMy45N0wzLjU2MSAxMkgxNFYxMC41SDMuNTYxWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSChangesIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSChanges';
}

export default RefIcon;
