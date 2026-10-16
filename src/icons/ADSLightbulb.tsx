// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSLightbulbSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10 12.5H6V14C6 14.276 6.224 14.5 6.5 14.5H9.5C9.776 14.5 10 14.276 10 14V12.5ZM8 1.5C4.978 1.5 3.066 4.743 4.528 7.388L5.535 9.21C5.838 9.758 5.998 10.374 6 11H10C10.002 10.374 10.162 9.758 10.465 9.21L11.473 7.388C12.935 4.743 11.022 1.5 8 1.5ZM11.5 14C11.5 15.105 10.605 16 9.5 16H6.5C5.396 16 4.5 15.105 4.5 14V11.012C4.5 10.636 4.405 10.266 4.223 9.937L3.215 8.114C1.2 4.47 3.836 0 8 0C12.165 0 14.801 4.47 12.785 8.114L11.778 9.937C11.596 10.266 11.5 10.636 11.5 11.012V14Z"/>
  </svg>
);

const aDSLightbulbIconDefinition = svgToIconDefinition(
  aDSLightbulbSvg,
  'ads-lightbulb'
);

/**![ADSLightbulb](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xMCAxMi41SDZWMTRDNiAxNC4yNzYgNi4yMjQgMTQuNSA2LjUgMTQuNUg5LjVDOS43NzYgMTQuNSAxMCAxNC4yNzYgMTAgMTRWMTIuNVpNOCAxLjVDNC45NzggMS41IDMuMDY2IDQuNzQzIDQuNTI4IDcuMzg4TDUuNTM1IDkuMjFDNS44MzggOS43NTggNS45OTggMTAuMzc0IDYgMTFIMTBDMTAuMDAyIDEwLjM3NCAxMC4xNjIgOS43NTggMTAuNDY1IDkuMjFMMTEuNDczIDcuMzg4QzEyLjkzNSA0Ljc0MyAxMS4wMjIgMS41IDggMS41Wk0xMS41IDE0QzExLjUgMTUuMTA1IDEwLjYwNSAxNiA5LjUgMTZINi41QzUuMzk2IDE2IDQuNSAxNS4xMDUgNC41IDE0VjExLjAxMkM0LjUgMTAuNjM2IDQuNDA1IDEwLjI2NiA0LjIyMyA5LjkzN0wzLjIxNSA4LjExNEMxLjIgNC40NyAzLjgzNiAwIDggMEMxMi4xNjUgMCAxNC44MDEgNC40NyAxMi43ODUgOC4xMTRMMTEuNzc4IDkuOTM3QzExLjU5NiAxMC4yNjYgMTEuNSAxMC42MzYgMTEuNSAxMS4wMTJWMTRaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSLightbulbIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSLightbulb';
}

export default RefIcon;
