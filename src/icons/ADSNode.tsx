// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSNodeSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSNode](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTAgOEMxMCA5LjEwNSA5LjEwNSAxMCA4IDEwQzYuODk1IDEwIDYgOS4xMDUgNiA4QzYgNi44OTUgNi44OTUgNiA4IDZDOS4xMDUgNiAxMCA2Ljg5NSAxMCA4WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSNodeIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSNode';
}

export default RefIcon;
