// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolRequiredInterfaceSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2 1C5.613 1 8.586 3.737 8.96 7.25H14V8.75H8.96C8.586 12.263 5.613 15 2 15V13.5C5.038 13.5 7.5 11.038 7.5 8C7.5 4.962 5.038 2.5 2 2.5V1Z"/>
  </svg>
);

const aDSDiagramSymbolRequiredInterfaceIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolRequiredInterfaceSvg,
  'ads-diagram-symbol-required-interface'
);

/**![ADSDiagramSymbolRequiredInterface](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMiAxQzUuNjEzIDEgOC41ODYgMy43MzcgOC45NiA3LjI1SDE0VjguNzVIOC45NkM4LjU4NiAxMi4yNjMgNS42MTMgMTUgMiAxNVYxMy41QzUuMDM4IDEzLjUgNy41IDExLjAzOCA3LjUgOEM3LjUgNC45NjIgNS4wMzggMi41IDIgMi41VjFaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolRequiredInterfaceIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolRequiredInterface';
}

export default RefIcon;
