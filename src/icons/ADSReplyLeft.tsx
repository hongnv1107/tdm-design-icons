// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSReplyLeftSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5.78 2.279L2.561 5.499H7.5C12.194 5.499 16 9.305 16 13.999H14.5C14.5 10.133 11.366 6.999 7.5 6.999H2.561L5.78 10.219L4.72 11.279L0.22 6.779C0.079 6.639 0 6.448 0 6.249C0 6.05 0.079 5.859 0.22 5.719L4.72 1.219L5.78 2.279Z"/>
  </svg>
);

const aDSReplyLeftIconDefinition = svgToIconDefinition(
  aDSReplyLeftSvg,
  'ads-reply-left'
);

/**![ADSReplyLeft](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNNS43OCAyLjI3OUwyLjU2MSA1LjQ5OUg3LjVDMTIuMTk0IDUuNDk5IDE2IDkuMzA1IDE2IDEzLjk5OUgxNC41QzE0LjUgMTAuMTMzIDExLjM2NiA2Ljk5OSA3LjUgNi45OTlIMi41NjFMNS43OCAxMC4yMTlMNC43MiAxMS4yNzlMMC4yMiA2Ljc3OUMwLjA3OSA2LjYzOSAwIDYuNDQ4IDAgNi4yNDlDMCA2LjA1IDAuMDc5IDUuODU5IDAuMjIgNS43MTlMNC43MiAxLjIxOUw1Ljc4IDIuMjc5WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSReplyLeftIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSReplyLeft';
}

export default RefIcon;
