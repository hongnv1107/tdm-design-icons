// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const locationArrowFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M23.8654 2.55815L15.5562 22.8695C15.133 23.7542 14.4406 24.1197 13.4789 23.9658C12.5557 23.735 12.0556 23.1387 11.9786 22.177V12.0214H1.82297C0.861264 11.9444 0.265004 11.4443 0.0341941 10.5211C-0.119679 9.55939 0.24577 8.86696 1.13054 8.44381L21.4419 0.134639C22.1728 -0.134639 22.8459 0 23.4614 0.538557C24 1.15405 24.1346 1.82725 23.8654 2.55815Z"/>
  </svg>
);

const locationArrowFilledIconDefinition = svgToIconDefinition(
  locationArrowFilledSvg,
  'location-arrow-filled'
);

/**![LocationArrowFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMjMuODY1NCAyLjU1ODE1TDE1LjU1NjIgMjIuODY5NUMxNS4xMzMgMjMuNzU0MiAxNC40NDA2IDI0LjExOTcgMTMuNDc4OSAyMy45NjU4QzEyLjU1NTcgMjMuNzM1IDEyLjA1NTYgMjMuMTM4NyAxMS45Nzg2IDIyLjE3N1YxMi4wMjE0SDEuODIyOTdDMC44NjEyNjQgMTEuOTQ0NCAwLjI2NTAwNCAxMS40NDQzIDAuMDM0MTk0MSAxMC41MjExQy0wLjExOTY3OSA5LjU1OTM5IDAuMjQ1NzcgOC44NjY5NiAxLjEzMDU0IDguNDQzODFMMjEuNDQxOSAwLjEzNDYzOUMyMi4xNzI4IC0wLjEzNDYzOSAyMi44NDU5IDAgMjMuNDYxNCAwLjUzODU1N0MyNCAxLjE1NDA1IDI0LjEzNDYgMS44MjcyNSAyMy44NjU0IDIuNTU4MTVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={locationArrowFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'LocationArrowFilled';
}

export default RefIcon;
