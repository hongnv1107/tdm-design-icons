// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const diamondFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.0938 2.96875L21.5312 11.4062C21.8438 11.7188 22 12.0833 22 12.5C22 12.9167 21.8438 13.2812 21.5312 13.5938L13.0938 22.0312C12.7812 22.3438 12.4167 22.5 12 22.5C11.5833 22.5 11.2188 22.3438 10.9062 22.0312L2.46875 13.5938C2.15625 13.2812 2 12.9167 2 12.5C2 12.0833 2.15625 11.7188 2.46875 11.4062L10.9062 2.96875C11.2188 2.65625 11.5833 2.5 12 2.5C12.4167 2.5 12.7812 2.65625 13.0938 2.96875Z"/>
  </svg>
);

const diamondFilledIconDefinition = svgToIconDefinition(
  diamondFilledSvg,
  'diamond-filled'
);

/**![DiamondFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTMuMDkzOCAyLjk2ODc1TDIxLjUzMTIgMTEuNDA2MkMyMS44NDM4IDExLjcxODggMjIgMTIuMDgzMyAyMiAxMi41QzIyIDEyLjkxNjcgMjEuODQzOCAxMy4yODEyIDIxLjUzMTIgMTMuNTkzOEwxMy4wOTM4IDIyLjAzMTJDMTIuNzgxMiAyMi4zNDM4IDEyLjQxNjcgMjIuNSAxMiAyMi41QzExLjU4MzMgMjIuNSAxMS4yMTg4IDIyLjM0MzggMTAuOTA2MiAyMi4wMzEyTDIuNDY4NzUgMTMuNTkzOEMyLjE1NjI1IDEzLjI4MTIgMiAxMi45MTY3IDIgMTIuNUMyIDEyLjA4MzMgMi4xNTYyNSAxMS43MTg4IDIuNDY4NzUgMTEuNDA2MkwxMC45MDYyIDIuOTY4NzVDMTEuMjE4OCAyLjY1NjI1IDExLjU4MzMgMi41IDEyIDIuNUMxMi40MTY3IDIuNSAxMi43ODEyIDIuNjU2MjUgMTMuMDkzOCAyLjk2ODc1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={diamondFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'DiamondFilledIcon';
}

export default RefIcon;
