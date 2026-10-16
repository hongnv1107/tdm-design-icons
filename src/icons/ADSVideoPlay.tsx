// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSVideoPlaySvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 3.112C2 1.592 3.63 0.627 4.963 1.359L13.865 6.247C15.249 7.006 15.249 8.994 13.865 9.753L4.963 14.641C3.63 15.373 2 14.408 2 12.888V3.112ZM4.241 2.674C3.907 2.491 3.5 2.732 3.5 3.112V12.888C3.5 13.268 3.907 13.509 4.241 13.326L13.143 8.438C13.489 8.248 13.489 7.752 13.143 7.562L4.241 2.674Z"/>
  </svg>
);

const aDSVideoPlayIconDefinition = svgToIconDefinition(
  aDSVideoPlaySvg,
  'ads-video-play'
);

/**![ADSVideoPlay](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMiAzLjExMkMyIDEuNTkyIDMuNjMgMC42MjcgNC45NjMgMS4zNTlMMTMuODY1IDYuMjQ3QzE1LjI0OSA3LjAwNiAxNS4yNDkgOC45OTQgMTMuODY1IDkuNzUzTDQuOTYzIDE0LjY0MUMzLjYzIDE1LjM3MyAyIDE0LjQwOCAyIDEyLjg4OFYzLjExMlpNNC4yNDEgMi42NzRDMy45MDcgMi40OTEgMy41IDIuNzMyIDMuNSAzLjExMlYxMi44ODhDMy41IDEzLjI2OCAzLjkwNyAxMy41MDkgNC4yNDEgMTMuMzI2TDEzLjE0MyA4LjQzOEMxMy40ODkgOC4yNDggMTMuNDg5IDcuNzUyIDEzLjE0MyA3LjU2Mkw0LjI0MSAyLjY3NFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSVideoPlayIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSVideoPlay';
}

export default RefIcon;
