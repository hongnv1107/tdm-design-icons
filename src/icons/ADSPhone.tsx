// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSPhoneSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 1.75C1 1.336 1.336 1 1.75 1H5.25C5.585 1 5.879 1.222 5.971 1.544L6.792 4.418C6.983 5.084 6.762 5.8 6.23 6.243L4.29 7.86C5.265 9.411 6.589 10.735 8.14 11.71L9.757 9.77C10.2 9.238 10.916 9.017 11.582 9.208L14.456 10.029C14.778 10.121 15 10.415 15 10.75V14.25C15 14.664 14.664 15 14.25 15C11.984 15 9.828 14.391 7.941 13.336C5.738 12.104 3.896 10.262 2.664 8.059C1.609 6.172 1 4.016 1 1.75ZM9.484 12.44C10.734 13.018 12.09 13.379 13.5 13.475V11.316L11.17 10.65C11.075 10.623 10.973 10.654 10.909 10.73L9.484 12.44ZM3.56 6.516L5.27 5.091C5.346 5.027 5.377 4.925 5.35 4.83L4.684 2.5H2.525C2.621 3.91 2.982 5.266 3.56 6.516Z"/>
  </svg>
);

const aDSPhoneIconDefinition = svgToIconDefinition(
  aDSPhoneSvg,
  'ads-phone'
);

/**![ADSPhone](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMSAxLjc1QzEgMS4zMzYgMS4zMzYgMSAxLjc1IDFINS4yNUM1LjU4NSAxIDUuODc5IDEuMjIyIDUuOTcxIDEuNTQ0TDYuNzkyIDQuNDE4QzYuOTgzIDUuMDg0IDYuNzYyIDUuOCA2LjIzIDYuMjQzTDQuMjkgNy44NkM1LjI2NSA5LjQxMSA2LjU4OSAxMC43MzUgOC4xNCAxMS43MUw5Ljc1NyA5Ljc3QzEwLjIgOS4yMzggMTAuOTE2IDkuMDE3IDExLjU4MiA5LjIwOEwxNC40NTYgMTAuMDI5QzE0Ljc3OCAxMC4xMjEgMTUgMTAuNDE1IDE1IDEwLjc1VjE0LjI1QzE1IDE0LjY2NCAxNC42NjQgMTUgMTQuMjUgMTVDMTEuOTg0IDE1IDkuODI4IDE0LjM5MSA3Ljk0MSAxMy4zMzZDNS43MzggMTIuMTA0IDMuODk2IDEwLjI2MiAyLjY2NCA4LjA1OUMxLjYwOSA2LjE3MiAxIDQuMDE2IDEgMS43NVpNOS40ODQgMTIuNDRDMTAuNzM0IDEzLjAxOCAxMi4wOSAxMy4zNzkgMTMuNSAxMy40NzVWMTEuMzE2TDExLjE3IDEwLjY1QzExLjA3NSAxMC42MjMgMTAuOTczIDEwLjY1NCAxMC45MDkgMTAuNzNMOS40ODQgMTIuNDRaTTMuNTYgNi41MTZMNS4yNyA1LjA5MUM1LjM0NiA1LjAyNyA1LjM3NyA0LjkyNSA1LjM1IDQuODNMNC42ODQgMi41SDIuNTI1QzIuNjIxIDMuOTEgMi45ODIgNS4yNjYgMy41NiA2LjUxNloiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSPhoneIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSPhone';
}

export default RefIcon;
