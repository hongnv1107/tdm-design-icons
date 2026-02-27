// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const filmFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 17H17V19H18.2559C18.6668 19 19 18.6668 19 18.2559V17ZM9 19H15V13H9V19ZM17 15H19V13H17V15ZM5 15H7V13H5V15ZM17 11H19V9H17V11ZM9 11H15V5H9V11ZM5 11H7V9H5V11ZM5 18.2559C5 18.6668 5.33324 19 5.74414 19H7V17H5V18.2559ZM19 5.74414C19 5.33324 18.6668 5 18.2559 5H17V7H19V5.74414ZM5 7H7V5H5.74414C5.33324 5 5 5.33324 5 5.74414V7ZM21 18.2559C21 19.7713 19.7713 21 18.2559 21H5.74414C4.22867 21 3 19.7713 3 18.2559V5.74414C3 4.22867 4.22867 3 5.74414 3H18.2559C19.7713 3 21 4.22867 21 5.74414V18.2559Z"/><path d="M9 11H15V5H9V11Z"/><path d="M9 19H15V13H9V19Z"/>
  </svg>
);

const filmFilledIconDefinition = svgToIconDefinition(
  filmFilledSvg,
  'film-filled'
);

/**![FilmFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTkgMTdIMTdWMTlIMTguMjU1OUMxOC42NjY4IDE5IDE5IDE4LjY2NjggMTkgMTguMjU1OVYxN1pNOSAxOUgxNVYxM0g5VjE5Wk0xNyAxNUgxOVYxM0gxN1YxNVpNNSAxNUg3VjEzSDVWMTVaTTE3IDExSDE5VjlIMTdWMTFaTTkgMTFIMTVWNUg5VjExWk01IDExSDdWOUg1VjExWk01IDE4LjI1NTlDNSAxOC42NjY4IDUuMzMzMjQgMTkgNS43NDQxNCAxOUg3VjE3SDVWMTguMjU1OVpNMTkgNS43NDQxNEMxOSA1LjMzMzI0IDE4LjY2NjggNSAxOC4yNTU5IDVIMTdWN0gxOVY1Ljc0NDE0Wk01IDdIN1Y1SDUuNzQ0MTRDNS4zMzMyNCA1IDUgNS4zMzMyNCA1IDUuNzQ0MTRWN1pNMjEgMTguMjU1OUMyMSAxOS43NzEzIDE5Ljc3MTMgMjEgMTguMjU1OSAyMUg1Ljc0NDE0QzQuMjI4NjcgMjEgMyAxOS43NzEzIDMgMTguMjU1OVY1Ljc0NDE0QzMgNC4yMjg2NyA0LjIyODY3IDMgNS43NDQxNCAzSDE4LjI1NTlDMTkuNzcxMyAzIDIxIDQuMjI4NjcgMjEgNS43NDQxNFYxOC4yNTU5WiIvPjxwYXRoIGQ9Ik05IDExSDE1VjVIOVYxMVoiLz48cGF0aCBkPSJNOSAxOUgxNVYxM0g5VjE5WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={filmFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FilmFilledIcon';
}

export default RefIcon;
