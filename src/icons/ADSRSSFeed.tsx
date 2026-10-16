// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSRSSFeedSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSRSSFeed](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMy43NSAxMC41QzQuNzE3IDEwLjUgNS41IDExLjI4NCA1LjUgMTIuMjVDNS41IDEzLjIxNyA0LjcxNyAxNCAzLjc1IDE0QzIuNzg0IDE0IDIgMTMuMjE3IDIgMTIuMjVDMiAxMS4yODQgMi43ODQgMTAuNSAzLjc1IDEwLjVaIi8+PHBhdGggZD0iTTIgMkM4LjYyNyAyIDE0IDcuMzczIDE0IDE0SDEyLjVDMTIuNSA4LjIwMSA3Ljc5OSAzLjUgMiAzLjVWMloiLz48cGF0aCBkPSJNMiA2QzYuNDE4IDYgMTAgOS41ODIgMTAgMTRIOC41QzguNSAxMC40MSA1LjU5IDcuNSAyIDcuNVY2WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSRSSFeedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSRSSFeed';
}

export default RefIcon;
