// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSWarningOutlineSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.701 1.384C6.696 -0.432 9.305 -0.434 10.303 1.381L15.651 11.11C16.613 12.86 15.348 15 13.351 15H2.667C0.672 15 -0.594 12.862 0.365 11.113L5.701 1.384ZM8.988 2.104C8.56 1.326 7.443 1.327 7.016 2.105L1.68 11.834C1.269 12.584 1.812 13.5 2.667 13.5H13.351C14.207 13.5 14.749 12.583 14.337 11.833L8.988 2.104Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 9V4H8.75V9H7.25Z"/><path d="M9 11.25C9 11.802 8.552 12.25 8 12.25C7.448 12.25 7 11.802 7 11.25C7 10.698 7.448 10.25 8 10.25C8.552 10.25 9 10.698 9 11.25Z"/>
  </svg>
);

const aDSWarningOutlineIconDefinition = svgToIconDefinition(
  aDSWarningOutlineSvg,
  'ads-warning-outline'
);

/**![ADSWarningOutline](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNS43MDEgMS4zODRDNi42OTYgLTAuNDMyIDkuMzA1IC0wLjQzNCAxMC4zMDMgMS4zODFMMTUuNjUxIDExLjExQzE2LjYxMyAxMi44NiAxNS4zNDggMTUgMTMuMzUxIDE1SDIuNjY3QzAuNjcyIDE1IC0wLjU5NCAxMi44NjIgMC4zNjUgMTEuMTEzTDUuNzAxIDEuMzg0Wk04Ljk4OCAyLjEwNEM4LjU2IDEuMzI2IDcuNDQzIDEuMzI3IDcuMDE2IDIuMTA1TDEuNjggMTEuODM0QzEuMjY5IDEyLjU4NCAxLjgxMiAxMy41IDIuNjY3IDEzLjVIMTMuMzUxQzE0LjIwNyAxMy41IDE0Ljc0OSAxMi41ODMgMTQuMzM3IDExLjgzM0w4Ljk4OCAyLjEwNFoiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTcuMjUgOVY0SDguNzVWOUg3LjI1WiIvPjxwYXRoIGQ9Ik05IDExLjI1QzkgMTEuODAyIDguNTUyIDEyLjI1IDggMTIuMjVDNy40NDggMTIuMjUgNyAxMS44MDIgNyAxMS4yNUM3IDEwLjY5OCA3LjQ0OCAxMC4yNSA4IDEwLjI1QzguNTUyIDEwLjI1IDkgMTAuNjk4IDkgMTEuMjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSWarningOutlineIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSWarningOutline';
}

export default RefIcon;
