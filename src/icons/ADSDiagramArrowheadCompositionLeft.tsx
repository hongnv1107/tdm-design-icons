// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramArrowheadCompositionLeftSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5.375 3.1C5.645 2.944 5.99 2.97 6.235 3.179L11.025 7.25H16V8.75H11.025L6.235 12.821C5.955 13.059 5.545 13.059 5.265 12.821L0.265 8.571C0.097 8.429 0 8.22 0 8C0 7.78 0.097 7.571 0.265 7.429L5.265 3.179L5.375 3.1Z"/>
  </svg>
);

const aDSDiagramArrowheadCompositionLeftIconDefinition = svgToIconDefinition(
  aDSDiagramArrowheadCompositionLeftSvg,
  'ads-diagram-arrowhead-composition-left'
);

/**![ADSDiagramArrowheadCompositionLeft](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNNS4zNzUgMy4xQzUuNjQ1IDIuOTQ0IDUuOTkgMi45NyA2LjIzNSAzLjE3OUwxMS4wMjUgNy4yNUgxNlY4Ljc1SDExLjAyNUw2LjIzNSAxMi44MjFDNS45NTUgMTMuMDU5IDUuNTQ1IDEzLjA1OSA1LjI2NSAxMi44MjFMMC4yNjUgOC41NzFDMC4wOTcgOC40MjkgMCA4LjIyIDAgOEMwIDcuNzggMC4wOTcgNy41NzEgMC4yNjUgNy40MjlMNS4yNjUgMy4xNzlMNS4zNzUgMy4xWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramArrowheadCompositionLeftIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramArrowheadCompositionLeft';
}

export default RefIcon;
