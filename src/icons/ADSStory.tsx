// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSStorySvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.518 3C11.518 2.724 11.294 2.5 11.018 2.5H4.982C4.706 2.5 4.482 2.724 4.482 3V12.806L8 10.333L8.431 10.637L11.518 12.806V3ZM13.018 14.202C13.017 14.79 12.396 15.15 11.896 14.896L11.797 14.836L7.999 12.166L4.203 14.836C3.69 15.197 2.983 14.83 2.982 14.202V3C2.982 1.895 3.878 1 4.982 1H11.018C12.122 1 13.018 1.895 13.018 3V14.202Z"/>
  </svg>
);

const aDSStoryIconDefinition = svgToIconDefinition(
  aDSStorySvg,
  'ads-story'
);

/**![ADSStory](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTEuNTE4IDNDMTEuNTE4IDIuNzI0IDExLjI5NCAyLjUgMTEuMDE4IDIuNUg0Ljk4MkM0LjcwNiAyLjUgNC40ODIgMi43MjQgNC40ODIgM1YxMi44MDZMOCAxMC4zMzNMOC40MzEgMTAuNjM3TDExLjUxOCAxMi44MDZWM1pNMTMuMDE4IDE0LjIwMkMxMy4wMTcgMTQuNzkgMTIuMzk2IDE1LjE1IDExLjg5NiAxNC44OTZMMTEuNzk3IDE0LjgzNkw3Ljk5OSAxMi4xNjZMNC4yMDMgMTQuODM2QzMuNjkgMTUuMTk3IDIuOTgzIDE0LjgzIDIuOTgyIDE0LjIwMlYzQzIuOTgyIDEuODk1IDMuODc4IDEgNC45ODIgMUgxMS4wMThDMTIuMTIyIDEgMTMuMDE4IDEuODk1IDEzLjAxOCAzVjE0LjIwMloiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSStoryIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSStory';
}

export default RefIcon;
