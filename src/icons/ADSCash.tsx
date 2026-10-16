// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSCashSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0.75 2C0.336 2 0 2.336 0 2.75V13.25C0 13.664 0.336 14 0.75 14H15.25C15.664 14 16 13.664 16 13.25V2.75C16 2.336 15.664 2 15.25 2H0.75ZM14.5 12.5H1.5V3.5H14.5V12.5ZM12 9V11.5H13.5V9H12ZM7 8C7 6.985 7.612 6.5 8 6.5C8.388 6.5 9 6.985 9 8C9 9.015 8.388 9.5 8 9.5C7.612 9.5 7 9.015 7 8ZM2.5 4.5V7H4V4.5H2.5ZM5.5 8C5.5 9.471 6.455 11 8 11C9.545 11 10.5 9.471 10.5 8C10.5 6.53 9.545 5 8 5C6.455 5 5.5 6.53 5.5 8Z"/>
  </svg>
);

const aDSCashIconDefinition = svgToIconDefinition(
  aDSCashSvg,
  'ads-cash'
);

/**![ADSCash](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0wLjc1IDJDMC4zMzYgMiAwIDIuMzM2IDAgMi43NVYxMy4yNUMwIDEzLjY2NCAwLjMzNiAxNCAwLjc1IDE0SDE1LjI1QzE1LjY2NCAxNCAxNiAxMy42NjQgMTYgMTMuMjVWMi43NUMxNiAyLjMzNiAxNS42NjQgMiAxNS4yNSAySDAuNzVaTTE0LjUgMTIuNUgxLjVWMy41SDE0LjVWMTIuNVpNMTIgOVYxMS41SDEzLjVWOUgxMlpNNyA4QzcgNi45ODUgNy42MTIgNi41IDggNi41QzguMzg4IDYuNSA5IDYuOTg1IDkgOEM5IDkuMDE1IDguMzg4IDkuNSA4IDkuNUM3LjYxMiA5LjUgNyA5LjAxNSA3IDhaTTIuNSA0LjVWN0g0VjQuNUgyLjVaTTUuNSA4QzUuNSA5LjQ3MSA2LjQ1NSAxMSA4IDExQzkuNTQ1IDExIDEwLjUgOS40NzEgMTAuNSA4QzEwLjUgNi41MyA5LjU0NSA1IDggNUM2LjQ1NSA1IDUuNSA2LjUzIDUuNSA4WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSCashIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSCash';
}

export default RefIcon;
