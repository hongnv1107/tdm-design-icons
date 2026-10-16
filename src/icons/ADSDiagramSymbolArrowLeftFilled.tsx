// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolArrowLeftFilledSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5.729 2.211C5.945 2.002 6.266 1.942 6.543 2.06C6.82 2.177 7 2.449 7 2.75V5.25H15.25C15.664 5.25 16 5.586 16 6V10C16 10.414 15.664 10.75 15.25 10.75H7V13.25C7 13.549 6.822 13.82 6.547 13.938C6.272 14.057 5.953 14.001 5.735 13.796L0.235 8.613C0.086 8.473 0.001 8.276 0 8.071C-0.001 7.866 0.081 7.67 0.229 7.527L5.729 2.211Z"/>
  </svg>
);

const aDSDiagramSymbolArrowLeftFilledIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolArrowLeftFilledSvg,
  'ads-diagram-symbol-arrow-left-filled'
);

/**![ADSDiagramSymbolArrowLeftFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNNS43MjkgMi4yMTFDNS45NDUgMi4wMDIgNi4yNjYgMS45NDIgNi41NDMgMi4wNkM2LjgyIDIuMTc3IDcgMi40NDkgNyAyLjc1VjUuMjVIMTUuMjVDMTUuNjY0IDUuMjUgMTYgNS41ODYgMTYgNlYxMEMxNiAxMC40MTQgMTUuNjY0IDEwLjc1IDE1LjI1IDEwLjc1SDdWMTMuMjVDNyAxMy41NDkgNi44MjIgMTMuODIgNi41NDcgMTMuOTM4QzYuMjcyIDE0LjA1NyA1Ljk1MyAxNC4wMDEgNS43MzUgMTMuNzk2TDAuMjM1IDguNjEzQzAuMDg2IDguNDczIDAuMDAxIDguMjc2IDAgOC4wNzFDLTAuMDAxIDcuODY2IDAuMDgxIDcuNjcgMC4yMjkgNy41MjdMNS43MjkgMi4yMTFaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolArrowLeftFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolArrowLeftFilled';
}

export default RefIcon;
