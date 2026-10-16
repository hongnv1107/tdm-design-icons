// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramObjectEntitySvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.5 7.5C12.5 5.015 10.485 3 8 3C5.515 3 3.5 5.015 3.5 7.5C3.5 9.985 5.515 12 8 12C10.485 12 12.5 9.985 12.5 7.5ZM14 7.5C14 10.814 11.314 13.5 8 13.5C4.686 13.5 2 10.814 2 7.5C2 4.186 4.686 1.5 8 1.5C11.314 1.5 14 4.186 14 7.5Z"/><path d="M14 13V14.5H2V13H14Z"/>
  </svg>
);

const aDSDiagramObjectEntityIconDefinition = svgToIconDefinition(
  aDSDiagramObjectEntitySvg,
  'ads-diagram-object-entity'
);

/**![ADSDiagramObjectEntity](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xMi41IDcuNUMxMi41IDUuMDE1IDEwLjQ4NSAzIDggM0M1LjUxNSAzIDMuNSA1LjAxNSAzLjUgNy41QzMuNSA5Ljk4NSA1LjUxNSAxMiA4IDEyQzEwLjQ4NSAxMiAxMi41IDkuOTg1IDEyLjUgNy41Wk0xNCA3LjVDMTQgMTAuODE0IDExLjMxNCAxMy41IDggMTMuNUM0LjY4NiAxMy41IDIgMTAuODE0IDIgNy41QzIgNC4xODYgNC42ODYgMS41IDggMS41QzExLjMxNCAxLjUgMTQgNC4xODYgMTQgNy41WiIvPjxwYXRoIGQ9Ik0xNCAxM1YxNC41SDJWMTNIMTRaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramObjectEntityIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramObjectEntity';
}

export default RefIcon;
