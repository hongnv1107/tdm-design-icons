// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSFocusAreaSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 13V10H2.5V13C2.5 13.276 2.724 13.5 3 13.5H6V15H3C1.895 15 1 14.105 1 13ZM13.5 13V10H15V13C15 14.105 14.105 15 13 15H10V13.5H13C13.276 13.5 13.5 13.276 13.5 13ZM9.75 8C9.75 7.034 8.967 6.25 8 6.25C7.034 6.25 6.25 7.034 6.25 8C6.25 8.967 7.034 9.75 8 9.75C8.967 9.75 9.75 8.967 9.75 8ZM1 3C1 1.895 1.895 1 3 1H6V2.5H3C2.724 2.5 2.5 2.724 2.5 3V6H1V3ZM13.5 3C13.5 2.724 13.276 2.5 13 2.5H10V1H13C14.105 1 15 1.895 15 3V6H13.5V3ZM11.25 8C11.25 9.795 9.795 11.25 8 11.25C6.205 11.25 4.75 9.795 4.75 8C4.75 6.205 6.205 4.75 8 4.75C9.795 4.75 11.25 6.205 11.25 8Z"/>
  </svg>
);

const aDSFocusAreaIconDefinition = svgToIconDefinition(
  aDSFocusAreaSvg,
  'ads-focus-area'
);

/**![ADSFocusArea](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMSAxM1YxMEgyLjVWMTNDMi41IDEzLjI3NiAyLjcyNCAxMy41IDMgMTMuNUg2VjE1SDNDMS44OTUgMTUgMSAxNC4xMDUgMSAxM1pNMTMuNSAxM1YxMEgxNVYxM0MxNSAxNC4xMDUgMTQuMTA1IDE1IDEzIDE1SDEwVjEzLjVIMTNDMTMuMjc2IDEzLjUgMTMuNSAxMy4yNzYgMTMuNSAxM1pNOS43NSA4QzkuNzUgNy4wMzQgOC45NjcgNi4yNSA4IDYuMjVDNy4wMzQgNi4yNSA2LjI1IDcuMDM0IDYuMjUgOEM2LjI1IDguOTY3IDcuMDM0IDkuNzUgOCA5Ljc1QzguOTY3IDkuNzUgOS43NSA4Ljk2NyA5Ljc1IDhaTTEgM0MxIDEuODk1IDEuODk1IDEgMyAxSDZWMi41SDNDMi43MjQgMi41IDIuNSAyLjcyNCAyLjUgM1Y2SDFWM1pNMTMuNSAzQzEzLjUgMi43MjQgMTMuMjc2IDIuNSAxMyAyLjVIMTBWMUgxM0MxNC4xMDUgMSAxNSAxLjg5NSAxNSAzVjZIMTMuNVYzWk0xMS4yNSA4QzExLjI1IDkuNzk1IDkuNzk1IDExLjI1IDggMTEuMjVDNi4yMDUgMTEuMjUgNC43NSA5Ljc5NSA0Ljc1IDhDNC43NSA2LjIwNSA2LjIwNSA0Ljc1IDggNC43NUM5Ljc5NSA0Ljc1IDExLjI1IDYuMjA1IDExLjI1IDhaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSFocusAreaIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSFocusArea';
}

export default RefIcon;
