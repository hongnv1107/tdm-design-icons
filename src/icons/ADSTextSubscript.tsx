// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTextSubscriptSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6.256 8L9.948 14H8.187L5.396 9.465L2.779 14H1.048L4.509 8L1.048 2H2.779L5.396 6.534L8.187 2H9.948L6.256 8Z"/><path d="M13.75 8.5L13.827 8.504C14.205 8.543 14.5 8.862 14.5 9.25V16H13V10H12V8.5H13.75Z"/>
  </svg>
);

const aDSTextSubscriptIconDefinition = svgToIconDefinition(
  aDSTextSubscriptSvg,
  'ads-text-subscript'
);

/**![ADSTextSubscript](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik02LjI1NiA4TDkuOTQ4IDE0SDguMTg3TDUuMzk2IDkuNDY1TDIuNzc5IDE0SDEuMDQ4TDQuNTA5IDhMMS4wNDggMkgyLjc3OUw1LjM5NiA2LjUzNEw4LjE4NyAySDkuOTQ4TDYuMjU2IDhaIi8+PHBhdGggZD0iTTEzLjc1IDguNUwxMy44MjcgOC41MDRDMTQuMjA1IDguNTQzIDE0LjUgOC44NjIgMTQuNSA5LjI1VjE2SDEzVjEwSDEyVjguNUgxMy43NVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTextSubscriptIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTextSubscript';
}

export default RefIcon;
