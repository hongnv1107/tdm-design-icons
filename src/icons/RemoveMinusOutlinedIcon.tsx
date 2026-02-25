// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const removeMinusOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 11C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H19Z" />
  </svg>
);

const removeMinusOutlinedIconDefinition = svgToIconDefinition(
  removeMinusOutlinedSvg,
  'remove-minus-outlined'
);

/**![RemoveMinusOutlinedIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2NhY2FjYSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTkgMTFDMTkuNTUyMyAxMSAyMCAxMS40NDc3IDIwIDEyQzIwIDEyLjU1MjMgMTkuNTUyMyAxMyAxOSAxM0g1QzQuNDQ3NzIgMTMgNCAxMi41NTIzIDQgMTJDNCAxMS40NDc3IDQuNDQ3NzIgMTEgNSAxMUgxOVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={removeMinusOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'RemoveMinusOutlinedIcon';
}

export default RefIcon;
