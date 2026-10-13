// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const locationArrowUpFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1.92858 21.4286L10.2322 1.17857C10.5893 0.428571 11.1786 0.0357143 12 0C12.8214 0.0357143 13.4107 0.428571 13.7679 1.17857L22.0714 21.4286C22.3214 22.0714 22.2679 22.6607 21.9107 23.1964C21.5536 23.6964 21.0357 23.9643 20.3572 24C19.9286 24 19.5536 23.875 19.2322 23.625L12 18L4.76787 23.625C4.44644 23.875 4.07144 24 3.64287 24C2.9643 23.9643 2.44644 23.6964 2.0893 23.1964C1.73215 22.6607 1.67858 22.0714 1.92858 21.4286Z"/>
  </svg>
);

const locationArrowUpFilledIconDefinition = svgToIconDefinition(
  locationArrowUpFilledSvg,
  'location-arrow-up-filled'
);

/**![LocationArrowUpFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMS45Mjg1OCAyMS40Mjg2TDEwLjIzMjIgMS4xNzg1N0MxMC41ODkzIDAuNDI4NTcxIDExLjE3ODYgMC4wMzU3MTQzIDEyIDBDMTIuODIxNCAwLjAzNTcxNDMgMTMuNDEwNyAwLjQyODU3MSAxMy43Njc5IDEuMTc4NTdMMjIuMDcxNCAyMS40Mjg2QzIyLjMyMTQgMjIuMDcxNCAyMi4yNjc5IDIyLjY2MDcgMjEuOTEwNyAyMy4xOTY0QzIxLjU1MzYgMjMuNjk2NCAyMS4wMzU3IDIzLjk2NDMgMjAuMzU3MiAyNEMxOS45Mjg2IDI0IDE5LjU1MzYgMjMuODc1IDE5LjIzMjIgMjMuNjI1TDEyIDE4TDQuNzY3ODcgMjMuNjI1QzQuNDQ2NDQgMjMuODc1IDQuMDcxNDQgMjQgMy42NDI4NyAyNEMyLjk2NDMgMjMuOTY0MyAyLjQ0NjQ0IDIzLjY5NjQgMi4wODkzIDIzLjE5NjRDMS43MzIxNSAyMi42NjA3IDEuNjc4NTggMjIuMDcxNCAxLjkyODU4IDIxLjQyODZaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={locationArrowUpFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'LocationArrowUpFilled';
}

export default RefIcon;
