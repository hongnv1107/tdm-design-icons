// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const tabletScreenFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3003 0C20.1541 0.000215429 21.5998 1.53619 21.6001 3.35938V20.6406C21.5998 22.4638 20.1541 23.9998 18.3003 24H5.69971C3.84583 23.9999 2.40023 22.4639 2.3999 20.6406V3.35938C2.40023 1.53613 3.84583 0.000107982 5.69971 0H18.3003ZM12.0103 17.2803C11.3476 17.2804 10.8003 17.8178 10.8003 18.4805C10.8005 19.1429 11.3478 19.6806 12.0103 19.6807L12.1333 19.6738C12.738 19.6122 13.2102 19.1014 13.2104 18.4805C13.2104 17.8593 12.7382 17.3478 12.1333 17.2861L12.0103 17.2803Z"/>
  </svg>
);

const tabletScreenFilledIconDefinition = svgToIconDefinition(
  tabletScreenFilledSvg,
  'tablet-screen-filled'
);

/**![TabletScreenFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE4LjMwMDMgMEMyMC4xNTQxIDAuMDAwMjE1NDI5IDIxLjU5OTggMS41MzYxOSAyMS42MDAxIDMuMzU5MzhWMjAuNjQwNkMyMS41OTk4IDIyLjQ2MzggMjAuMTU0MSAyMy45OTk4IDE4LjMwMDMgMjRINS42OTk3MUMzLjg0NTgzIDIzLjk5OTkgMi40MDAyMyAyMi40NjM5IDIuMzk5OSAyMC42NDA2VjMuMzU5MzhDMi40MDAyMyAxLjUzNjEzIDMuODQ1ODMgMC4wMDAxMDc5ODIgNS42OTk3MSAwSDE4LjMwMDNaTTEyLjAxMDMgMTcuMjgwM0MxMS4zNDc2IDE3LjI4MDQgMTAuODAwMyAxNy44MTc4IDEwLjgwMDMgMTguNDgwNUMxMC44MDA1IDE5LjE0MjkgMTEuMzQ3OCAxOS42ODA2IDEyLjAxMDMgMTkuNjgwN0wxMi4xMzMzIDE5LjY3MzhDMTIuNzM4IDE5LjYxMjIgMTMuMjEwMiAxOS4xMDE0IDEzLjIxMDQgMTguNDgwNUMxMy4yMTA0IDE3Ljg1OTMgMTIuNzM4MiAxNy4zNDc4IDEyLjEzMzMgMTcuMjg2MUwxMi4wMTAzIDE3LjI4MDNaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={tabletScreenFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'TabletScreenFilled';
}

export default RefIcon;
