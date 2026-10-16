// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSArrowEndSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.78 7.47C13.073 7.763 13.073 8.237 12.78 8.53L8.28 13.03L7.22 11.97L10.44 8.75H0V7.25H10.44L7.22 4.03L8.28 2.97L12.78 7.47ZM16 3V13H14.5V3H16Z"/>
  </svg>
);

const aDSArrowEndIconDefinition = svgToIconDefinition(
  aDSArrowEndSvg,
  'ads-arrow-end'
);

/**![ADSArrowEnd](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTIuNzggNy40N0MxMy4wNzMgNy43NjMgMTMuMDczIDguMjM3IDEyLjc4IDguNTNMOC4yOCAxMy4wM0w3LjIyIDExLjk3TDEwLjQ0IDguNzVIMFY3LjI1SDEwLjQ0TDcuMjIgNC4wM0w4LjI4IDIuOTdMMTIuNzggNy40N1pNMTYgM1YxM0gxNC41VjNIMTZaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSArrowEndIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSArrowEnd';
}

export default RefIcon;
