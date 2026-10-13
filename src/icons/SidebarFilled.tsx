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
    <path d="M5.33333 0L5.47005 0.00651042C6.14223 0.0749526 6.66667 0.643098 6.66667 1.33333V22.6667C6.66667 23.403 6.06971 24 5.33333 24H3.70312C1.78557 23.9997 0.20897 22.5421 0.0195312 20.6745L0 20.2969V3.70312C0.000312786 1.65808 1.65808 0.0003127 3.70312 0H5.33333ZM21.3333 3.70312C21.333 3.13084 20.8692 2.66698 20.2969 2.66667H12V21.3333H20.2969C20.8692 21.333 21.333 20.8692 21.3333 20.2969V3.70312ZM24 20.2969C23.9997 22.3419 22.3419 23.9997 20.2969 24H10.6667C9.93029 24 9.33333 23.403 9.33333 22.6667V1.33333C9.33333 0.596954 9.93029 0 10.6667 0H20.2969C22.3419 0.000312614 23.9997 1.65809 24 3.70312V20.2969Z"/>
  </svg>
);

const sidebarFilledIconDefinition = svgToIconDefinition(
  sidebarFilledSvg,
  'sidebar-filled'
);

/**![SidebarFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNNS4zMzMzMyAwTDUuNDcwMDUgMC4wMDY1MTA0MkM2LjE0MjIzIDAuMDc0OTUyNiA2LjY2NjY3IDAuNjQzMDk4IDYuNjY2NjcgMS4zMzMzM1YyMi42NjY3QzYuNjY2NjcgMjMuNDAzIDYuMDY5NzEgMjQgNS4zMzMzMyAyNEgzLjcwMzEyQzEuNzg1NTcgMjMuOTk5NyAwLjIwODk3IDIyLjU0MjEgMC4wMTk1MzEyIDIwLjY3NDVMMCAyMC4yOTY5VjMuNzAzMTJDMC4wMDAzMTI3ODYgMS42NTgwOCAxLjY1ODA4IDAuMDAwMzEyNyAzLjcwMzEyIDBINS4zMzMzM1pNMjEuMzMzMyAzLjcwMzEyQzIxLjMzMyAzLjEzMDg0IDIwLjg2OTIgMi42NjY5OCAyMC4yOTY5IDIuNjY2NjdIMTJWMjEuMzMzM0gyMC4yOTY5QzIwLjg2OTIgMjEuMzMzIDIxLjMzMyAyMC44NjkyIDIxLjMzMzMgMjAuMjk2OVYzLjcwMzEyWk0yNCAyMC4yOTY5QzIzLjk5OTcgMjIuMzQxOSAyMi4zNDE5IDIzLjk5OTcgMjAuMjk2OSAyNEgxMC42NjY3QzkuOTMwMjkgMjQgOS4zMzMzMyAyMy40MDMgOS4zMzMzMyAyMi42NjY3VjEuMzMzMzNDOS4zMzMzMyAwLjU5Njk1NCA5LjkzMDI5IDAgMTAuNjY2NyAwSDIwLjI5NjlDMjIuMzQxOSAwLjAwMDMxMjYxNCAyMy45OTk3IDEuNjU4MDkgMjQgMy43MDMxMlYyMC4yOTY5WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={sidebarFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SidebarFilled';
}

export default RefIcon;
