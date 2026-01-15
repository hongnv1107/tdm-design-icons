// GENERATE BY ./scripts/generate-icons.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import SmIcon from '../components/SmIcon';
import type { SmIconProps } from '../components/SmIcon';
import { svgToIconDefinition } from '../utils';

const menuSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M21 17C21.5523 17 22 17.4477 22 18C22 18.5523 21.5523 19 21 19H3C2.44772 19 2 18.5523 2 18C2 17.4477 2.44772 17 3 17H21ZM21 11C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H21ZM21 5C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6C2 5.44772 2.44772 5 3 5H21Z" />
  </svg>
);

const menuIconDefinition = svgToIconDefinition(
  menuSvg,
  'menu'
);

/**![MenuIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2NhY2FjYSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjEgMTdDMjEuNTUyMyAxNyAyMiAxNy40NDc3IDIyIDE4QzIyIDE4LjU1MjMgMjEuNTUyMyAxOSAyMSAxOUgzQzIuNDQ3NzIgMTkgMiAxOC41NTIzIDIgMThDMiAxNy40NDc3IDIuNDQ3NzIgMTcgMyAxN0gyMVpNMjEgMTFDMjEuNTUyMyAxMSAyMiAxMS40NDc3IDIyIDEyQzIyIDEyLjU1MjMgMjEuNTUyMyAxMyAyMSAxM0gzQzIuNDQ3NzIgMTMgMiAxMi41NTIzIDIgMTJDMiAxMS40NDc3IDIuNDQ3NzIgMTEgMyAxMUgyMVpNMjEgNUMyMS41NTIzIDUgMjIgNS40NDc3MiAyMiA2QzIyIDYuNTUyMjggMjEuNTUyMyA3IDIxIDdIM0MyLjQ0NzcyIDcgMiA2LjU1MjI4IDIgNkMyIDUuNDQ3NzIgMi40NDc3MiA1IDMgNUgyMVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<SmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, SmIconProps>((props, ref) => {
  return <SmIcon {...props} ref={ref} icon={menuIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MenuIcon';
}

export default RefIcon;
