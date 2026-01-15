// GENERATE BY ./scripts/generate-icons.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import SmIcon from '../components/SmIcon';
import type { SmIconProps } from '../components/SmIcon';
import { svgToIconDefinition } from '../utils';

const plusAddOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V5C11 4.44772 11.4477 4 12 4Z" />
  </svg>
);

const plusAddOutlinedIconDefinition = svgToIconDefinition(
  plusAddOutlinedSvg,
  'plus-add-outlined'
);

/**![PlusAddOutlinedIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2NhY2FjYSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgNEMxMi41NTIzIDQgMTMgNC40NDc3MiAxMyA1VjExSDE5QzE5LjU1MjMgMTEgMjAgMTEuNDQ3NyAyMCAxMkMyMCAxMi41NTIzIDE5LjU1MjMgMTMgMTkgMTNIMTNWMTlDMTMgMTkuNTUyMyAxMi41NTIzIDIwIDEyIDIwQzExLjQ0NzcgMjAgMTEgMTkuNTUyMyAxMSAxOVYxM0g1QzQuNDQ3NzIgMTMgNCAxMi41NTIzIDQgMTJDNCAxMS40NDc3IDQuNDQ3NzIgMTEgNSAxMUgxMVY1QzExIDQuNDQ3NzIgMTEuNDQ3NyA0IDEyIDRaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<SmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, SmIconProps>((props, ref) => {
  return <SmIcon {...props} ref={ref} icon={plusAddOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PlusAddOutlinedIcon';
}

export default RefIcon;
