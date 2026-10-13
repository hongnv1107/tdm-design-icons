// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const mapOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M23.5833 2.83662C23.8611 3.05858 24 3.33602 24 3.66896V17.6522C23.9722 18.0961 23.7639 18.4013 23.375 18.5677L16.375 21.2312C16.125 21.3144 15.8889 21.3283 15.6667 21.2728L8.04167 18.7342L1.375 21.2728C1.04167 21.3838 0.722222 21.3422 0.416667 21.148C0.138889 20.926 0 20.6486 0 20.3156V6.33242C0.0277778 5.88851 0.25 5.58332 0.666667 5.41686L7.66667 2.75339C7.88889 2.67016 8.11111 2.65628 8.33333 2.71177L16 5.29201L22.6667 2.75339C22.9722 2.61467 23.2778 2.64241 23.5833 2.83662ZM2 7.03991V18.8591L7 16.9447V5.12554L2 7.03991ZM15 18.9423V7.03991L9 5.04231V16.9447L15 18.9423ZM17 18.8591L22 16.9863V5.12554L17 7.03991V18.8591Z"/>
  </svg>
);

const mapOutlinedIconDefinition = svgToIconDefinition(
  mapOutlinedSvg,
  'map-outlined'
);

/**![MapOutlined](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMjMuNTgzMyAyLjgzNjYyQzIzLjg2MTEgMy4wNTg1OCAyNCAzLjMzNjAyIDI0IDMuNjY4OTZWMTcuNjUyMkMyMy45NzIyIDE4LjA5NjEgMjMuNzYzOSAxOC40MDEzIDIzLjM3NSAxOC41Njc3TDE2LjM3NSAyMS4yMzEyQzE2LjEyNSAyMS4zMTQ0IDE1Ljg4ODkgMjEuMzI4MyAxNS42NjY3IDIxLjI3MjhMOC4wNDE2NyAxOC43MzQyTDEuMzc1IDIxLjI3MjhDMS4wNDE2NyAyMS4zODM4IDAuNzIyMjIyIDIxLjM0MjIgMC40MTY2NjcgMjEuMTQ4QzAuMTM4ODg5IDIwLjkyNiAwIDIwLjY0ODYgMCAyMC4zMTU2VjYuMzMyNDJDMC4wMjc3Nzc4IDUuODg4NTEgMC4yNSA1LjU4MzMyIDAuNjY2NjY3IDUuNDE2ODZMNy42NjY2NyAyLjc1MzM5QzcuODg4ODkgMi42NzAxNiA4LjExMTExIDIuNjU2MjggOC4zMzMzMyAyLjcxMTc3TDE2IDUuMjkyMDFMMjIuNjY2NyAyLjc1MzM5QzIyLjk3MjIgMi42MTQ2NyAyMy4yNzc4IDIuNjQyNDEgMjMuNTgzMyAyLjgzNjYyWk0yIDcuMDM5OTFWMTguODU5MUw3IDE2Ljk0NDdWNS4xMjU1NEwyIDcuMDM5OTFaTTE1IDE4Ljk0MjNWNy4wMzk5MUw5IDUuMDQyMzFWMTYuOTQ0N0wxNSAxOC45NDIzWk0xNyAxOC44NTkxTDIyIDE2Ljk4NjNWNS4xMjU1NEwxNyA3LjAzOTkxVjE4Ljg1OTFaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={mapOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MapOutlined';
}

export default RefIcon;
