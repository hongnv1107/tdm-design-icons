// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSSkipSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9 11C9 10.724 8.776 10.5 8.5 10.5H7.5C7.224 10.5 7 10.724 7 11V12C7 12.276 7.224 12.5 7.5 12.5H8.5C8.776 12.5 9 12.276 9 12V11ZM10.5 12C10.5 13.105 9.605 14 8.5 14H7.5C6.395 14 5.5 13.105 5.5 12V11C5.5 9.895 6.395 9 7.5 9H8.5C9.605 9 10.5 9.895 10.5 11V12Z"/><path d="M0 10.25C0 5.832 3.582 2.25 8 2.25C10.679 2.25 13.049 3.567 14.5 5.587V2.5H16V7.25C16 7.664 15.664 8 15.25 8H10.5V6.5H13.309C12.131 4.836 10.192 3.75 8 3.75C4.41 3.75 1.5 6.66 1.5 10.25V11H0V10.25Z"/>
  </svg>
);

const aDSSkipIconDefinition = svgToIconDefinition(
  aDSSkipSvg,
  'ads-skip'
);

/**![ADSSkip](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNOSAxMUM5IDEwLjcyNCA4Ljc3NiAxMC41IDguNSAxMC41SDcuNUM3LjIyNCAxMC41IDcgMTAuNzI0IDcgMTFWMTJDNyAxMi4yNzYgNy4yMjQgMTIuNSA3LjUgMTIuNUg4LjVDOC43NzYgMTIuNSA5IDEyLjI3NiA5IDEyVjExWk0xMC41IDEyQzEwLjUgMTMuMTA1IDkuNjA1IDE0IDguNSAxNEg3LjVDNi4zOTUgMTQgNS41IDEzLjEwNSA1LjUgMTJWMTFDNS41IDkuODk1IDYuMzk1IDkgNy41IDlIOC41QzkuNjA1IDkgMTAuNSA5Ljg5NSAxMC41IDExVjEyWiIvPjxwYXRoIGQ9Ik0wIDEwLjI1QzAgNS44MzIgMy41ODIgMi4yNSA4IDIuMjVDMTAuNjc5IDIuMjUgMTMuMDQ5IDMuNTY3IDE0LjUgNS41ODdWMi41SDE2VjcuMjVDMTYgNy42NjQgMTUuNjY0IDggMTUuMjUgOEgxMC41VjYuNUgxMy4zMDlDMTIuMTMxIDQuODM2IDEwLjE5MiAzLjc1IDggMy43NUM0LjQxIDMuNzUgMS41IDYuNjYgMS41IDEwLjI1VjExSDBWMTAuMjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSSkipIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSSkip';
}

export default RefIcon;
