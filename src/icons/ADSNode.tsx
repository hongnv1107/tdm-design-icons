// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSNodeSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10 8C10 9.105 9.105 10 8 10C6.895 10 6 9.105 6 8C6 6.895 6.895 6 8 6C9.105 6 10 6.895 10 8Z"/>
  </svg>
);

const aDSNodeIconDefinition = svgToIconDefinition(
  aDSNodeSvg,
  'ads-node'
);

/**![ADSNode](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xMCA4QzEwIDkuMTA1IDkuMTA1IDEwIDggMTBDNi44OTUgMTAgNiA5LjEwNSA2IDhDNiA2Ljg5NSA2Ljg5NSA2IDggNkM5LjEwNSA2IDEwIDYuODk1IDEwIDhaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSNodeIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSNode';
}

export default RefIcon;
