// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSCrossOctagonSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.103 1L10.897 1L15 5.103V10.897L10.897 15H5.103L1 10.897L1 5.103L5.103 1ZM5.724 2.5L4.643 3.582L8 6.939L11.357 3.582L10.276 2.5L5.724 2.5ZM12.418 4.643L9.061 8L12.418 11.357L13.5 10.276V5.724L12.418 4.643ZM11.357 12.418L8 9.061L4.643 12.418L5.724 13.5H10.276L11.357 12.418ZM3.582 11.357L6.939 8L3.582 4.643L2.5 5.724L2.5 10.276L3.582 11.357Z"/>
  </svg>
);

const aDSCrossOctagonIconDefinition = svgToIconDefinition(
  aDSCrossOctagonSvg,
  'ads-cross-octagon'
);

/**![ADSCrossOctagon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUuMTAzIDFMMTAuODk3IDFMMTUgNS4xMDNWMTAuODk3TDEwLjg5NyAxNUg1LjEwM0wxIDEwLjg5N0wxIDUuMTAzTDUuMTAzIDFaTTUuNzI0IDIuNUw0LjY0MyAzLjU4Mkw4IDYuOTM5TDExLjM1NyAzLjU4MkwxMC4yNzYgMi41TDUuNzI0IDIuNVpNMTIuNDE4IDQuNjQzTDkuMDYxIDhMMTIuNDE4IDExLjM1N0wxMy41IDEwLjI3NlY1LjcyNEwxMi40MTggNC42NDNaTTExLjM1NyAxMi40MThMOCA5LjA2MUw0LjY0MyAxMi40MThMNS43MjQgMTMuNUgxMC4yNzZMMTEuMzU3IDEyLjQxOFpNMy41ODIgMTEuMzU3TDYuOTM5IDhMMy41ODIgNC42NDNMMi41IDUuNzI0TDIuNSAxMC4yNzZMMy41ODIgMTEuMzU3WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSCrossOctagonIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSCrossOctagon';
}

export default RefIcon;
