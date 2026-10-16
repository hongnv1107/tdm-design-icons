// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSBedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.5 8C14.5 7.724 14.276 7.5 14 7.5H2C1.724 7.5 1.5 7.724 1.5 8V11.5H14.5V8ZM16 14H14.5V13H1.5V14H0V8C0 6.895 0.895 6 2 6H14C15.105 6 16 6.895 16 8V14Z"/><path d="M13 4C13 3.724 12.776 3.5 12.5 3.5H8.75V6H13V4ZM3 6H7.25V3.5H3.5C3.224 3.5 3 3.724 3 4V6ZM14.5 6.75C14.5 7.164 14.164 7.5 13.75 7.5H2.25C1.836 7.5 1.5 7.164 1.5 6.75V4C1.5 2.895 2.395 2 3.5 2H12.5C13.605 2 14.5 2.895 14.5 4V6.75Z"/>
  </svg>
);

const aDSBedIconDefinition = svgToIconDefinition(
  aDSBedSvg,
  'ads-bed'
);

/**![ADSBed](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xNC41IDhDMTQuNSA3LjcyNCAxNC4yNzYgNy41IDE0IDcuNUgyQzEuNzI0IDcuNSAxLjUgNy43MjQgMS41IDhWMTEuNUgxNC41VjhaTTE2IDE0SDE0LjVWMTNIMS41VjE0SDBWOEMwIDYuODk1IDAuODk1IDYgMiA2SDE0QzE1LjEwNSA2IDE2IDYuODk1IDE2IDhWMTRaIi8+PHBhdGggZD0iTTEzIDRDMTMgMy43MjQgMTIuNzc2IDMuNSAxMi41IDMuNUg4Ljc1VjZIMTNWNFpNMyA2SDcuMjVWMy41SDMuNUMzLjIyNCAzLjUgMyAzLjcyNCAzIDRWNlpNMTQuNSA2Ljc1QzE0LjUgNy4xNjQgMTQuMTY0IDcuNSAxMy43NSA3LjVIMi4yNUMxLjgzNiA3LjUgMS41IDcuMTY0IDEuNSA2Ljc1VjRDMS41IDIuODk1IDIuMzk1IDIgMy41IDJIMTIuNUMxMy42MDUgMiAxNC41IDIuODk1IDE0LjUgNFY2Ljc1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSBedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSBed';
}

export default RefIcon;
