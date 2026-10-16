// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDownloadSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 1V8.439L11.47 5.72L12.53 6.78L8.53 10.78C8.237 11.073 7.762 11.073 7.47 10.78L3.47 6.78L4.53 5.72L7.25 8.439V1H8.75ZM1 13V9H2.5V13C2.5 13.276 2.724 13.5 3 13.5H13C13.276 13.5 13.5 13.276 13.5 13V9H15V13C15 14.105 14.105 15 13 15H3C1.895 15 1 14.105 1 13Z"/>
  </svg>
);

const aDSDownloadIconDefinition = svgToIconDefinition(
  aDSDownloadSvg,
  'ads-download'
);

/**![ADSDownload](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOC43NSAxVjguNDM5TDExLjQ3IDUuNzJMMTIuNTMgNi43OEw4LjUzIDEwLjc4QzguMjM3IDExLjA3MyA3Ljc2MiAxMS4wNzMgNy40NyAxMC43OEwzLjQ3IDYuNzhMNC41MyA1LjcyTDcuMjUgOC40MzlWMUg4Ljc1Wk0xIDEzVjlIMi41VjEzQzIuNSAxMy4yNzYgMi43MjQgMTMuNSAzIDEzLjVIMTNDMTMuMjc2IDEzLjUgMTMuNSAxMy4yNzYgMTMuNSAxM1Y5SDE1VjEzQzE1IDE0LjEwNSAxNC4xMDUgMTUgMTMgMTVIM0MxLjg5NSAxNSAxIDE0LjEwNSAxIDEzWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDownloadIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDownload';
}

export default RefIcon;
