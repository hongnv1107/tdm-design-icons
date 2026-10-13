// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const noteStickyFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3.42857 0H20.5714C21.5357 0.0357143 22.3393 0.375 22.9821 1.01786C23.625 1.66071 23.9643 2.46429 24 3.42857V15.4286H18C17.2857 15.4643 16.6786 15.7143 16.1786 16.1786C15.7143 16.6786 15.4643 17.2857 15.4286 18V24H3.42857C2.46429 23.9643 1.66071 23.625 1.01786 22.9821C0.375 22.3393 0.0357143 21.5357 0 20.5714V3.42857C0.0357143 2.46429 0.375 1.66071 1.01786 1.01786C1.66071 0.375 2.46429 0.0357143 3.42857 0ZM24 17.1429L17.1429 24V18C17.1786 17.4643 17.4643 17.1786 18 17.1429H24Z"/>
  </svg>
);

const noteStickyFilledIconDefinition = svgToIconDefinition(
  noteStickyFilledSvg,
  'note-sticky-filled'
);

/**![NoteStickyFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMy40Mjg1NyAwSDIwLjU3MTRDMjEuNTM1NyAwLjAzNTcxNDMgMjIuMzM5MyAwLjM3NSAyMi45ODIxIDEuMDE3ODZDMjMuNjI1IDEuNjYwNzEgMjMuOTY0MyAyLjQ2NDI5IDI0IDMuNDI4NTdWMTUuNDI4NkgxOEMxNy4yODU3IDE1LjQ2NDMgMTYuNjc4NiAxNS43MTQzIDE2LjE3ODYgMTYuMTc4NkMxNS43MTQzIDE2LjY3ODYgMTUuNDY0MyAxNy4yODU3IDE1LjQyODYgMThWMjRIMy40Mjg1N0MyLjQ2NDI5IDIzLjk2NDMgMS42NjA3MSAyMy42MjUgMS4wMTc4NiAyMi45ODIxQzAuMzc1IDIyLjMzOTMgMC4wMzU3MTQzIDIxLjUzNTcgMCAyMC41NzE0VjMuNDI4NTdDMC4wMzU3MTQzIDIuNDY0MjkgMC4zNzUgMS42NjA3MSAxLjAxNzg2IDEuMDE3ODZDMS42NjA3MSAwLjM3NSAyLjQ2NDI5IDAuMDM1NzE0MyAzLjQyODU3IDBaTTI0IDE3LjE0MjlMMTcuMTQyOSAyNFYxOEMxNy4xNzg2IDE3LjQ2NDMgMTcuNDY0MyAxNy4xNzg2IDE4IDE3LjE0MjlIMjRaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={noteStickyFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'NoteStickyFilled';
}

export default RefIcon;
