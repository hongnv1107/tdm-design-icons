// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSSubtasksSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.5 9.25C13.5 8.974 13.276 8.75 13 8.75H8.75V13C8.75 13.276 8.974 13.5 9.25 13.5H13C13.276 13.5 13.5 13.276 13.5 13V9.25ZM7.25 3C7.25 2.724 7.026 2.5 6.75 2.5H3C2.724 2.5 2.5 2.724 2.5 3V6.75C2.5 7.026 2.724 7.25 3 7.25H7.25V3ZM8.75 7.25H13C14.105 7.25 15 8.145 15 9.25V13C15 14.105 14.105 15 13 15H9.25C8.145 15 7.25 14.105 7.25 13V8.75H3C1.895 8.75 1 7.855 1 6.75V3C1 1.895 1.895 1 3 1H6.75C7.855 1 8.75 1.895 8.75 3V7.25Z"/>
  </svg>
);

const aDSSubtasksIconDefinition = svgToIconDefinition(
  aDSSubtasksSvg,
  'ads-subtasks'
);

/**![ADSSubtasks](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTMuNSA5LjI1QzEzLjUgOC45NzQgMTMuMjc2IDguNzUgMTMgOC43NUg4Ljc1VjEzQzguNzUgMTMuMjc2IDguOTc0IDEzLjUgOS4yNSAxMy41SDEzQzEzLjI3NiAxMy41IDEzLjUgMTMuMjc2IDEzLjUgMTNWOS4yNVpNNy4yNSAzQzcuMjUgMi43MjQgNy4wMjYgMi41IDYuNzUgMi41SDNDMi43MjQgMi41IDIuNSAyLjcyNCAyLjUgM1Y2Ljc1QzIuNSA3LjAyNiAyLjcyNCA3LjI1IDMgNy4yNUg3LjI1VjNaTTguNzUgNy4yNUgxM0MxNC4xMDUgNy4yNSAxNSA4LjE0NSAxNSA5LjI1VjEzQzE1IDE0LjEwNSAxNC4xMDUgMTUgMTMgMTVIOS4yNUM4LjE0NSAxNSA3LjI1IDE0LjEwNSA3LjI1IDEzVjguNzVIM0MxLjg5NSA4Ljc1IDEgNy44NTUgMSA2Ljc1VjNDMSAxLjg5NSAxLjg5NSAxIDMgMUg2Ljc1QzcuODU1IDEgOC43NSAxLjg5NSA4Ljc1IDNWNy4yNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSSubtasksIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSSubtasks';
}

export default RefIcon;
