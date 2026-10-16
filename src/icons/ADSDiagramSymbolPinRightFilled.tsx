// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolPinRightFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13 1C14.105 1 15 1.895 15 3V13C15 14.105 14.105 15 13 15H3C1.895 15 1 14.105 1 13V3C1 1.895 1.895 1 3 1H13ZM7.491 5.551L9.332 7.25H4V8.75H9.332L7.491 10.449L8.509 11.551L11.759 8.551C11.913 8.409 12 8.209 12 8C12 7.791 11.913 7.591 11.759 7.449L8.509 4.449L7.491 5.551Z"/>
  </svg>
);

const aDSDiagramSymbolPinRightFilledIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolPinRightFilledSvg,
  'ads-diagram-symbol-pin-right-filled'
);

/**![ADSDiagramSymbolPinRightFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xMyAxQzE0LjEwNSAxIDE1IDEuODk1IDE1IDNWMTNDMTUgMTQuMTA1IDE0LjEwNSAxNSAxMyAxNUgzQzEuODk1IDE1IDEgMTQuMTA1IDEgMTNWM0MxIDEuODk1IDEuODk1IDEgMyAxSDEzWk03LjQ5MSA1LjU1MUw5LjMzMiA3LjI1SDRWOC43NUg5LjMzMkw3LjQ5MSAxMC40NDlMOC41MDkgMTEuNTUxTDExLjc1OSA4LjU1MUMxMS45MTMgOC40MDkgMTIgOC4yMDkgMTIgOEMxMiA3Ljc5MSAxMS45MTMgNy41OTEgMTEuNzU5IDcuNDQ5TDguNTA5IDQuNDQ5TDcuNDkxIDUuNTUxWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolPinRightFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolPinRightFilled';
}

export default RefIcon;
