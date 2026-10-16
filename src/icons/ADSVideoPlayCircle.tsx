// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSVideoPlayCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
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

/**![ADSVideoPlayCircle](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOCAxLjVDNC40MSAxLjUgMS41IDQuNDEgMS41IDhDMS41IDExLjU5IDQuNDEgMTQuNSA4IDE0LjVDMTEuNTkgMTQuNSAxNC41IDExLjU5IDE0LjUgOEMxNC41IDQuNDEgMTEuNTkgMS41IDggMS41Wk0wIDhDMCAzLjU4MiAzLjU4MiAwIDggMEMxMi40MTggMCAxNiAzLjU4MiAxNiA4QzE2IDEyLjQxOCAxMi40MTggMTYgOCAxNkMzLjU4MiAxNiAwIDEyLjQxOCAwIDhaTTUgNS4zMDZDNSA0LjQ5OCA1Ljg2NiAzLjk4NiA2LjU3NCA0LjM3NUwxMS41MzIgNy4wOTdDMTIuMjY3IDcuNSAxMi4yNjcgOC41NTYgMTEuNTMyIDguOTU5TDYuNTc0IDExLjY4MUM1Ljg2NiAxMi4wNyA1IDExLjU1OCA1IDEwLjc1VjUuMzA2Wk02LjUgNi4wNDVWMTAuMDExTDEwLjExMiA4LjAyOEw2LjUgNi4wNDVaIi8+PHBhdGggZD0iTTYuNSAxMC4wMTFWNi4wNDVMMTAuMTEyIDguMDI4TDYuNSAxMC4wMTFaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSVideoPlayCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSVideoPlayCircle';
}

export default RefIcon;
