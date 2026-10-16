// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSChevronLeftSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.97 1.47L3.97 7.47C3.695 7.744 3.678 8.179 3.918 8.474L3.97 8.53L9.97 14.53L11.03 13.47L5.561 8L11.03 2.53L9.97 1.47Z"/>
  </svg>
);

const aDSChevronLeftIconDefinition = svgToIconDefinition(
  aDSChevronLeftSvg,
  'ads-chevron-left'
);

/**![ADSChevronLeft](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNOS45NyAxLjQ3TDMuOTcgNy40N0MzLjY5NSA3Ljc0NCAzLjY3OCA4LjE3OSAzLjkxOCA4LjQ3NEwzLjk3IDguNTNMOS45NyAxNC41M0wxMS4wMyAxMy40N0w1LjU2MSA4TDExLjAzIDIuNTNMOS45NyAxLjQ3WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSChevronLeftIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSChevronLeft';
}

export default RefIcon;
