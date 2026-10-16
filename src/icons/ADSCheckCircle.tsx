// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSCheckCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.5 8C14.5 4.41 11.59 1.5 8 1.5C4.41 1.5 1.5 4.41 1.5 8C1.5 11.59 4.41 14.5 8 14.5C11.59 14.5 14.5 11.59 14.5 8ZM12.326 5.48L7.326 11.481C7.184 11.651 6.973 11.75 6.75 11.75C6.528 11.75 6.316 11.651 6.174 11.481L3.674 8.48L4.826 7.52L6.75 9.828L11.174 4.52L12.326 5.48ZM16 8C16 12.418 12.418 16 8 16C3.582 16 0 12.418 0 8C0 3.582 3.582 0 8 0C12.418 0 16 3.582 16 8Z"/>
  </svg>
);

const aDSCheckCircleIconDefinition = svgToIconDefinition(
  aDSCheckCircleSvg,
  'ads-check-circle'
);

/**![ADSCheckCircle](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xNC41IDhDMTQuNSA0LjQxIDExLjU5IDEuNSA4IDEuNUM0LjQxIDEuNSAxLjUgNC40MSAxLjUgOEMxLjUgMTEuNTkgNC40MSAxNC41IDggMTQuNUMxMS41OSAxNC41IDE0LjUgMTEuNTkgMTQuNSA4Wk0xMi4zMjYgNS40OEw3LjMyNiAxMS40ODFDNy4xODQgMTEuNjUxIDYuOTczIDExLjc1IDYuNzUgMTEuNzVDNi41MjggMTEuNzUgNi4zMTYgMTEuNjUxIDYuMTc0IDExLjQ4MUwzLjY3NCA4LjQ4TDQuODI2IDcuNTJMNi43NSA5LjgyOEwxMS4xNzQgNC41MkwxMi4zMjYgNS40OFpNMTYgOEMxNiAxMi40MTggMTIuNDE4IDE2IDggMTZDMy41ODIgMTYgMCAxMi40MTggMCA4QzAgMy41ODIgMy41ODIgMCA4IDBDMTIuNDE4IDAgMTYgMy41ODIgMTYgOFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSCheckCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSCheckCircle';
}

export default RefIcon;
