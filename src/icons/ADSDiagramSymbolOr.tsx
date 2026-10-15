// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolOrSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8 1C11.866 1 15 4.134 15 8C15 11.866 11.866 15 8 15C4.134 15 1 11.866 1 8C1 4.134 4.134 1 8 1ZM2.553 8.75C2.885 11.187 4.813 13.115 7.25 13.447V8.75H2.553ZM8.75 13.447C11.187 13.115 13.115 11.187 13.447 8.75H8.75V13.447ZM8.75 7.25H13.447C13.115 4.813 11.187 2.884 8.75 2.552V7.25ZM7.25 2.552C4.813 2.884 2.885 4.813 2.553 7.25H7.25V2.552Z"/>
  </svg>
);

const aDSDiagramSymbolOrIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolOrSvg,
  'ads-diagram-symbol-or'
);

/**![ADSDiagramSymbolOr](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNOCAxQzExLjg2NiAxIDE1IDQuMTM0IDE1IDhDMTUgMTEuODY2IDExLjg2NiAxNSA4IDE1QzQuMTM0IDE1IDEgMTEuODY2IDEgOEMxIDQuMTM0IDQuMTM0IDEgOCAxWk0yLjU1MyA4Ljc1QzIuODg1IDExLjE4NyA0LjgxMyAxMy4xMTUgNy4yNSAxMy40NDdWOC43NUgyLjU1M1pNOC43NSAxMy40NDdDMTEuMTg3IDEzLjExNSAxMy4xMTUgMTEuMTg3IDEzLjQ0NyA4Ljc1SDguNzVWMTMuNDQ3Wk04Ljc1IDcuMjVIMTMuNDQ3QzEzLjExNSA0LjgxMyAxMS4xODcgMi44ODQgOC43NSAyLjU1MlY3LjI1Wk03LjI1IDIuNTUyQzQuODEzIDIuODg0IDIuODg1IDQuODEzIDIuNTUzIDcuMjVINy4yNVYyLjU1MloiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolOrIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolOr';
}

export default RefIcon;
