// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSCheckMarkSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.959 3.971L6.709 12.971C6.568 13.146 6.354 13.249 6.129 13.25C5.903 13.251 5.689 13.151 5.546 12.977L2.046 8.727L3.204 7.773L6.118 11.312L12.791 3.029L13.959 3.971Z"/>
  </svg>
);

const aDSCheckMarkIconDefinition = svgToIconDefinition(
  aDSCheckMarkSvg,
  'ads-check-mark'
);

/**![ADSCheckMark](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xMy45NTkgMy45NzFMNi43MDkgMTIuOTcxQzYuNTY4IDEzLjE0NiA2LjM1NCAxMy4yNDkgNi4xMjkgMTMuMjVDNS45MDMgMTMuMjUxIDUuNjg5IDEzLjE1MSA1LjU0NiAxMi45NzdMMi4wNDYgOC43MjdMMy4yMDQgNy43NzNMNi4xMTggMTEuMzEyTDEyLjc5MSAzLjAyOUwxMy45NTkgMy45NzFaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSCheckMarkIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSCheckMark';
}

export default RefIcon;
