// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSCommentSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 3.125C0 1.675 1.175 0.5 2.625 0.5H13.375C14.825 0.5 16 1.675 16 3.125V11.375C16 12.825 14.825 14 13.375 14H4.449L1.122 15.901C0.89 16.034 0.605 16.033 0.374 15.899C0.142 15.765 0 15.517 0 15.25V3.125ZM2.625 2C2.004 2 1.5 2.504 1.5 3.125V13.958L4.051 12.5H13.375C13.996 12.5 14.5 11.996 14.5 11.375V3.125C14.5 2.504 13.996 2 13.375 2H2.625ZM12 6.5H4V5H12V6.5ZM9 9.5H4V8H9V9.5Z"/>
  </svg>
);

const aDSCommentIconDefinition = svgToIconDefinition(
  aDSCommentSvg,
  'ads-comment'
);

/**![ADSComment](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMCAzLjEyNUMwIDEuNjc1IDEuMTc1IDAuNSAyLjYyNSAwLjVIMTMuMzc1QzE0LjgyNSAwLjUgMTYgMS42NzUgMTYgMy4xMjVWMTEuMzc1QzE2IDEyLjgyNSAxNC44MjUgMTQgMTMuMzc1IDE0SDQuNDQ5TDEuMTIyIDE1LjkwMUMwLjg5IDE2LjAzNCAwLjYwNSAxNi4wMzMgMC4zNzQgMTUuODk5QzAuMTQyIDE1Ljc2NSAwIDE1LjUxNyAwIDE1LjI1VjMuMTI1Wk0yLjYyNSAyQzIuMDA0IDIgMS41IDIuNTA0IDEuNSAzLjEyNVYxMy45NThMNC4wNTEgMTIuNUgxMy4zNzVDMTMuOTk2IDEyLjUgMTQuNSAxMS45OTYgMTQuNSAxMS4zNzVWMy4xMjVDMTQuNSAyLjUwNCAxMy45OTYgMiAxMy4zNzUgMkgyLjYyNVpNMTIgNi41SDRWNUgxMlY2LjVaTTkgOS41SDRWOEg5VjkuNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSCommentIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSComment';
}

export default RefIcon;
