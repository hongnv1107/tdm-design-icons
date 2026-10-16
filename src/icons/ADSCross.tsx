// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSCrossSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.53 3.53L9.061 8L13.53 12.47L12.47 13.53L8 9.061L3.53 13.53L2.47 12.47L6.939 8L2.47 3.53L3.53 2.47L8 6.939L12.47 2.47L13.53 3.53Z"/>
  </svg>
);

const aDSCrossIconDefinition = svgToIconDefinition(
  aDSCrossSvg,
  'ads-cross'
);

/**![ADSCross](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xMy41MyAzLjUzTDkuMDYxIDhMMTMuNTMgMTIuNDdMMTIuNDcgMTMuNTNMOCA5LjA2MUwzLjUzIDEzLjUzTDIuNDcgMTIuNDdMNi45MzkgOEwyLjQ3IDMuNTNMMy41MyAyLjQ3TDggNi45MzlMMTIuNDcgMi40N0wxMy41MyAzLjUzWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSCrossIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSCross';
}

export default RefIcon;
