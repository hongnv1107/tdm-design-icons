// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const filterOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22.6665 1.33356C23.1887 1.33356 23.6633 1.63832 23.88 2.11349C24.0965 2.58882 24.0156 3.14767 23.673 3.54185L15.4661 12.9753V21.3332C15.4661 21.7925 15.2303 22.2196 14.8411 22.4634C14.4517 22.707 13.9639 22.7331 13.5508 22.5324L9.2839 20.4582C8.82487 20.2351 8.53392 19.7694 8.53392 19.259V12.9753L0.327038 3.54185C-0.0156368 3.14767 -0.0965214 2.58882 0.120011 2.11349C0.336693 1.63832 0.811252 1.33356 1.33353 1.33356H22.6665ZM10.8724 11.6016C11.0834 11.8441 11.2004 12.1551 11.2005 12.4766V18.4244L12.7995 19.2017V12.4766C12.7996 12.1551 12.9166 11.8441 13.1276 11.6016L19.7394 4.00017H4.26056L10.8724 11.6016Z"/>
  </svg>
);

const filterOutlinedIconDefinition = svgToIconDefinition(
  filterOutlinedSvg,
  'filter-outlined'
);

/**![FilterOutlined](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMjIuNjY2NSAxLjMzMzU2QzIzLjE4ODcgMS4zMzM1NiAyMy42NjMzIDEuNjM4MzIgMjMuODggMi4xMTM0OUMyNC4wOTY1IDIuNTg4ODIgMjQuMDE1NiAzLjE0NzY3IDIzLjY3MyAzLjU0MTg1TDE1LjQ2NjEgMTIuOTc1M1YyMS4zMzMyQzE1LjQ2NjEgMjEuNzkyNSAxNS4yMzAzIDIyLjIxOTYgMTQuODQxMSAyMi40NjM0QzE0LjQ1MTcgMjIuNzA3IDEzLjk2MzkgMjIuNzMzMSAxMy41NTA4IDIyLjUzMjRMOS4yODM5IDIwLjQ1ODJDOC44MjQ4NyAyMC4yMzUxIDguNTMzOTIgMTkuNzY5NCA4LjUzMzkyIDE5LjI1OVYxMi45NzUzTDAuMzI3MDM4IDMuNTQxODVDLTAuMDE1NjM2OCAzLjE0NzY3IC0wLjA5NjUyMTQgMi41ODg4MiAwLjEyMDAxMSAyLjExMzQ5QzAuMzM2NjkzIDEuNjM4MzIgMC44MTEyNTIgMS4zMzM1NiAxLjMzMzUzIDEuMzMzNTZIMjIuNjY2NVpNMTAuODcyNCAxMS42MDE2QzExLjA4MzQgMTEuODQ0MSAxMS4yMDA0IDEyLjE1NTEgMTEuMjAwNSAxMi40NzY2VjE4LjQyNDRMMTIuNzk5NSAxOS4yMDE3VjEyLjQ3NjZDMTIuNzk5NiAxMi4xNTUxIDEyLjkxNjYgMTEuODQ0MSAxMy4xMjc2IDExLjYwMTZMMTkuNzM5NCA0LjAwMDE3SDQuMjYwNTZMMTAuODcyNCAxMS42MDE2WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={filterOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FilterOutlined';
}

export default RefIcon;
