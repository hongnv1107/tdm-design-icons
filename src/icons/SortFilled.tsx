// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const sortFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4.92859 10.2857C4.25002 10.25 3.78573 9.94643 3.53573 9.375C3.32145 8.80357 3.42859 8.26786 3.85716 7.76786L10.9822 0.428571C11.2679 0.142857 11.6072 0 12 0C12.3929 0 12.75 0.142857 13.0714 0.428571L20.1429 7.76786C20.5714 8.26786 20.6786 8.80357 20.4643 9.375C20.2143 9.94643 19.75 10.25 19.0714 10.2857H4.92859ZM19.0714 13.7143C19.75 13.75 20.2143 14.0536 20.4643 14.625C20.6786 15.1964 20.5714 15.7321 20.1429 16.2321L13.0714 23.5714C12.75 23.8571 12.3929 24 12 24C11.5714 24 11.2322 23.8571 10.9822 23.5714L3.85716 16.2321C3.42859 15.7321 3.32145 15.1964 3.53573 14.625C3.78573 14.0536 4.25002 13.75 4.92859 13.7143H19.0714Z"/>
  </svg>
);

const sortFilledIconDefinition = svgToIconDefinition(
  sortFilledSvg,
  'sort-filled'
);

/**![SortFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNNC45Mjg1OSAxMC4yODU3QzQuMjUwMDIgMTAuMjUgMy43ODU3MyA5Ljk0NjQzIDMuNTM1NzMgOS4zNzVDMy4zMjE0NSA4LjgwMzU3IDMuNDI4NTkgOC4yNjc4NiAzLjg1NzE2IDcuNzY3ODZMMTAuOTgyMiAwLjQyODU3MUMxMS4yNjc5IDAuMTQyODU3IDExLjYwNzIgMCAxMiAwQzEyLjM5MjkgMCAxMi43NSAwLjE0Mjg1NyAxMy4wNzE0IDAuNDI4NTcxTDIwLjE0MjkgNy43Njc4NkMyMC41NzE0IDguMjY3ODYgMjAuNjc4NiA4LjgwMzU3IDIwLjQ2NDMgOS4zNzVDMjAuMjE0MyA5Ljk0NjQzIDE5Ljc1IDEwLjI1IDE5LjA3MTQgMTAuMjg1N0g0LjkyODU5Wk0xOS4wNzE0IDEzLjcxNDNDMTkuNzUgMTMuNzUgMjAuMjE0MyAxNC4wNTM2IDIwLjQ2NDMgMTQuNjI1QzIwLjY3ODYgMTUuMTk2NCAyMC41NzE0IDE1LjczMjEgMjAuMTQyOSAxNi4yMzIxTDEzLjA3MTQgMjMuNTcxNEMxMi43NSAyMy44NTcxIDEyLjM5MjkgMjQgMTIgMjRDMTEuNTcxNCAyNCAxMS4yMzIyIDIzLjg1NzEgMTAuOTgyMiAyMy41NzE0TDMuODU3MTYgMTYuMjMyMUMzLjQyODU5IDE1LjczMjEgMy4zMjE0NSAxNS4xOTY0IDMuNTM1NzMgMTQuNjI1QzMuNzg1NzMgMTQuMDUzNiA0LjI1MDAyIDEzLjc1IDQuOTI4NTkgMTMuNzE0M0gxOS4wNzE0WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={sortFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SortFilled';
}

export default RefIcon;
