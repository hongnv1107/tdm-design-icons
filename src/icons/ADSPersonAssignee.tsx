// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSPersonAssigneeSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 12.75C1 10.679 2.679 9 4.75 9H9V10.5H4.75C3.507 10.5 2.5 11.507 2.5 12.75V15H1V12.75ZM9.5 4C9.5 2.619 8.381 1.5 7 1.5C5.619 1.5 4.5 2.619 4.5 4C4.5 5.381 5.619 6.5 7 6.5C8.381 6.5 9.5 5.381 9.5 4ZM11 4C11 6.209 9.209 8 7 8C4.791 8 3 6.209 3 4C3 1.791 4.791 0 7 0C9.209 0 11 1.791 11 4Z"/><path d="M9.72 12.219C9.427 12.512 9.427 12.986 9.72 13.279L12.345 15.904L13.405 14.844L12.061 13.499H16V11.999H12.061L13.405 10.654L12.345 9.594L9.72 12.219Z"/>
  </svg>
);

const aDSPersonAssigneeIconDefinition = svgToIconDefinition(
  aDSPersonAssigneeSvg,
  'ads-person-assignee'
);

/**![ADSPersonAssignee](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xIDEyLjc1QzEgMTAuNjc5IDIuNjc5IDkgNC43NSA5SDlWMTAuNUg0Ljc1QzMuNTA3IDEwLjUgMi41IDExLjUwNyAyLjUgMTIuNzVWMTVIMVYxMi43NVpNOS41IDRDOS41IDIuNjE5IDguMzgxIDEuNSA3IDEuNUM1LjYxOSAxLjUgNC41IDIuNjE5IDQuNSA0QzQuNSA1LjM4MSA1LjYxOSA2LjUgNyA2LjVDOC4zODEgNi41IDkuNSA1LjM4MSA5LjUgNFpNMTEgNEMxMSA2LjIwOSA5LjIwOSA4IDcgOEM0Ljc5MSA4IDMgNi4yMDkgMyA0QzMgMS43OTEgNC43OTEgMCA3IDBDOS4yMDkgMCAxMSAxLjc5MSAxMSA0WiIvPjxwYXRoIGQ9Ik05LjcyIDEyLjIxOUM5LjQyNyAxMi41MTIgOS40MjcgMTIuOTg2IDkuNzIgMTMuMjc5TDEyLjM0NSAxNS45MDRMMTMuNDA1IDE0Ljg0NEwxMi4wNjEgMTMuNDk5SDE2VjExLjk5OUgxMi4wNjFMMTMuNDA1IDEwLjY1NEwxMi4zNDUgOS41OTRMOS43MiAxMi4yMTlaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSPersonAssigneeIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSPersonAssignee';
}

export default RefIcon;
