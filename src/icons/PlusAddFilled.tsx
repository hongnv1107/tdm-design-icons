// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const plusAddFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.88235 21.8824V14.1176H2.11765C0.948103 14.1176 0 13.1695 0 12C0 10.8305 0.948103 9.88235 2.11765 9.88235H9.88235V2.11765C9.88235 0.948103 10.8305 0 12 0C13.1695 0 14.1176 0.948103 14.1176 2.11765V9.88235H21.8824C23.0519 9.88235 24 10.8305 24 12C24 13.1695 23.0519 14.1176 21.8824 14.1176H14.1176V21.8824C14.1176 23.0519 13.1695 24 12 24C10.8305 24 9.88235 23.0519 9.88235 21.8824Z"/>
  </svg>
);

const plusAddFilledIconDefinition = svgToIconDefinition(
  plusAddFilledSvg,
  'plus-add-filled'
);

/**![PlusAddFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNOS44ODIzNSAyMS44ODI0VjE0LjExNzZIMi4xMTc2NUMwLjk0ODEwMyAxNC4xMTc2IDAgMTMuMTY5NSAwIDEyQzAgMTAuODMwNSAwLjk0ODEwMyA5Ljg4MjM1IDIuMTE3NjUgOS44ODIzNUg5Ljg4MjM1VjIuMTE3NjVDOS44ODIzNSAwLjk0ODEwMyAxMC44MzA1IDAgMTIgMEMxMy4xNjk1IDAgMTQuMTE3NiAwLjk0ODEwMyAxNC4xMTc2IDIuMTE3NjVWOS44ODIzNUgyMS44ODI0QzIzLjA1MTkgOS44ODIzNSAyNCAxMC44MzA1IDI0IDEyQzI0IDEzLjE2OTUgMjMuMDUxOSAxNC4xMTc2IDIxLjg4MjQgMTQuMTE3NkgxNC4xMTc2VjIxLjg4MjRDMTQuMTE3NiAyMy4wNTE5IDEzLjE2OTUgMjQgMTIgMjRDMTAuODMwNSAyNCA5Ljg4MjM1IDIzLjA1MTkgOS44ODIzNSAyMS44ODI0WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={plusAddFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PlusAddFilled';
}

export default RefIcon;
