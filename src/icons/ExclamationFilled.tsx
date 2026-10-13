// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const exclamationFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.7143 1.71429V15.4286C13.7143 15.9286 13.5536 16.3393 13.2322 16.6607C12.9107 16.9821 12.5 17.1429 12 17.1429C11.5 17.1429 11.0893 16.9821 10.7679 16.6607C10.4465 16.3393 10.2857 15.9286 10.2857 15.4286V1.71429C10.2857 1.21429 10.4465 0.803571 10.7679 0.482143C11.0893 0.160714 11.5 0 12 0C12.5 0 12.9107 0.160714 13.2322 0.482143C13.5536 0.803571 13.7143 1.21429 13.7143 1.71429ZM12 24C11.1786 23.9643 10.5536 23.6071 10.125 22.9286C9.76789 22.2143 9.76789 21.5 10.125 20.7857C10.5536 20.1071 11.1786 19.75 12 19.7143C12.8215 19.75 13.4465 20.1071 13.875 20.7857C14.2322 21.5 14.2322 22.2143 13.875 22.9286C13.4465 23.6071 12.8215 23.9643 12 24Z"/>
  </svg>
);

const exclamationFilledIconDefinition = svgToIconDefinition(
  exclamationFilledSvg,
  'exclamation-filled'
);

/**![ExclamationFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTMuNzE0MyAxLjcxNDI5VjE1LjQyODZDMTMuNzE0MyAxNS45Mjg2IDEzLjU1MzYgMTYuMzM5MyAxMy4yMzIyIDE2LjY2MDdDMTIuOTEwNyAxNi45ODIxIDEyLjUgMTcuMTQyOSAxMiAxNy4xNDI5QzExLjUgMTcuMTQyOSAxMS4wODkzIDE2Ljk4MjEgMTAuNzY3OSAxNi42NjA3QzEwLjQ0NjUgMTYuMzM5MyAxMC4yODU3IDE1LjkyODYgMTAuMjg1NyAxNS40Mjg2VjEuNzE0MjlDMTAuMjg1NyAxLjIxNDI5IDEwLjQ0NjUgMC44MDM1NzEgMTAuNzY3OSAwLjQ4MjE0M0MxMS4wODkzIDAuMTYwNzE0IDExLjUgMCAxMiAwQzEyLjUgMCAxMi45MTA3IDAuMTYwNzE0IDEzLjIzMjIgMC40ODIxNDNDMTMuNTUzNiAwLjgwMzU3MSAxMy43MTQzIDEuMjE0MjkgMTMuNzE0MyAxLjcxNDI5Wk0xMiAyNEMxMS4xNzg2IDIzLjk2NDMgMTAuNTUzNiAyMy42MDcxIDEwLjEyNSAyMi45Mjg2QzkuNzY3ODkgMjIuMjE0MyA5Ljc2Nzg5IDIxLjUgMTAuMTI1IDIwLjc4NTdDMTAuNTUzNiAyMC4xMDcxIDExLjE3ODYgMTkuNzUgMTIgMTkuNzE0M0MxMi44MjE1IDE5Ljc1IDEzLjQ0NjUgMjAuMTA3MSAxMy44NzUgMjAuNzg1N0MxNC4yMzIyIDIxLjUgMTQuMjMyMiAyMi4yMTQzIDEzLjg3NSAyMi45Mjg2QzEzLjQ0NjUgMjMuNjA3MSAxMi44MjE1IDIzLjk2NDMgMTIgMjRaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={exclamationFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ExclamationFilled';
}

export default RefIcon;
