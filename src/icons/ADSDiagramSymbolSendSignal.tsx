// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolSendSignalSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11 2.5C11.213 2.5 11.416 2.591 11.559 2.75L15.809 7.5C16.063 7.785 16.063 8.215 15.809 8.5L11.559 13.25C11.416 13.409 11.213 13.5 11 13.5H2C0.895 13.5 0 12.605 0 11.5V4.5C0 3.395 0.895 2.5 2 2.5H11ZM1.5 11.5C1.5 11.776 1.724 12 2 12H10.665L14.243 8L10.665 4H2C1.724 4 1.5 4.224 1.5 4.5V11.5Z"/>
  </svg>
);

const aDSDiagramSymbolSendSignalIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolSendSignalSvg,
  'ads-diagram-symbol-send-signal'
);

/**![ADSDiagramSymbolSendSignal](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTEgMi41QzExLjIxMyAyLjUgMTEuNDE2IDIuNTkxIDExLjU1OSAyLjc1TDE1LjgwOSA3LjVDMTYuMDYzIDcuNzg1IDE2LjA2MyA4LjIxNSAxNS44MDkgOC41TDExLjU1OSAxMy4yNUMxMS40MTYgMTMuNDA5IDExLjIxMyAxMy41IDExIDEzLjVIMkMwLjg5NSAxMy41IDAgMTIuNjA1IDAgMTEuNVY0LjVDMCAzLjM5NSAwLjg5NSAyLjUgMiAyLjVIMTFaTTEuNSAxMS41QzEuNSAxMS43NzYgMS43MjQgMTIgMiAxMkgxMC42NjVMMTQuMjQzIDhMMTAuNjY1IDRIMkMxLjcyNCA0IDEuNSA0LjIyNCAxLjUgNC41VjExLjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolSendSignalIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolSendSignal';
}

export default RefIcon;
