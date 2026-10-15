// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSArrowCurvedRightUpSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 13.5C7.657 13.5 9 12.157 9 10.5V3.561L5.78 6.78L4.72 5.72L9.22 1.22C9.36 1.079 9.551 1 9.75 1C9.949 1 10.14 1.079 10.28 1.22L14.78 5.72L13.72 6.78L10.5 3.561V10.5C10.5 12.985 8.485 15 6 15H1L1 13.5H6Z"/>
  </svg>
);

const aDSArrowCurvedRightUpIconDefinition = svgToIconDefinition(
  aDSArrowCurvedRightUpSvg,
  'ads-arrow-curved-right-up'
);

/**![ADSArrowCurvedRightUp](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNNiAxMy41QzcuNjU3IDEzLjUgOSAxMi4xNTcgOSAxMC41VjMuNTYxTDUuNzggNi43OEw0LjcyIDUuNzJMOS4yMiAxLjIyQzkuMzYgMS4wNzkgOS41NTEgMSA5Ljc1IDFDOS45NDkgMSAxMC4xNCAxLjA3OSAxMC4yOCAxLjIyTDE0Ljc4IDUuNzJMMTMuNzIgNi43OEwxMC41IDMuNTYxVjEwLjVDMTAuNSAxMi45ODUgOC40ODUgMTUgNiAxNUgxTDEgMTMuNUg2WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSArrowCurvedRightUpIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSArrowCurvedRightUp';
}

export default RefIcon;
