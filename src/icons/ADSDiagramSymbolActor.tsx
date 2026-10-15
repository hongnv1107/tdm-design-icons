// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolActorSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.5 3C9.5 2.172 8.828 1.5 8 1.5C7.172 1.5 6.5 2.172 6.5 3C6.5 3.828 7.172 4.5 8 4.5C8.828 4.5 9.5 3.828 9.5 3ZM11 3C11 4.398 10.043 5.568 8.75 5.901V7H13V8.5H8.75V10.503L12.104 15.055L10.897 15.945L8 12.014L5.104 15.945L3.896 15.055L7.25 10.503V8.5H3V7H7.25V5.901C5.957 5.568 5 4.398 5 3C5 1.343 6.343 0 8 0C9.657 0 11 1.343 11 3Z"/>
  </svg>
);

const aDSDiagramSymbolActorIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolActorSvg,
  'ads-diagram-symbol-actor'
);

/**![ADSDiagramSymbolActor](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNOS41IDNDOS41IDIuMTcyIDguODI4IDEuNSA4IDEuNUM3LjE3MiAxLjUgNi41IDIuMTcyIDYuNSAzQzYuNSAzLjgyOCA3LjE3MiA0LjUgOCA0LjVDOC44MjggNC41IDkuNSAzLjgyOCA5LjUgM1pNMTEgM0MxMSA0LjM5OCAxMC4wNDMgNS41NjggOC43NSA1LjkwMVY3SDEzVjguNUg4Ljc1VjEwLjUwM0wxMi4xMDQgMTUuMDU1TDEwLjg5NyAxNS45NDVMOCAxMi4wMTRMNS4xMDQgMTUuOTQ1TDMuODk2IDE1LjA1NUw3LjI1IDEwLjUwM1Y4LjVIM1Y3SDcuMjVWNS45MDFDNS45NTcgNS41NjggNSA0LjM5OCA1IDNDNSAxLjM0MyA2LjM0MyAwIDggMEM5LjY1NyAwIDExIDEuMzQzIDExIDNaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolActorIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolActor';
}

export default RefIcon;
