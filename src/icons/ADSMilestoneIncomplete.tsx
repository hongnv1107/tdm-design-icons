// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSMilestoneIncompleteSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSMilestoneIncomplete](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNNi41ODYgMi42MDRDNy4zNjcgMS44MjMgOC42MzMgMS44MjMgOS40MTQgMi42MDRMMTMuMzk2IDYuNTg2QzE0LjE3NyA3LjM2NyAxNC4xNzcgOC42MzMgMTMuMzk2IDkuNDE0TDkuNDE0IDEzLjM5N0M4LjYzMyAxNC4xNzcgNy4zNjcgMTQuMTc3IDYuNTg2IDEzLjM5N0wyLjYwMyA5LjQxNEMxLjgyMiA4LjYzMyAxLjgyMiA3LjM2NyAyLjYwMyA2LjU4Nkw2LjU4NiAyLjYwNFpNOC4zNTMgMy42NjRDOC4xNTggMy40NjkgNy44NDEgMy40NjkgNy42NDYgMy42NjRMMy42NjQgNy42NDZDMy40NjkgNy44NDIgMy40NjkgOC4xNTggMy42NjQgOC4zNTRMNy42NDYgMTIuMzM2QzcuODQxIDEyLjUzMSA4LjE1OCAxMi41MzEgOC4zNTMgMTIuMzM2TDEyLjMzNiA4LjM1NEMxMi41MzEgOC4xNTggMTIuNTMxIDcuODQyIDEyLjMzNiA3LjY0Nkw4LjM1MyAzLjY2NFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSMilestoneIncompleteIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSMilestoneIncomplete';
}

export default RefIcon;
