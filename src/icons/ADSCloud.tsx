// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSCloudSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.5 10C14.5 8.867 13.746 7.909 12.71 7.603C12.437 7.522 12.233 7.293 12.184 7.013C11.835 5.017 10.095 3.5 8 3.5C5.77 3.5 3.942 5.219 3.766 7.403C3.74 7.724 3.512 7.992 3.2 8.07C2.222 8.316 1.5 9.199 1.5 10.25C1.5 11.493 2.507 12.5 3.75 12.5H12C13.381 12.5 14.5 11.381 14.5 10ZM16 10C16 12.209 14.209 14 12 14H3.75C1.679 14 0 12.321 0 10.25C0 8.679 0.966 7.341 2.333 6.782C2.793 4.067 5.154 2 8 2C10.684 2 12.934 3.838 13.568 6.323C14.997 6.933 16 8.347 16 10Z"/>
  </svg>
);

const aDSCloudIconDefinition = svgToIconDefinition(
  aDSCloudSvg,
  'ads-cloud'
);

/**![ADSCloud](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xNC41IDEwQzE0LjUgOC44NjcgMTMuNzQ2IDcuOTA5IDEyLjcxIDcuNjAzQzEyLjQzNyA3LjUyMiAxMi4yMzMgNy4yOTMgMTIuMTg0IDcuMDEzQzExLjgzNSA1LjAxNyAxMC4wOTUgMy41IDggMy41QzUuNzcgMy41IDMuOTQyIDUuMjE5IDMuNzY2IDcuNDAzQzMuNzQgNy43MjQgMy41MTIgNy45OTIgMy4yIDguMDdDMi4yMjIgOC4zMTYgMS41IDkuMTk5IDEuNSAxMC4yNUMxLjUgMTEuNDkzIDIuNTA3IDEyLjUgMy43NSAxMi41SDEyQzEzLjM4MSAxMi41IDE0LjUgMTEuMzgxIDE0LjUgMTBaTTE2IDEwQzE2IDEyLjIwOSAxNC4yMDkgMTQgMTIgMTRIMy43NUMxLjY3OSAxNCAwIDEyLjMyMSAwIDEwLjI1QzAgOC42NzkgMC45NjYgNy4zNDEgMi4zMzMgNi43ODJDMi43OTMgNC4wNjcgNS4xNTQgMiA4IDJDMTAuNjg0IDIgMTIuOTM0IDMuODM4IDEzLjU2OCA2LjMyM0MxNC45OTcgNi45MzMgMTYgOC4zNDcgMTYgMTBaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSCloudIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSCloud';
}

export default RefIcon;
