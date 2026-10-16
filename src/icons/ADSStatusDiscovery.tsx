// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSStatusDiscoverySvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSStatusDiscovery](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTAuNSAxNS4wNjFWMTEuMjVDMTAuNSAxMC44MzYgMTAuODM2IDEwLjUgMTEuMjUgMTAuNUgxNS4wNjFMMTAuNSAxNS4wNjFaIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMyAxQzE0LjEwNSAxIDE1IDEuODk1IDE1IDNWOUgxMC4yNUM5LjU2IDkgOSA5LjU2IDkgMTAuMjVWMTVIM0MxLjg5NSAxNSAxIDE0LjEwNSAxIDEzVjNDMSAxLjg5NSAxLjg5NSAxIDMgMUgxM1pNNCA5SDdWNy41SDRWOVpNNCA0VjUuNUgxMVY0SDRaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSStatusDiscoveryIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSStatusDiscovery';
}

export default RefIcon;
