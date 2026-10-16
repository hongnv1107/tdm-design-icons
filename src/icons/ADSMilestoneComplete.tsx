// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSMilestoneCompleteSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSMilestoneComplete](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNNi43MzcgMi40NjZDNy41MjIgMS44MjYgOC42ODEgMS44NzIgOS40MTQgMi42MDRMMTEuNzQ5IDQuOTRMOCA4LjY5TDYuMDMxIDYuNzJMNC45NyA3Ljc4MUw3LjQ3IDEwLjI4MUw3LjUyNyAxMC4zMzJDNy44MjEgMTAuNTcyIDguMjU2IDEwLjU1NSA4LjUzMSAxMC4yODFMMTIuODEgNkwxMy4zOTYgNi41ODZMMTMuNTM0IDYuNzM4QzE0LjE3NCA3LjUyMyAxNC4xMjggOC42ODIgMTMuMzk2IDkuNDE0TDkuNDE0IDEzLjM5N0M4LjYzMyAxNC4xNzcgNy4zNjYgMTQuMTc4IDYuNTg1IDEzLjM5N0wyLjYwMyA5LjQxNEMxLjgyMiA4LjYzNCAxLjgyMyA3LjM2NyAyLjYwMyA2LjU4Nkw2LjU4NSAyLjYwNEw2LjczNyAyLjQ2NlpNMTQuOTA2IDMuOTA2TDEyLjgxIDZMMTEuNzQ5IDQuOTRMMTMuODQ1IDIuODQ1TDE0LjkwNiAzLjkwNloiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSMilestoneCompleteIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSMilestoneComplete';
}

export default RefIcon;
