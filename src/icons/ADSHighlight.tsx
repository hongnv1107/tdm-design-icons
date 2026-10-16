// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSHighlightSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.516 0.31C11.063 -0.072 11.804 -0.006 12.276 0.465L13.535 1.724C14.006 2.196 14.072 2.937 13.69 3.484L9.365 9.679C9.276 9.807 9.149 9.904 9.002 9.956L5.502 11.206C5.229 11.304 4.925 11.235 4.72 11.03L4.625 10.936L4.03 11.53C3.737 11.823 3.263 11.823 2.97 11.53L2.47 11.03C2.177 10.738 2.177 10.263 2.47 9.97L3.064 9.375L2.97 9.28C2.765 9.075 2.696 8.771 2.794 8.498L4.044 4.998C4.096 4.851 4.193 4.724 4.321 4.635L10.516 0.31ZM11.289 1.6L5.913 5.353L8.647 8.087L12.4 2.711L11.289 1.6ZM7.382 8.942L5.058 6.618L4.366 8.555L5.445 9.634L7.382 8.942Z"/>
  </svg>
);

const aDSHighlightIconDefinition = svgToIconDefinition(
  aDSHighlightSvg,
  'ads-highlight'
);

/**![ADSHighlight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTAuNTE2IDAuMzFDMTEuMDYzIC0wLjA3MiAxMS44MDQgLTAuMDA2IDEyLjI3NiAwLjQ2NUwxMy41MzUgMS43MjRDMTQuMDA2IDIuMTk2IDE0LjA3MiAyLjkzNyAxMy42OSAzLjQ4NEw5LjM2NSA5LjY3OUM5LjI3NiA5LjgwNyA5LjE0OSA5LjkwNCA5LjAwMiA5Ljk1Nkw1LjUwMiAxMS4yMDZDNS4yMjkgMTEuMzA0IDQuOTI1IDExLjIzNSA0LjcyIDExLjAzTDQuNjI1IDEwLjkzNkw0LjAzIDExLjUzQzMuNzM3IDExLjgyMyAzLjI2MyAxMS44MjMgMi45NyAxMS41M0wyLjQ3IDExLjAzQzIuMTc3IDEwLjczOCAyLjE3NyAxMC4yNjMgMi40NyA5Ljk3TDMuMDY0IDkuMzc1TDIuOTcgOS4yOEMyLjc2NSA5LjA3NSAyLjY5NiA4Ljc3MSAyLjc5NCA4LjQ5OEw0LjA0NCA0Ljk5OEM0LjA5NiA0Ljg1MSA0LjE5MyA0LjcyNCA0LjMyMSA0LjYzNUwxMC41MTYgMC4zMVpNMTEuMjg5IDEuNkw1LjkxMyA1LjM1M0w4LjY0NyA4LjA4N0wxMi40IDIuNzExTDExLjI4OSAxLjZaTTcuMzgyIDguOTQyTDUuMDU4IDYuNjE4TDQuMzY2IDguNTU1TDUuNDQ1IDkuNjM0TDcuMzgyIDguOTQyWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSHighlightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSHighlight';
}

export default RefIcon;
