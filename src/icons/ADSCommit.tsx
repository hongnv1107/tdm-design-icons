// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSCommitSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 5.354C6.096 5.68 5.25 6.741 5.25 8C5.25 9.259 6.096 10.32 7.25 10.647V16H8.75V10.647C9.904 10.32 10.75 9.259 10.75 8C10.75 6.741 9.904 5.68 8.75 5.354V0H7.25V5.354ZM8 6.75C7.31 6.75 6.75 7.31 6.75 8C6.75 8.69 7.31 9.25 8 9.25C8.69 9.25 9.25 8.69 9.25 8C9.25 7.31 8.69 6.75 8 6.75Z"/>
  </svg>
);

const aDSCommitIconDefinition = svgToIconDefinition(
  aDSCommitSvg,
  'ads-commit'
);

/**![ADSCommit](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTcuMjUgNS4zNTRDNi4wOTYgNS42OCA1LjI1IDYuNzQxIDUuMjUgOEM1LjI1IDkuMjU5IDYuMDk2IDEwLjMyIDcuMjUgMTAuNjQ3VjE2SDguNzVWMTAuNjQ3QzkuOTA0IDEwLjMyIDEwLjc1IDkuMjU5IDEwLjc1IDhDMTAuNzUgNi43NDEgOS45MDQgNS42OCA4Ljc1IDUuMzU0VjBINy4yNVY1LjM1NFpNOCA2Ljc1QzcuMzEgNi43NSA2Ljc1IDcuMzEgNi43NSA4QzYuNzUgOC42OSA3LjMxIDkuMjUgOCA5LjI1QzguNjkgOS4yNSA5LjI1IDguNjkgOS4yNSA4QzkuMjUgNy4zMSA4LjY5IDYuNzUgOCA2Ljc1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSCommitIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSCommit';
}

export default RefIcon;
