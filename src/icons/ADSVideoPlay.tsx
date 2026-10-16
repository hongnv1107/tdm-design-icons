// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSVideoPlaySvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSVideoPlay](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIgMy4xMTJDMiAxLjU5MiAzLjYzIDAuNjI3IDQuOTYzIDEuMzU5TDEzLjg2NSA2LjI0N0MxNS4yNDkgNy4wMDYgMTUuMjQ5IDguOTk0IDEzLjg2NSA5Ljc1M0w0Ljk2MyAxNC42NDFDMy42MyAxNS4zNzMgMiAxNC40MDggMiAxMi44ODhWMy4xMTJaTTQuMjQxIDIuNjc0QzMuOTA3IDIuNDkxIDMuNSAyLjczMiAzLjUgMy4xMTJWMTIuODg4QzMuNSAxMy4yNjggMy45MDcgMTMuNTA5IDQuMjQxIDEzLjMyNkwxMy4xNDMgOC40MzhDMTMuNDg5IDguMjQ4IDEzLjQ4OSA3Ljc1MiAxMy4xNDMgNy41NjJMNC4yNDEgMi42NzRaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSVideoPlayIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSVideoPlay';
}

export default RefIcon;
