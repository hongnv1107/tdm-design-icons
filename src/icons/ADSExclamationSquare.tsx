// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSExclamationSquareSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.5 3C13.5 2.724 13.276 2.5 13 2.5H3C2.724 2.5 2.5 2.724 2.5 3V13C2.5 13.276 2.724 13.5 3 13.5H13C13.276 13.5 13.5 13.276 13.5 13V3ZM8.75 4V9H7.25V4H8.75ZM15 13C15 14.105 14.105 15 13 15H3C1.895 15 1 14.105 1 13V3C1 1.895 1.895 1 3 1H13C14.105 1 15 1.895 15 3V13Z"/><path d="M9 11.25C9 11.802 8.552 12.25 8 12.25C7.448 12.25 7 11.802 7 11.25C7 10.698 7.448 10.25 8 10.25C8.552 10.25 9 10.698 9 11.25Z"/>
  </svg>
);

const aDSExclamationSquareIconDefinition = svgToIconDefinition(
  aDSExclamationSquareSvg,
  'ads-exclamation-square'
);

/**![ADSExclamationSquare](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTMuNSAzQzEzLjUgMi43MjQgMTMuMjc2IDIuNSAxMyAyLjVIM0MyLjcyNCAyLjUgMi41IDIuNzI0IDIuNSAzVjEzQzIuNSAxMy4yNzYgMi43MjQgMTMuNSAzIDEzLjVIMTNDMTMuMjc2IDEzLjUgMTMuNSAxMy4yNzYgMTMuNSAxM1YzWk04Ljc1IDRWOUg3LjI1VjRIOC43NVpNMTUgMTNDMTUgMTQuMTA1IDE0LjEwNSAxNSAxMyAxNUgzQzEuODk1IDE1IDEgMTQuMTA1IDEgMTNWM0MxIDEuODk1IDEuODk1IDEgMyAxSDEzQzE0LjEwNSAxIDE1IDEuODk1IDE1IDNWMTNaIi8+PHBhdGggZD0iTTkgMTEuMjVDOSAxMS44MDIgOC41NTIgMTIuMjUgOCAxMi4yNUM3LjQ0OCAxMi4yNSA3IDExLjgwMiA3IDExLjI1QzcgMTAuNjk4IDcuNDQ4IDEwLjI1IDggMTAuMjVDOC41NTIgMTAuMjUgOSAxMC42OTggOSAxMS4yNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSExclamationSquareIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSExclamationSquare';
}

export default RefIcon;
