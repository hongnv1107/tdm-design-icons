// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSNodeSingleRightSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.75 7.25C12.336 7.25 12 7.586 12 8C12 8.414 12.336 8.75 12.75 8.75C13.164 8.75 13.5 8.414 13.5 8C13.5 7.586 13.164 7.25 12.75 7.25ZM10.5 8C10.5 6.757 11.507 5.75 12.75 5.75C13.993 5.75 15 6.757 15 8C15 9.243 13.993 10.25 12.75 10.25C11.507 10.25 10.5 9.243 10.5 8Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2 7.25L12 7.25V8.75L2 8.75L2 7.25Z"/>
  </svg>
);

const aDSNodeSingleRightIconDefinition = svgToIconDefinition(
  aDSNodeSingleRightSvg,
  'ads-node-single-right'
);

/**![ADSNodeSingleRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEyLjc1IDcuMjVDMTIuMzM2IDcuMjUgMTIgNy41ODYgMTIgOEMxMiA4LjQxNCAxMi4zMzYgOC43NSAxMi43NSA4Ljc1QzEzLjE2NCA4Ljc1IDEzLjUgOC40MTQgMTMuNSA4QzEzLjUgNy41ODYgMTMuMTY0IDcuMjUgMTIuNzUgNy4yNVpNMTAuNSA4QzEwLjUgNi43NTcgMTEuNTA3IDUuNzUgMTIuNzUgNS43NUMxMy45OTMgNS43NSAxNSA2Ljc1NyAxNSA4QzE1IDkuMjQzIDEzLjk5MyAxMC4yNSAxMi43NSAxMC4yNUMxMS41MDcgMTAuMjUgMTAuNSA5LjI0MyAxMC41IDhaIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yIDcuMjVMMTIgNy4yNVY4Ljc1TDIgOC43NUwyIDcuMjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSNodeSingleRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSNodeSingleRight';
}

export default RefIcon;
