// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const tVOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4.8 6.75v7.875h14.4V6.75H4.8zm-1.8 0c.019-.492.197-.902.534-1.23.338-.329.76-.502 1.266-.52h14.4c.506.018.928.191 1.266.52.337.328.515.738.534 1.23v7.875a1.744 1.744 0 01-.534 1.23c-.338.329-.76.502-1.266.52H4.8c-.506-.018-.928-.191-1.266-.52A1.744 1.744 0 013 14.625V6.75zm3.6 10.5h10.8a.89.89 0 01.647.246.84.84 0 01.253.629.84.84 0 01-.253.629.89.89 0 01-.647.246H6.6a.89.89 0 01-.647-.246.84.84 0 01-.253-.629.84.84 0 01.253-.629.89.89 0 01.647-.246z"/>
  </svg>
);

const tVOutlinedIconDefinition = svgToIconDefinition(
  tVOutlinedSvg,
  'tvoutlined'
);

/**![TVOutlinedIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQuOCA2Ljc1djcuODc1aDE0LjRWNi43NUg0Ljh6bS0xLjggMGMuMDE5LS40OTIuMTk3LS45MDIuNTM0LTEuMjMuMzM4LS4zMjkuNzYtLjUwMiAxLjI2Ni0uNTJoMTQuNGMuNTA2LjAxOC45MjguMTkxIDEuMjY2LjUyLjMzNy4zMjguNTE1LjczOC41MzQgMS4yM3Y3Ljg3NWExLjc0NCAxLjc0NCAwIDAxLS41MzQgMS4yM2MtLjMzOC4zMjktLjc2LjUwMi0xLjI2Ni41Mkg0LjhjLS41MDYtLjAxOC0uOTI4LS4xOTEtMS4yNjYtLjUyQTEuNzQ0IDEuNzQ0IDAgMDEzIDE0LjYyNVY2Ljc1em0zLjYgMTAuNWgxMC44YS44OS44OSAwIDAxLjY0Ny4yNDYuODQuODQgMCAwMS4yNTMuNjI5Ljg0Ljg0IDAgMDEtLjI1My42MjkuODkuODkgMCAwMS0uNjQ3LjI0Nkg2LjZhLjg5Ljg5IDAgMDEtLjY0Ny0uMjQ2Ljg0Ljg0IDAgMDEtLjI1My0uNjI5Ljg0Ljg0IDAgMDEuMjUzLS42MjkuODkuODkgMCAwMS42NDctLjI0NnoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={tVOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'TVOutlinedIcon';
}

export default RefIcon;
