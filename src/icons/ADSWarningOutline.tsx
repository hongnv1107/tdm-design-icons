// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSWarningOutlineSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSWarningOutline](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUuNzAxIDEuMzg0QzYuNjk2IC0wLjQzMiA5LjMwNSAtMC40MzQgMTAuMzAzIDEuMzgxTDE1LjY1MSAxMS4xMUMxNi42MTMgMTIuODYgMTUuMzQ4IDE1IDEzLjM1MSAxNUgyLjY2N0MwLjY3MiAxNSAtMC41OTQgMTIuODYyIDAuMzY1IDExLjExM0w1LjcwMSAxLjM4NFpNOC45ODggMi4xMDRDOC41NiAxLjMyNiA3LjQ0MyAxLjMyNyA3LjAxNiAyLjEwNUwxLjY4IDExLjgzNEMxLjI2OSAxMi41ODQgMS44MTIgMTMuNSAyLjY2NyAxMy41SDEzLjM1MUMxNC4yMDcgMTMuNSAxNC43NDkgMTIuNTgzIDE0LjMzNyAxMS44MzNMOC45ODggMi4xMDRaIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjI1IDlWNEg4Ljc1VjlINy4yNVoiLz48cGF0aCBkPSJNOSAxMS4yNUM5IDExLjgwMiA4LjU1MiAxMi4yNSA4IDEyLjI1QzcuNDQ4IDEyLjI1IDcgMTEuODAyIDcgMTEuMjVDNyAxMC42OTggNy40NDggMTAuMjUgOCAxMC4yNUM4LjU1MiAxMC4yNSA5IDEwLjY5OCA5IDExLjI1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSWarningOutlineIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSWarningOutline';
}

export default RefIcon;
