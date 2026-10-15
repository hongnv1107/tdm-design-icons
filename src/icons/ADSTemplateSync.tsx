// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTemplateSyncSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.5 3C13.5 2.724 13.276 2.5 13 2.5H3C2.724 2.5 2.5 2.724 2.5 3V4.5H13.5V3ZM2.5 13C2.5 13.276 2.724 13.5 3 13.5H5V6H2.5V13ZM15 8H13.5V6H6.5V13.5H8V15H3C1.895 15 1 14.105 1 13V3C1 1.895 1.895 1 3 1H13C14.105 1 15 1.895 15 3V8Z"/><path d="M11.776 9.168C12.071 8.928 12.506 8.945 12.78 9.22L15.53 11.97L14.47 13.03L13 11.561V16H11.5V11.561L10.03 13.03L8.97 11.97L11.72 9.22L11.776 9.168Z"/>
  </svg>
);

const aDSTemplateSyncIconDefinition = svgToIconDefinition(
  aDSTemplateSyncSvg,
  'ads-template-sync'
);

/**![ADSTemplateSync](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTMuNSAzQzEzLjUgMi43MjQgMTMuMjc2IDIuNSAxMyAyLjVIM0MyLjcyNCAyLjUgMi41IDIuNzI0IDIuNSAzVjQuNUgxMy41VjNaTTIuNSAxM0MyLjUgMTMuMjc2IDIuNzI0IDEzLjUgMyAxMy41SDVWNkgyLjVWMTNaTTE1IDhIMTMuNVY2SDYuNVYxMy41SDhWMTVIM0MxLjg5NSAxNSAxIDE0LjEwNSAxIDEzVjNDMSAxLjg5NSAxLjg5NSAxIDMgMUgxM0MxNC4xMDUgMSAxNSAxLjg5NSAxNSAzVjhaIi8+PHBhdGggZD0iTTExLjc3NiA5LjE2OEMxMi4wNzEgOC45MjggMTIuNTA2IDguOTQ1IDEyLjc4IDkuMjJMMTUuNTMgMTEuOTdMMTQuNDcgMTMuMDNMMTMgMTEuNTYxVjE2SDExLjVWMTEuNTYxTDEwLjAzIDEzLjAzTDguOTcgMTEuOTdMMTEuNzIgOS4yMkwxMS43NzYgOS4xNjhaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTemplateSyncIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTemplateSync';
}

export default RefIcon;
