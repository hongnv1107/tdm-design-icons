// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const arrowChannelRightFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16.0454 11.2089L11.5454 6.70895C11.229 6.39254 10.7368 6.28707 10.3149 6.46285C9.89307 6.63863 9.61182 7.06051 9.61182 7.51754L9.61182 16.5175C9.61182 16.9394 9.89307 17.3613 10.3149 17.5371C10.7368 17.7129 11.229 17.6074 11.5454 17.291L16.0454 12.791C16.5024 12.3691 16.5024 11.6308 16.0454 11.2089Z"/>
  </svg>
);

const arrowChannelRightFilledIconDefinition = svgToIconDefinition(
  arrowChannelRightFilledSvg,
  'arrow-channel-right-filled'
);

/**![ArrowChannelRightFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTYuMDQ1NCAxMS4yMDg5TDExLjU0NTQgNi43MDg5NUMxMS4yMjkgNi4zOTI1NCAxMC43MzY4IDYuMjg3MDcgMTAuMzE0OSA2LjQ2Mjg1QzkuODkzMDcgNi42Mzg2MyA5LjYxMTgyIDcuMDYwNTEgOS42MTE4MiA3LjUxNzU0TDkuNjExODIgMTYuNTE3NUM5LjYxMTgyIDE2LjkzOTQgOS44OTMwNyAxNy4zNjEzIDEwLjMxNDkgMTcuNTM3MUMxMC43MzY4IDE3LjcxMjkgMTEuMjI5IDE3LjYwNzQgMTEuNTQ1NCAxNy4yOTFMMTYuMDQ1NCAxMi43OTFDMTYuNTAyNCAxMi4zNjkxIDE2LjUwMjQgMTEuNjMwOCAxNi4wNDU0IDExLjIwODlaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={arrowChannelRightFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ArrowChannelRightFilledIcon';
}

export default RefIcon;
