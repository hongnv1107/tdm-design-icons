// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const mobileFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1431 0C18.996 0.000281722 20.3996 1.55997 20.3999 3.35938V20.6406C20.3996 22.44 18.996 23.9997 17.1431 24H6.85693C5.11975 23.9997 3.77783 22.6287 3.6167 20.9746L3.6001 20.6406V3.35938C3.60042 1.55997 5.00403 0.000281802 6.85693 0H17.1431ZM12.0005 17.2803C11.3377 17.2803 10.8003 17.8177 10.8003 18.4805C10.8005 19.143 11.3379 19.6807 12.0005 19.6807H12.0103L12.1323 19.6738C12.7375 19.6126 13.2102 19.1018 13.2104 18.4805C13.2104 17.859 12.7377 17.3473 12.1323 17.2861L12.0103 17.2803H12.0005Z"/>
  </svg>
);

const mobileFilledIconDefinition = svgToIconDefinition(
  mobileFilledSvg,
  'mobile-filled'
);

/**![MobileFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE3LjE0MzEgMEMxOC45OTYgMC4wMDAyODE3MjIgMjAuMzk5NiAxLjU1OTk3IDIwLjM5OTkgMy4zNTkzOFYyMC42NDA2QzIwLjM5OTYgMjIuNDQgMTguOTk2IDIzLjk5OTcgMTcuMTQzMSAyNEg2Ljg1NjkzQzUuMTE5NzUgMjMuOTk5NyAzLjc3NzgzIDIyLjYyODcgMy42MTY3IDIwLjk3NDZMMy42MDAxIDIwLjY0MDZWMy4zNTkzOEMzLjYwMDQyIDEuNTU5OTcgNS4wMDQwMyAwLjAwMDI4MTgwMiA2Ljg1NjkzIDBIMTcuMTQzMVpNMTIuMDAwNSAxNy4yODAzQzExLjMzNzcgMTcuMjgwMyAxMC44MDAzIDE3LjgxNzcgMTAuODAwMyAxOC40ODA1QzEwLjgwMDUgMTkuMTQzIDExLjMzNzkgMTkuNjgwNyAxMi4wMDA1IDE5LjY4MDdIMTIuMDEwM0wxMi4xMzIzIDE5LjY3MzhDMTIuNzM3NSAxOS42MTI2IDEzLjIxMDIgMTkuMTAxOCAxMy4yMTA0IDE4LjQ4MDVDMTMuMjEwNCAxNy44NTkgMTIuNzM3NyAxNy4zNDczIDEyLjEzMjMgMTcuMjg2MUwxMi4wMTAzIDE3LjI4MDNIMTIuMDAwNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={mobileFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MobileFilled';
}

export default RefIcon;
