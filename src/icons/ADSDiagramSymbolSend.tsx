// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolSendSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14 2C15.105 2 16 2.895 16 4V12C16 13.105 15.105 14 14 14H2C0.895 14 0 13.105 0 12V4C0 2.895 0.895 2 2 2H14ZM8 8.131L1.5 4.531V6.246L7.637 9.645C7.863 9.77 8.137 9.77 8.363 9.645L14.5 6.246V4.531L8 8.131Z"/>
  </svg>
);

const aDSDiagramSymbolSendIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolSendSvg,
  'ads-diagram-symbol-send'
);

/**![ADSDiagramSymbolSend](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTQgMkMxNS4xMDUgMiAxNiAyLjg5NSAxNiA0VjEyQzE2IDEzLjEwNSAxNS4xMDUgMTQgMTQgMTRIMkMwLjg5NSAxNCAwIDEzLjEwNSAwIDEyVjRDMCAyLjg5NSAwLjg5NSAyIDIgMkgxNFpNOCA4LjEzMUwxLjUgNC41MzFWNi4yNDZMNy42MzcgOS42NDVDNy44NjMgOS43NyA4LjEzNyA5Ljc3IDguMzYzIDkuNjQ1TDE0LjUgNi4yNDZWNC41MzFMOCA4LjEzMVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolSendIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolSend';
}

export default RefIcon;
