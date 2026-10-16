// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSRSSFeedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3.75 10.5C4.717 10.5 5.5 11.284 5.5 12.25C5.5 13.217 4.717 14 3.75 14C2.784 14 2 13.217 2 12.25C2 11.284 2.784 10.5 3.75 10.5Z"/><path d="M2 2C8.627 2 14 7.373 14 14H12.5C12.5 8.201 7.799 3.5 2 3.5V2Z"/><path d="M2 6C6.418 6 10 9.582 10 14H8.5C8.5 10.41 5.59 7.5 2 7.5V6Z"/>
  </svg>
);

const aDSRSSFeedIconDefinition = svgToIconDefinition(
  aDSRSSFeedSvg,
  'ads-rss-feed'
);

/**![ADSRSSFeed](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0zLjc1IDEwLjVDNC43MTcgMTAuNSA1LjUgMTEuMjg0IDUuNSAxMi4yNUM1LjUgMTMuMjE3IDQuNzE3IDE0IDMuNzUgMTRDMi43ODQgMTQgMiAxMy4yMTcgMiAxMi4yNUMyIDExLjI4NCAyLjc4NCAxMC41IDMuNzUgMTAuNVoiLz48cGF0aCBkPSJNMiAyQzguNjI3IDIgMTQgNy4zNzMgMTQgMTRIMTIuNUMxMi41IDguMjAxIDcuNzk5IDMuNSAyIDMuNVYyWiIvPjxwYXRoIGQ9Ik0yIDZDNi40MTggNiAxMCA5LjU4MiAxMCAxNEg4LjVDOC41IDEwLjQxIDUuNTkgNy41IDIgNy41VjZaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSRSSFeedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSRSSFeed';
}

export default RefIcon;
