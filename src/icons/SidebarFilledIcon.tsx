// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const sidebarFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7 3L7.10254 3.00488C7.60667 3.05621 8 3.48232 8 4V20C8 20.5523 7.55228 21 7 21H5.77734C4.33918 20.9998 3.15673 19.9066 3.01465 18.5059L3 18.2227V5.77734C3.00023 4.24356 4.24356 3.00023 5.77734 3H7ZM19 5.77734C18.9998 5.34813 18.6519 5.00023 18.2227 5H12V19H18.2227C18.6519 18.9998 18.9998 18.6519 19 18.2227V5.77734ZM21 18.2227C20.9998 19.7564 19.7564 20.9998 18.2227 21H11C10.4477 21 10 20.5523 10 20V4C10 3.44772 10.4477 3 11 3H18.2227C19.7564 3.00023 20.9998 4.24356 21 5.77734V18.2227Z"/>
  </svg>
);

const sidebarFilledIconDefinition = svgToIconDefinition(
  sidebarFilledSvg,
  'sidebar-filled'
);

/**![SidebarFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNNyAzTDcuMTAyNTQgMy4wMDQ4OEM3LjYwNjY3IDMuMDU2MjEgOCAzLjQ4MjMyIDggNFYyMEM4IDIwLjU1MjMgNy41NTIyOCAyMSA3IDIxSDUuNzc3MzRDNC4zMzkxOCAyMC45OTk4IDMuMTU2NzMgMTkuOTA2NiAzLjAxNDY1IDE4LjUwNTlMMyAxOC4yMjI3VjUuNzc3MzRDMy4wMDAyMyA0LjI0MzU2IDQuMjQzNTYgMy4wMDAyMyA1Ljc3NzM0IDNIN1pNMTkgNS43NzczNEMxOC45OTk4IDUuMzQ4MTMgMTguNjUxOSA1LjAwMDIzIDE4LjIyMjcgNUgxMlYxOUgxOC4yMjI3QzE4LjY1MTkgMTguOTk5OCAxOC45OTk4IDE4LjY1MTkgMTkgMTguMjIyN1Y1Ljc3NzM0Wk0yMSAxOC4yMjI3QzIwLjk5OTggMTkuNzU2NCAxOS43NTY0IDIwLjk5OTggMTguMjIyNyAyMUgxMUMxMC40NDc3IDIxIDEwIDIwLjU1MjMgMTAgMjBWNEMxMCAzLjQ0NzcyIDEwLjQ0NzcgMyAxMSAzSDE4LjIyMjdDMTkuNzU2NCAzLjAwMDIzIDIwLjk5OTggNC4yNDM1NiAyMSA1Ljc3NzM0VjE4LjIyMjdaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={sidebarFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SidebarFilledIcon';
}

export default RefIcon;
