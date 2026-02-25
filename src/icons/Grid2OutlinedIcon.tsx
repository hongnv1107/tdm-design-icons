// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const grid2OutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9 19v2H5v-2h4zm10 0v2h-4v-2h4zm0-4h-4v6a2 2 0 01-2-2v-4a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2v-6zM9 15H5v6a2 2 0 01-2-2v-4a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2v-6zm0-6v2H5V9h4zm10 0v2h-4V9h4zm0-4h-4v6a2 2 0 01-2-2V5a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2V5zM9 5H5v6a2 2 0 01-2-2V5a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2V5z"/>
  </svg>
);

const grid2OutlinedIconDefinition = svgToIconDefinition(
  grid2OutlinedSvg,
  'grid2outlined'
);

/**![Grid2OutlinedIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTkgMTl2Mkg1di0yaDR6bTEwIDB2MmgtNHYtMmg0em0wLTRoLTR2NmEyIDIgMCAwMS0yLTJ2LTRhMiAyIDAgMDEyLTJoNGEyIDIgMCAwMTIgMnY0YTIgMiAwIDAxLTIgMnYtNnpNOSAxNUg1djZhMiAyIDAgMDEtMi0ydi00YTIgMiAwIDAxMi0yaDRhMiAyIDAgMDEyIDJ2NGEyIDIgMCAwMS0yIDJ2LTZ6bTAtNnYySDVWOWg0em0xMCAwdjJoLTRWOWg0em0wLTRoLTR2NmEyIDIgMCAwMS0yLTJWNWEyIDIgMCAwMTItMmg0YTIgMiAwIDAxMiAydjRhMiAyIDAgMDEtMiAyVjV6TTkgNUg1djZhMiAyIDAgMDEtMi0yVjVhMiAyIDAgMDEyLTJoNGEyIDIgMCAwMTIgMnY0YTIgMiAwIDAxLTIgMlY1eiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={grid2OutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'Grid2OutlinedIcon';
}

export default RefIcon;
