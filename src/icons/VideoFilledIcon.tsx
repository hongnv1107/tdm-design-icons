// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const videoFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3 8C3.02083 7.4375 3.21875 6.96875 3.59375 6.59375C3.96875 6.21875 4.4375 6.02083 5 6H13C13.5625 6.02083 14.0312 6.21875 14.4062 6.59375C14.7812 6.96875 14.9792 7.4375 15 8V16C14.9792 16.5625 14.7812 17.0312 14.4062 17.4062C14.0312 17.7812 13.5625 17.9792 13 18H5C4.4375 17.9792 3.96875 17.7812 3.59375 17.4062C3.21875 17.0312 3.02083 16.5625 3 16V8ZM20.4688 7.125C20.8021 7.3125 20.9792 7.60417 21 8V16C20.9792 16.3958 20.8021 16.6875 20.4688 16.875C20.1146 17.0625 19.7708 17.0521 19.4375 16.8438L16.4375 14.8438L16 14.5312V9.46875L16.4375 9.15625L19.4375 7.15625C19.7708 6.96875 20.1146 6.95833 20.4688 7.125Z"/>
  </svg>
);

const videoFilledIconDefinition = svgToIconDefinition(
  videoFilledSvg,
  'video-filled'
);

/**![VideoFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMyA4QzMuMDIwODMgNy40Mzc1IDMuMjE4NzUgNi45Njg3NSAzLjU5Mzc1IDYuNTkzNzVDMy45Njg3NSA2LjIxODc1IDQuNDM3NSA2LjAyMDgzIDUgNkgxM0MxMy41NjI1IDYuMDIwODMgMTQuMDMxMiA2LjIxODc1IDE0LjQwNjIgNi41OTM3NUMxNC43ODEyIDYuOTY4NzUgMTQuOTc5MiA3LjQzNzUgMTUgOFYxNkMxNC45NzkyIDE2LjU2MjUgMTQuNzgxMiAxNy4wMzEyIDE0LjQwNjIgMTcuNDA2MkMxNC4wMzEyIDE3Ljc4MTIgMTMuNTYyNSAxNy45NzkyIDEzIDE4SDVDNC40Mzc1IDE3Ljk3OTIgMy45Njg3NSAxNy43ODEyIDMuNTkzNzUgMTcuNDA2MkMzLjIxODc1IDE3LjAzMTIgMy4wMjA4MyAxNi41NjI1IDMgMTZWOFpNMjAuNDY4OCA3LjEyNUMyMC44MDIxIDcuMzEyNSAyMC45NzkyIDcuNjA0MTcgMjEgOFYxNkMyMC45NzkyIDE2LjM5NTggMjAuODAyMSAxNi42ODc1IDIwLjQ2ODggMTYuODc1QzIwLjExNDYgMTcuMDYyNSAxOS43NzA4IDE3LjA1MjEgMTkuNDM3NSAxNi44NDM4TDE2LjQzNzUgMTQuODQzOEwxNiAxNC41MzEyVjkuNDY4NzVMMTYuNDM3NSA5LjE1NjI1TDE5LjQzNzUgNy4xNTYyNUMxOS43NzA4IDYuOTY4NzUgMjAuMTE0NiA2Ljk1ODMzIDIwLjQ2ODggNy4xMjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={videoFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'VideoFilledIcon';
}

export default RefIcon;
