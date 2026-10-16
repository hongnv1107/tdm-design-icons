// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSAIBotSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13 5.5C13 5.224 12.776 5 12.5 5H3.5C3.224 5 3 5.224 3 5.5V13C3 13.276 3.224 13.5 3.5 13.5H12.5C12.776 13.5 13 13.276 13 13V5.5ZM6.5 7.5V10.5H5V7.5H6.5ZM11 7.5V10.5H9.5V7.5H11ZM14.5 8.5H16V10H14.5V13C14.5 14.105 13.605 15 12.5 15H3.5C2.395 15 1.5 14.105 1.5 13V10H0V8.5H1.5V5.5C1.5 4.395 2.395 3.5 3.5 3.5H7.25V1.5H4V0H8C8.414 0 8.75 0.336 8.75 0.75V3.5H12.5C13.605 3.5 14.5 4.395 14.5 5.5V8.5Z"/>
  </svg>
);

const aDSAIBotIconDefinition = svgToIconDefinition(
  aDSAIBotSvg,
  'ads-ai-bot'
);

/**![ADSAIBot](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xMyA1LjVDMTMgNS4yMjQgMTIuNzc2IDUgMTIuNSA1SDMuNUMzLjIyNCA1IDMgNS4yMjQgMyA1LjVWMTNDMyAxMy4yNzYgMy4yMjQgMTMuNSAzLjUgMTMuNUgxMi41QzEyLjc3NiAxMy41IDEzIDEzLjI3NiAxMyAxM1Y1LjVaTTYuNSA3LjVWMTAuNUg1VjcuNUg2LjVaTTExIDcuNVYxMC41SDkuNVY3LjVIMTFaTTE0LjUgOC41SDE2VjEwSDE0LjVWMTNDMTQuNSAxNC4xMDUgMTMuNjA1IDE1IDEyLjUgMTVIMy41QzIuMzk1IDE1IDEuNSAxNC4xMDUgMS41IDEzVjEwSDBWOC41SDEuNVY1LjVDMS41IDQuMzk1IDIuMzk1IDMuNSAzLjUgMy41SDcuMjVWMS41SDRWMEg4QzguNDE0IDAgOC43NSAwLjMzNiA4Ljc1IDAuNzVWMy41SDEyLjVDMTMuNjA1IDMuNSAxNC41IDQuMzk1IDE0LjUgNS41VjguNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSAIBotIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSAIBot';
}

export default RefIcon;
