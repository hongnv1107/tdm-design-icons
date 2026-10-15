// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSPanelRightSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.5 3C14.5 2.724 14.276 2.5 14 2.5H9.5V13.5H14C14.276 13.5 14.5 13.276 14.5 13V3ZM13 10V11.5H11V10H13ZM13 7V8.5H11V7H13ZM13 4V5.5H11V4H13ZM1.5 13C1.5 13.276 1.724 13.5 2 13.5H8V2.5H2C1.724 2.5 1.5 2.724 1.5 3V13ZM16 13C16 14.105 15.105 15 14 15H2C0.895 15 0 14.105 0 13V3C0 1.895 0.895 1 2 1H14C15.105 1 16 1.895 16 3V13Z"/>
  </svg>
);

const aDSPanelRightIconDefinition = svgToIconDefinition(
  aDSPanelRightSvg,
  'ads-panel-right'
);

/**![ADSPanelRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTQuNSAzQzE0LjUgMi43MjQgMTQuMjc2IDIuNSAxNCAyLjVIOS41VjEzLjVIMTRDMTQuMjc2IDEzLjUgMTQuNSAxMy4yNzYgMTQuNSAxM1YzWk0xMyAxMFYxMS41SDExVjEwSDEzWk0xMyA3VjguNUgxMVY3SDEzWk0xMyA0VjUuNUgxMVY0SDEzWk0xLjUgMTNDMS41IDEzLjI3NiAxLjcyNCAxMy41IDIgMTMuNUg4VjIuNUgyQzEuNzI0IDIuNSAxLjUgMi43MjQgMS41IDNWMTNaTTE2IDEzQzE2IDE0LjEwNSAxNS4xMDUgMTUgMTQgMTVIMkMwLjg5NSAxNSAwIDE0LjEwNSAwIDEzVjNDMCAxLjg5NSAwLjg5NSAxIDIgMUgxNEMxNS4xMDUgMSAxNiAxLjg5NSAxNiAzVjEzWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSPanelRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSPanelRight';
}

export default RefIcon;
