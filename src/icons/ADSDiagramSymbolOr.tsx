// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolOrSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
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

/**![ADSDiagramSymbolOr](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik04IDFDMTEuODY2IDEgMTUgNC4xMzQgMTUgOEMxNSAxMS44NjYgMTEuODY2IDE1IDggMTVDNC4xMzQgMTUgMSAxMS44NjYgMSA4QzEgNC4xMzQgNC4xMzQgMSA4IDFaTTIuNTUzIDguNzVDMi44ODUgMTEuMTg3IDQuODEzIDEzLjExNSA3LjI1IDEzLjQ0N1Y4Ljc1SDIuNTUzWk04Ljc1IDEzLjQ0N0MxMS4xODcgMTMuMTE1IDEzLjExNSAxMS4xODcgMTMuNDQ3IDguNzVIOC43NVYxMy40NDdaTTguNzUgNy4yNUgxMy40NDdDMTMuMTE1IDQuODEzIDExLjE4NyAyLjg4NCA4Ljc1IDIuNTUyVjcuMjVaTTcuMjUgMi41NTJDNC44MTMgMi44ODQgMi44ODUgNC44MTMgMi41NTMgNy4yNUg3LjI1VjIuNTUyWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolOrIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolOr';
}

export default RefIcon;
