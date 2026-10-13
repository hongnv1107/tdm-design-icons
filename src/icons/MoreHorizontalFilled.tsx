// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const moreHorizontalFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M21.3333 14.6666C19.8606 14.6666 18.6667 13.4727 18.6667 12C18.6667 10.5272 19.8606 9.33331 21.3333 9.33331C22.8061 9.33331 24 10.5272 24 12C24 13.4727 22.8061 14.6666 21.3333 14.6666ZM12 14.6666C10.5272 14.6666 9.33333 13.4727 9.33333 12C9.33333 10.5272 10.5272 9.33331 12 9.33331C13.4728 9.33331 14.6667 10.5272 14.6667 12C14.6667 13.4727 13.4728 14.6666 12 14.6666ZM2.66667 14.6666C1.19391 14.6666 6.43764e-08 13.4727 0 12C-6.43764e-08 10.5272 1.19391 9.33331 2.66667 9.33331C4.13943 9.33331 5.33333 10.5272 5.33333 12C5.33333 13.4727 4.13943 14.6666 2.66667 14.6666Z"/>
  </svg>
);

const moreHorizontalFilledIconDefinition = svgToIconDefinition(
  moreHorizontalFilledSvg,
  'more-horizontal-filled'
);

/**![MoreHorizontalFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMjEuMzMzMyAxNC42NjY2QzE5Ljg2MDYgMTQuNjY2NiAxOC42NjY3IDEzLjQ3MjcgMTguNjY2NyAxMkMxOC42NjY3IDEwLjUyNzIgMTkuODYwNiA5LjMzMzMxIDIxLjMzMzMgOS4zMzMzMUMyMi44MDYxIDkuMzMzMzEgMjQgMTAuNTI3MiAyNCAxMkMyNCAxMy40NzI3IDIyLjgwNjEgMTQuNjY2NiAyMS4zMzMzIDE0LjY2NjZaTTEyIDE0LjY2NjZDMTAuNTI3MiAxNC42NjY2IDkuMzMzMzMgMTMuNDcyNyA5LjMzMzMzIDEyQzkuMzMzMzMgMTAuNTI3MiAxMC41MjcyIDkuMzMzMzEgMTIgOS4zMzMzMUMxMy40NzI4IDkuMzMzMzEgMTQuNjY2NyAxMC41MjcyIDE0LjY2NjcgMTJDMTQuNjY2NyAxMy40NzI3IDEzLjQ3MjggMTQuNjY2NiAxMiAxNC42NjY2Wk0yLjY2NjY3IDE0LjY2NjZDMS4xOTM5MSAxNC42NjY2IDYuNDM3NjRlLTA4IDEzLjQ3MjcgMCAxMkMtNi40Mzc2NGUtMDggMTAuNTI3MiAxLjE5MzkxIDkuMzMzMzEgMi42NjY2NyA5LjMzMzMxQzQuMTM5NDMgOS4zMzMzMSA1LjMzMzMzIDEwLjUyNzIgNS4zMzMzMyAxMkM1LjMzMzMzIDEzLjQ3MjcgNC4xMzk0MyAxNC42NjY2IDIuNjY2NjcgMTQuNjY2NloiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={moreHorizontalFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MoreHorizontalFilled';
}

export default RefIcon;
