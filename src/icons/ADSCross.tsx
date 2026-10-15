// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSCrossSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.53 3.53L9.061 8L13.53 12.47L12.47 13.53L8 9.061L3.53 13.53L2.47 12.47L6.939 8L2.47 3.53L3.53 2.47L8 6.939L12.47 2.47L13.53 3.53Z"/>
  </svg>
);

const aDSCrossIconDefinition = svgToIconDefinition(
  aDSCrossSvg,
  'ads-cross'
);

/**![ADSCross](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTMuNTMgMy41M0w5LjA2MSA4TDEzLjUzIDEyLjQ3TDEyLjQ3IDEzLjUzTDggOS4wNjFMMy41MyAxMy41M0wyLjQ3IDEyLjQ3TDYuOTM5IDhMMi40NyAzLjUzTDMuNTMgMi40N0w4IDYuOTM5TDEyLjQ3IDIuNDdMMTMuNTMgMy41M1oiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSCrossIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSCross';
}

export default RefIcon;
