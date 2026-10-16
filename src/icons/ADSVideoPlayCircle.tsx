// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSVideoPlayCircleSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 1.5C4.41 1.5 1.5 4.41 1.5 8C1.5 11.59 4.41 14.5 8 14.5C11.59 14.5 14.5 11.59 14.5 8C14.5 4.41 11.59 1.5 8 1.5ZM0 8C0 3.582 3.582 0 8 0C12.418 0 16 3.582 16 8C16 12.418 12.418 16 8 16C3.582 16 0 12.418 0 8ZM5 5.306C5 4.498 5.866 3.986 6.574 4.375L11.532 7.097C12.267 7.5 12.267 8.556 11.532 8.959L6.574 11.681C5.866 12.07 5 11.558 5 10.75V5.306ZM6.5 6.045V10.011L10.112 8.028L6.5 6.045Z"/><path d="M6.5 10.011V6.045L10.112 8.028L6.5 10.011Z"/>
  </svg>
);

const aDSVideoPlayCircleIconDefinition = svgToIconDefinition(
  aDSVideoPlayCircleSvg,
  'ads-video-play-circle'
);

/**![ADSVideoPlayCircle](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTggMS41QzQuNDEgMS41IDEuNSA0LjQxIDEuNSA4QzEuNSAxMS41OSA0LjQxIDE0LjUgOCAxNC41QzExLjU5IDE0LjUgMTQuNSAxMS41OSAxNC41IDhDMTQuNSA0LjQxIDExLjU5IDEuNSA4IDEuNVpNMCA4QzAgMy41ODIgMy41ODIgMCA4IDBDMTIuNDE4IDAgMTYgMy41ODIgMTYgOEMxNiAxMi40MTggMTIuNDE4IDE2IDggMTZDMy41ODIgMTYgMCAxMi40MTggMCA4Wk01IDUuMzA2QzUgNC40OTggNS44NjYgMy45ODYgNi41NzQgNC4zNzVMMTEuNTMyIDcuMDk3QzEyLjI2NyA3LjUgMTIuMjY3IDguNTU2IDExLjUzMiA4Ljk1OUw2LjU3NCAxMS42ODFDNS44NjYgMTIuMDcgNSAxMS41NTggNSAxMC43NVY1LjMwNlpNNi41IDYuMDQ1VjEwLjAxMUwxMC4xMTIgOC4wMjhMNi41IDYuMDQ1WiIvPjxwYXRoIGQ9Ik02LjUgMTAuMDExVjYuMDQ1TDEwLjExMiA4LjAyOEw2LjUgMTAuMDExWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSVideoPlayCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSVideoPlayCircle';
}

export default RefIcon;
