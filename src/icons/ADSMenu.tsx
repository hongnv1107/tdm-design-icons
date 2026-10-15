// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSMenuSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M15 12.5V14H1V12.5H15Z"/><path d="M15 7.25V8.75H1V7.25H15Z"/><path d="M15 2V3.5H1V2H15Z"/>
  </svg>
);

const aDSMenuIconDefinition = svgToIconDefinition(
  aDSMenuSvg,
  'ads-menu'
);

/**![ADSMenu](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTUgMTIuNVYxNEgxVjEyLjVIMTVaIi8+PHBhdGggZD0iTTE1IDcuMjVWOC43NUgxVjcuMjVIMTVaIi8+PHBhdGggZD0iTTE1IDJWMy41SDFWMkgxNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSMenuIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSMenu';
}

export default RefIcon;
