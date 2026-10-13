// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const checkOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M21.724 3.72389C22.2447 3.20318 23.0888 3.20318 23.6095 3.72389C24.1302 4.24459 24.1302 5.08862 23.6095 5.60932L8.94268 20.2761C8.42198 20.7968 7.57795 20.7968 7.05725 20.2761L0.390528 13.6094C-0.130176 13.0887 -0.130176 12.2447 0.390528 11.724C0.878686 11.2358 1.65069 11.2057 2.1744 11.6328L2.27596 11.724L7.99997 17.448L21.724 3.72389Z"/>
  </svg>
);

const checkOutlinedIconDefinition = svgToIconDefinition(
  checkOutlinedSvg,
  'check-outlined'
);

/**![CheckOutlined](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMjEuNzI0IDMuNzIzODlDMjIuMjQ0NyAzLjIwMzE4IDIzLjA4ODggMy4yMDMxOCAyMy42MDk1IDMuNzIzODlDMjQuMTMwMiA0LjI0NDU5IDI0LjEzMDIgNS4wODg2MiAyMy42MDk1IDUuNjA5MzJMOC45NDI2OCAyMC4yNzYxQzguNDIxOTggMjAuNzk2OCA3LjU3Nzk1IDIwLjc5NjggNy4wNTcyNSAyMC4yNzYxTDAuMzkwNTI4IDEzLjYwOTRDLTAuMTMwMTc2IDEzLjA4ODcgLTAuMTMwMTc2IDEyLjI0NDcgMC4zOTA1MjggMTEuNzI0QzAuODc4Njg2IDExLjIzNTggMS42NTA2OSAxMS4yMDU3IDIuMTc0NCAxMS42MzI4TDIuMjc1OTYgMTEuNzI0TDcuOTk5OTcgMTcuNDQ4TDIxLjcyNCAzLjcyMzg5WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={checkOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CheckOutlined';
}

export default RefIcon;
