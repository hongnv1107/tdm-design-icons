// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSUploadSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.47 1.22C7.762 0.927 8.237 0.927 8.53 1.22L12.53 5.22L11.47 6.28L8.75 3.561V11H7.25V3.561L4.53 6.28L3.47 5.22L7.47 1.22ZM1 13V9H2.5V13C2.5 13.276 2.724 13.5 3 13.5H13C13.276 13.5 13.5 13.276 13.5 13V9H15V13C15 14.105 14.105 15 13 15H3C1.895 15 1 14.105 1 13Z"/>
  </svg>
);

const aDSUploadIconDefinition = svgToIconDefinition(
  aDSUploadSvg,
  'ads-upload'
);

/**![ADSUpload](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNy40NyAxLjIyQzcuNzYyIDAuOTI3IDguMjM3IDAuOTI3IDguNTMgMS4yMkwxMi41MyA1LjIyTDExLjQ3IDYuMjhMOC43NSAzLjU2MVYxMUg3LjI1VjMuNTYxTDQuNTMgNi4yOEwzLjQ3IDUuMjJMNy40NyAxLjIyWk0xIDEzVjlIMi41VjEzQzIuNSAxMy4yNzYgMi43MjQgMTMuNSAzIDEzLjVIMTNDMTMuMjc2IDEzLjUgMTMuNSAxMy4yNzYgMTMuNSAxM1Y5SDE1VjEzQzE1IDE0LjEwNSAxNC4xMDUgMTUgMTMgMTVIM0MxLjg5NSAxNSAxIDE0LjEwNSAxIDEzWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSUploadIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSUpload';
}

export default RefIcon;
