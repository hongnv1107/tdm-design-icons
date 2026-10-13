// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const themeFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22.2 12C22.2 6.03532 17.9647 1.8 12 1.8C6.03532 1.8 1.8 6.03532 1.8 12C1.8 17.9647 6.03532 22.2 12 22.2V24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24V22.2C17.9647 22.2 22.2 17.9647 22.2 12Z"/><path d="M12 2.4C17.3019 2.4 21.6 6.69807 21.6 12C21.6 17.3019 17.3019 21.6 12 21.6V2.4Z"/>
  </svg>
);

const themeFilledIconDefinition = svgToIconDefinition(
  themeFilledSvg,
  'theme-filled'
);

/**![ThemeFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMjIuMiAxMkMyMi4yIDYuMDM1MzIgMTcuOTY0NyAxLjggMTIgMS44QzYuMDM1MzIgMS44IDEuOCA2LjAzNTMyIDEuOCAxMkMxLjggMTcuOTY0NyA2LjAzNTMyIDIyLjIgMTIgMjIuMlYyNEM1LjM3MjU4IDI0IDAgMTguNjI3NCAwIDEyQzAgNS4zNzI1OCA1LjM3MjU4IDAgMTIgMEMxOC42Mjc0IDAgMjQgNS4zNzI1OCAyNCAxMkMyNCAxOC42Mjc0IDE4LjYyNzQgMjQgMTIgMjRWMjIuMkMxNy45NjQ3IDIyLjIgMjIuMiAxNy45NjQ3IDIyLjIgMTJaIi8+PHBhdGggZD0iTTEyIDIuNEMxNy4zMDE5IDIuNCAyMS42IDYuNjk4MDcgMjEuNiAxMkMyMS42IDE3LjMwMTkgMTcuMzAxOSAyMS42IDEyIDIxLjZWMi40WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={themeFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ThemeFilled';
}

export default RefIcon;
