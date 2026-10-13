// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const caretLeftFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5.47499 13.7214C5.02499 13.2225 4.79999 12.6486 4.79999 12C4.79999 11.3514 5.02499 10.7775 5.47499 10.2786L15.075 0.698545C15.875 0 16.75 -0.174636 17.7 0.174636C18.65 0.623701 19.15 1.37214 19.2 2.41996V21.58C19.15 22.6279 18.65 23.3763 17.7 23.8254C16.75 24.1746 15.875 24 15.075 23.3015L5.47499 13.7214Z"/>
  </svg>
);

const caretLeftFilledIconDefinition = svgToIconDefinition(
  caretLeftFilledSvg,
  'caret-left-filled'
);

/**![CaretLeftFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNNS40NzQ5OSAxMy43MjE0QzUuMDI0OTkgMTMuMjIyNSA0Ljc5OTk5IDEyLjY0ODYgNC43OTk5OSAxMkM0Ljc5OTk5IDExLjM1MTQgNS4wMjQ5OSAxMC43Nzc1IDUuNDc0OTkgMTAuMjc4NkwxNS4wNzUgMC42OTg1NDVDMTUuODc1IDAgMTYuNzUgLTAuMTc0NjM2IDE3LjcgMC4xNzQ2MzZDMTguNjUgMC42MjM3MDEgMTkuMTUgMS4zNzIxNCAxOS4yIDIuNDE5OTZWMjEuNThDMTkuMTUgMjIuNjI3OSAxOC42NSAyMy4zNzYzIDE3LjcgMjMuODI1NEMxNi43NSAyNC4xNzQ2IDE1Ljg3NSAyNCAxNS4wNzUgMjMuMzAxNUw1LjQ3NDk5IDEzLjcyMTRaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={caretLeftFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CaretLeftFilled';
}

export default RefIcon;
