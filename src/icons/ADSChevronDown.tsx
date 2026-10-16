// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSChevronDownSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.53 6.03L8.53 12.03C8.256 12.305 7.821 12.322 7.526 12.082L7.47 12.03L1.47 6.03L2.53 4.97L8 10.44L13.47 4.97L14.53 6.03Z"/>
  </svg>
);

const aDSChevronDownIconDefinition = svgToIconDefinition(
  aDSChevronDownSvg,
  'ads-chevron-down'
);

/**![ADSChevronDown](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xNC41MyA2LjAzTDguNTMgMTIuMDNDOC4yNTYgMTIuMzA1IDcuODIxIDEyLjMyMiA3LjUyNiAxMi4wODJMNy40NyAxMi4wM0wxLjQ3IDYuMDNMMi41MyA0Ljk3TDggMTAuNDRMMTMuNDcgNC45N0wxNC41MyA2LjAzWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSChevronDownIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSChevronDown';
}

export default RefIcon;
