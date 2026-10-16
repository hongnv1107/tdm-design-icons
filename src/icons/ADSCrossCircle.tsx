// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSCrossCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.582 0 0 3.582 0 8C0 12.418 3.582 16 8 16C12.418 16 16 12.418 16 8C16 3.582 12.418 0 8 0ZM12.03 5.03L9.061 8L12.03 10.97L10.97 12.03L8 9.061L5.03 12.03L3.97 10.97L6.939 8L3.97 5.03L5.03 3.97L8 6.939L10.97 3.97L12.03 5.03Z"/>
  </svg>
);

const aDSCrossCircleIconDefinition = svgToIconDefinition(
  aDSCrossCircleSvg,
  'ads-cross-circle'
);

/**![ADSCrossCircle](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOCAwQzMuNTgyIDAgMCAzLjU4MiAwIDhDMCAxMi40MTggMy41ODIgMTYgOCAxNkMxMi40MTggMTYgMTYgMTIuNDE4IDE2IDhDMTYgMy41ODIgMTIuNDE4IDAgOCAwWk0xMi4wMyA1LjAzTDkuMDYxIDhMMTIuMDMgMTAuOTdMMTAuOTcgMTIuMDNMOCA5LjA2MUw1LjAzIDEyLjAzTDMuOTcgMTAuOTdMNi45MzkgOEwzLjk3IDUuMDNMNS4wMyAzLjk3TDggNi45MzlMMTAuOTcgMy45N0wxMi4wMyA1LjAzWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSCrossCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSCrossCircle';
}

export default RefIcon;
