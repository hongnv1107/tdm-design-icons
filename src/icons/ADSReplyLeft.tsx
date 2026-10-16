// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSReplyLeftSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5.78 2.279L2.561 5.499H7.5C12.194 5.499 16 9.305 16 13.999H14.5C14.5 10.133 11.366 6.999 7.5 6.999H2.561L5.78 10.219L4.72 11.279L0.22 6.779C0.079 6.639 0 6.448 0 6.249C0 6.05 0.079 5.859 0.22 5.719L4.72 1.219L5.78 2.279Z"/>
  </svg>
);

const aDSReplyLeftIconDefinition = svgToIconDefinition(
  aDSReplyLeftSvg,
  'ads-reply-left'
);

/**![ADSReplyLeft](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik01Ljc4IDIuMjc5TDIuNTYxIDUuNDk5SDcuNUMxMi4xOTQgNS40OTkgMTYgOS4zMDUgMTYgMTMuOTk5SDE0LjVDMTQuNSAxMC4xMzMgMTEuMzY2IDYuOTk5IDcuNSA2Ljk5OUgyLjU2MUw1Ljc4IDEwLjIxOUw0LjcyIDExLjI3OUwwLjIyIDYuNzc5QzAuMDc5IDYuNjM5IDAgNi40NDggMCA2LjI0OUMwIDYuMDUgMC4wNzkgNS44NTkgMC4yMiA1LjcxOUw0LjcyIDEuMjE5TDUuNzggMi4yNzlaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSReplyLeftIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSReplyLeft';
}

export default RefIcon;
