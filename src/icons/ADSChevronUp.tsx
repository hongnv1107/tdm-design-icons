// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSChevronUpSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.53 9.97L8.53 3.97C8.256 3.695 7.821 3.678 7.526 3.918L7.47 3.97L1.47 9.97L2.53 11.03L8 5.561L13.47 11.03L14.53 9.97Z"/>
  </svg>
);

const aDSChevronUpIconDefinition = svgToIconDefinition(
  aDSChevronUpSvg,
  'ads-chevron-up'
);

/**![ADSChevronUp](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xNC41MyA5Ljk3TDguNTMgMy45N0M4LjI1NiAzLjY5NSA3LjgyMSAzLjY3OCA3LjUyNiAzLjkxOEw3LjQ3IDMuOTdMMS40NyA5Ljk3TDIuNTMgMTEuMDNMOCA1LjU2MUwxMy40NyAxMS4wM0wxNC41MyA5Ljk3WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSChevronUpIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSChevronUp';
}

export default RefIcon;
