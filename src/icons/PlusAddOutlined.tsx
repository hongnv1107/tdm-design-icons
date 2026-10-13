// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const plusAddOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C12.8284 5.30749e-07 13.5 0.671573 13.5 1.5V10.5H22.5C23.3284 10.5 24 11.1716 24 12C24 12.8284 23.3284 13.5 22.5 13.5H13.5V22.5C13.5 23.3284 12.8284 24 12 24C11.1716 24 10.5 23.3284 10.5 22.5V13.5H1.5C0.671573 13.5 0 12.8284 0 12C0 11.1716 0.671573 10.5 1.5 10.5H10.5V1.5C10.5 0.671573 11.1716 3.62117e-08 12 0Z"/>
  </svg>
);

const plusAddOutlinedIconDefinition = svgToIconDefinition(
  plusAddOutlinedSvg,
  'plus-add-outlined'
);

/**![PlusAddOutlined](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTIgMEMxMi44Mjg0IDUuMzA3NDllLTA3IDEzLjUgMC42NzE1NzMgMTMuNSAxLjVWMTAuNUgyMi41QzIzLjMyODQgMTAuNSAyNCAxMS4xNzE2IDI0IDEyQzI0IDEyLjgyODQgMjMuMzI4NCAxMy41IDIyLjUgMTMuNUgxMy41VjIyLjVDMTMuNSAyMy4zMjg0IDEyLjgyODQgMjQgMTIgMjRDMTEuMTcxNiAyNCAxMC41IDIzLjMyODQgMTAuNSAyMi41VjEzLjVIMS41QzAuNjcxNTczIDEzLjUgMCAxMi44Mjg0IDAgMTJDMCAxMS4xNzE2IDAuNjcxNTczIDEwLjUgMS41IDEwLjVIMTAuNVYxLjVDMTAuNSAwLjY3MTU3MyAxMS4xNzE2IDMuNjIxMTdlLTA4IDEyIDBaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={plusAddOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PlusAddOutlined';
}

export default RefIcon;
