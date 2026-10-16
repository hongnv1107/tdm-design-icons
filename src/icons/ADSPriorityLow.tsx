// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSPriorityLowSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.913 7.251L8.413 10.876C8.163 11.041 7.837 11.041 7.587 10.876L2.087 7.251L2.913 5.999L8 9.352L13.087 5.999L13.913 7.251Z"/>
  </svg>
);

const aDSPriorityLowIconDefinition = svgToIconDefinition(
  aDSPriorityLowSvg,
  'ads-priority-low'
);

/**![ADSPriorityLow](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xMy45MTMgNy4yNTFMOC40MTMgMTAuODc2QzguMTYzIDExLjA0MSA3LjgzNyAxMS4wNDEgNy41ODcgMTAuODc2TDIuMDg3IDcuMjUxTDIuOTEzIDUuOTk5TDggOS4zNTJMMTMuMDg3IDUuOTk5TDEzLjkxMyA3LjI1MVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSPriorityLowIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSPriorityLow';
}

export default RefIcon;
