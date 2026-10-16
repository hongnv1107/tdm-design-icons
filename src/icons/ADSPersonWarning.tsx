// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSPersonWarningSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 12.75C1 10.679 2.679 9 4.75 9H10V10.5H4.75C3.507 10.5 2.5 11.507 2.5 12.75V15H1V12.75ZM9.5 4C9.5 2.619 8.381 1.5 7 1.5C5.619 1.5 4.5 2.619 4.5 4C4.5 5.381 5.619 6.5 7 6.5C8.381 6.5 9.5 5.381 9.5 4ZM11 4C11 6.209 9.209 8 7 8C4.791 8 3 6.209 3 4C3 1.791 4.791 0 7 0C9.209 0 11 1.791 11 4Z"/><path d="M14 8V12.5H12.5V8H14Z"/><path d="M13.25 14C13.802 14 14.25 14.448 14.25 15C14.25 15.552 13.802 16 13.25 16C12.698 16 12.25 15.552 12.25 15C12.25 14.448 12.698 14 13.25 14Z"/>
  </svg>
);

const aDSPersonWarningIconDefinition = svgToIconDefinition(
  aDSPersonWarningSvg,
  'ads-person-warning'
);

/**![ADSPersonWarning](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xIDEyLjc1QzEgMTAuNjc5IDIuNjc5IDkgNC43NSA5SDEwVjEwLjVINC43NUMzLjUwNyAxMC41IDIuNSAxMS41MDcgMi41IDEyLjc1VjE1SDFWMTIuNzVaTTkuNSA0QzkuNSAyLjYxOSA4LjM4MSAxLjUgNyAxLjVDNS42MTkgMS41IDQuNSAyLjYxOSA0LjUgNEM0LjUgNS4zODEgNS42MTkgNi41IDcgNi41QzguMzgxIDYuNSA5LjUgNS4zODEgOS41IDRaTTExIDRDMTEgNi4yMDkgOS4yMDkgOCA3IDhDNC43OTEgOCAzIDYuMjA5IDMgNEMzIDEuNzkxIDQuNzkxIDAgNyAwQzkuMjA5IDAgMTEgMS43OTEgMTEgNFoiLz48cGF0aCBkPSJNMTQgOFYxMi41SDEyLjVWOEgxNFoiLz48cGF0aCBkPSJNMTMuMjUgMTRDMTMuODAyIDE0IDE0LjI1IDE0LjQ0OCAxNC4yNSAxNUMxNC4yNSAxNS41NTIgMTMuODAyIDE2IDEzLjI1IDE2QzEyLjY5OCAxNiAxMi4yNSAxNS41NTIgMTIuMjUgMTVDMTIuMjUgMTQuNDQ4IDEyLjY5OCAxNCAxMy4yNSAxNFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSPersonWarningIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSPersonWarning';
}

export default RefIcon;
