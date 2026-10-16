// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSMarkdownSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1.25 3.5C1.543 3.5 1.809 3.671 1.932 3.938L4 8.45L6.068 3.938L6.12 3.842C6.257 3.631 6.493 3.5 6.75 3.5H7.25C7.664 3.5 8 3.836 8 4.25V12.5H6.5V6.595L4.682 10.563C4.559 10.829 4.293 11 4 11C3.707 11 3.441 10.829 3.318 10.563L1.5 6.595V12.5H0V4.25C0 3.836 0.336 3.5 0.75 3.5H1.25ZM13 3.5V9.611L14.664 7.531L15.836 8.469L12.836 12.219C12.694 12.397 12.478 12.5 12.25 12.5C12.022 12.5 11.806 12.397 11.664 12.219L8.664 8.469L9.836 7.531L11.5 9.611V3.5H13Z"/>
  </svg>
);

const aDSMarkdownIconDefinition = svgToIconDefinition(
  aDSMarkdownSvg,
  'ads-markdown'
);

/**![ADSMarkdown](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMS4yNSAzLjVDMS41NDMgMy41IDEuODA5IDMuNjcxIDEuOTMyIDMuOTM4TDQgOC40NUw2LjA2OCAzLjkzOEw2LjEyIDMuODQyQzYuMjU3IDMuNjMxIDYuNDkzIDMuNSA2Ljc1IDMuNUg3LjI1QzcuNjY0IDMuNSA4IDMuODM2IDggNC4yNVYxMi41SDYuNVY2LjU5NUw0LjY4MiAxMC41NjNDNC41NTkgMTAuODI5IDQuMjkzIDExIDQgMTFDMy43MDcgMTEgMy40NDEgMTAuODI5IDMuMzE4IDEwLjU2M0wxLjUgNi41OTVWMTIuNUgwVjQuMjVDMCAzLjgzNiAwLjMzNiAzLjUgMC43NSAzLjVIMS4yNVpNMTMgMy41VjkuNjExTDE0LjY2NCA3LjUzMUwxNS44MzYgOC40NjlMMTIuODM2IDEyLjIxOUMxMi42OTQgMTIuMzk3IDEyLjQ3OCAxMi41IDEyLjI1IDEyLjVDMTIuMDIyIDEyLjUgMTEuODA2IDEyLjM5NyAxMS42NjQgMTIuMjE5TDguNjY0IDguNDY5TDkuODM2IDcuNTMxTDExLjUgOS42MTFWMy41SDEzWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSMarkdownIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSMarkdown';
}

export default RefIcon;
