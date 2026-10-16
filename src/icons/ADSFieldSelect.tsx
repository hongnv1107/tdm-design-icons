// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSFieldSelectSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.5 8C14.5 4.41 11.59 1.5 8 1.5C4.41 1.5 1.5 4.41 1.5 8C1.5 11.59 4.41 14.5 8 14.5C11.59 14.5 14.5 11.59 14.5 8ZM16 8C16 12.418 12.418 16 8 16C3.582 16 0 12.418 0 8C0 3.582 3.582 0 8 0C12.418 0 16 3.582 16 8Z"/><path d="M12.031 7.279L8.531 10.779C8.238 11.072 7.763 11.072 7.47 10.779L3.97 7.279L5.031 6.219L8 9.188L10.97 6.219L12.031 7.279Z"/>
  </svg>
);

const aDSFieldSelectIconDefinition = svgToIconDefinition(
  aDSFieldSelectSvg,
  'ads-field-select'
);

/**![ADSFieldSelect](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xNC41IDhDMTQuNSA0LjQxIDExLjU5IDEuNSA4IDEuNUM0LjQxIDEuNSAxLjUgNC40MSAxLjUgOEMxLjUgMTEuNTkgNC40MSAxNC41IDggMTQuNUMxMS41OSAxNC41IDE0LjUgMTEuNTkgMTQuNSA4Wk0xNiA4QzE2IDEyLjQxOCAxMi40MTggMTYgOCAxNkMzLjU4MiAxNiAwIDEyLjQxOCAwIDhDMCAzLjU4MiAzLjU4MiAwIDggMEMxMi40MTggMCAxNiAzLjU4MiAxNiA4WiIvPjxwYXRoIGQ9Ik0xMi4wMzEgNy4yNzlMOC41MzEgMTAuNzc5QzguMjM4IDExLjA3MiA3Ljc2MyAxMS4wNzIgNy40NyAxMC43NzlMMy45NyA3LjI3OUw1LjAzMSA2LjIxOUw4IDkuMTg4TDEwLjk3IDYuMjE5TDEyLjAzMSA3LjI3OVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSFieldSelectIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSFieldSelect';
}

export default RefIcon;
