// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramArrowheadDefaultFlowRightSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.061 7.249H16V8.749H13.561L15.03 10.219L13.97 11.279L11.44 8.749H0V7.249H9.939L8.22 5.529L9.28 4.469L12.061 7.249Z"/>
  </svg>
);

const aDSDiagramArrowheadDefaultFlowRightIconDefinition = svgToIconDefinition(
  aDSDiagramArrowheadDefaultFlowRightSvg,
  'ads-diagram-arrowhead-default-flow-right'
);

/**![ADSDiagramArrowheadDefaultFlowRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTIuMDYxIDcuMjQ5SDE2VjguNzQ5SDEzLjU2MUwxNS4wMyAxMC4yMTlMMTMuOTcgMTEuMjc5TDExLjQ0IDguNzQ5SDBWNy4yNDlIOS45MzlMOC4yMiA1LjUyOUw5LjI4IDQuNDY5TDEyLjA2MSA3LjI0OVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramArrowheadDefaultFlowRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramArrowheadDefaultFlowRight';
}

export default RefIcon;
