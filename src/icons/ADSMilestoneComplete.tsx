// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSMilestoneCompleteSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6.737 2.466C7.522 1.826 8.681 1.872 9.414 2.604L11.749 4.94L8 8.69L6.031 6.72L4.97 7.781L7.47 10.281L7.527 10.332C7.821 10.572 8.256 10.555 8.531 10.281L12.81 6L13.396 6.586L13.534 6.738C14.174 7.523 14.128 8.682 13.396 9.414L9.414 13.397C8.633 14.177 7.366 14.178 6.585 13.397L2.603 9.414C1.822 8.634 1.823 7.367 2.603 6.586L6.585 2.604L6.737 2.466ZM14.906 3.906L12.81 6L11.749 4.94L13.845 2.845L14.906 3.906Z"/>
  </svg>
);

const aDSMilestoneCompleteIconDefinition = svgToIconDefinition(
  aDSMilestoneCompleteSvg,
  'ads-milestone-complete'
);

/**![ADSMilestoneComplete](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik02LjczNyAyLjQ2NkM3LjUyMiAxLjgyNiA4LjY4MSAxLjg3MiA5LjQxNCAyLjYwNEwxMS43NDkgNC45NEw4IDguNjlMNi4wMzEgNi43Mkw0Ljk3IDcuNzgxTDcuNDcgMTAuMjgxTDcuNTI3IDEwLjMzMkM3LjgyMSAxMC41NzIgOC4yNTYgMTAuNTU1IDguNTMxIDEwLjI4MUwxMi44MSA2TDEzLjM5NiA2LjU4NkwxMy41MzQgNi43MzhDMTQuMTc0IDcuNTIzIDE0LjEyOCA4LjY4MiAxMy4zOTYgOS40MTRMOS40MTQgMTMuMzk3QzguNjMzIDE0LjE3NyA3LjM2NiAxNC4xNzggNi41ODUgMTMuMzk3TDIuNjAzIDkuNDE0QzEuODIyIDguNjM0IDEuODIzIDcuMzY3IDIuNjAzIDYuNTg2TDYuNTg1IDIuNjA0TDYuNzM3IDIuNDY2Wk0xNC45MDYgMy45MDZMMTIuODEgNkwxMS43NDkgNC45NEwxMy44NDUgMi44NDVMMTQuOTA2IDMuOTA2WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSMilestoneCompleteIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSMilestoneComplete';
}

export default RefIcon;
