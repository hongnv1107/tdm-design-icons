// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSMilestoneIncompleteSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6.586 2.604C7.367 1.823 8.633 1.823 9.414 2.604L13.396 6.586C14.177 7.367 14.177 8.633 13.396 9.414L9.414 13.397C8.633 14.177 7.367 14.177 6.586 13.397L2.603 9.414C1.822 8.633 1.822 7.367 2.603 6.586L6.586 2.604ZM8.353 3.664C8.158 3.469 7.841 3.469 7.646 3.664L3.664 7.646C3.469 7.842 3.469 8.158 3.664 8.354L7.646 12.336C7.841 12.531 8.158 12.531 8.353 12.336L12.336 8.354C12.531 8.158 12.531 7.842 12.336 7.646L8.353 3.664Z"/>
  </svg>
);

const aDSMilestoneIncompleteIconDefinition = svgToIconDefinition(
  aDSMilestoneIncompleteSvg,
  'ads-milestone-incomplete'
);

/**![ADSMilestoneIncomplete](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik02LjU4NiAyLjYwNEM3LjM2NyAxLjgyMyA4LjYzMyAxLjgyMyA5LjQxNCAyLjYwNEwxMy4zOTYgNi41ODZDMTQuMTc3IDcuMzY3IDE0LjE3NyA4LjYzMyAxMy4zOTYgOS40MTRMOS40MTQgMTMuMzk3QzguNjMzIDE0LjE3NyA3LjM2NyAxNC4xNzcgNi41ODYgMTMuMzk3TDIuNjAzIDkuNDE0QzEuODIyIDguNjMzIDEuODIyIDcuMzY3IDIuNjAzIDYuNTg2TDYuNTg2IDIuNjA0Wk04LjM1MyAzLjY2NEM4LjE1OCAzLjQ2OSA3Ljg0MSAzLjQ2OSA3LjY0NiAzLjY2NEwzLjY2NCA3LjY0NkMzLjQ2OSA3Ljg0MiAzLjQ2OSA4LjE1OCAzLjY2NCA4LjM1NEw3LjY0NiAxMi4zMzZDNy44NDEgMTIuNTMxIDguMTU4IDEyLjUzMSA4LjM1MyAxMi4zMzZMMTIuMzM2IDguMzU0QzEyLjUzMSA4LjE1OCAxMi41MzEgNy44NDIgMTIuMzM2IDcuNjQ2TDguMzUzIDMuNjY0WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSMilestoneIncompleteIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSMilestoneIncomplete';
}

export default RefIcon;
