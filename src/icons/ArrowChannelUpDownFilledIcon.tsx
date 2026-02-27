// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const arrowChannelUpDownFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.209 4.45898C11.6309 4.00195 12.3692 4.00195 12.791 4.45898L17.291 8.95898C17.6074 9.27539 17.7129 9.76758 17.5371 10.1895C17.3614 10.6113 16.9746 10.8926 16.5176 10.8926H7.5176C7.06057 10.8926 6.6387 10.6113 6.46291 10.1895C6.28713 9.76758 6.3926 9.27539 6.70901 8.95898L11.209 4.45898ZM11.209 19.541L6.70901 15.041C6.3926 14.7246 6.28713 14.2324 6.46291 13.8105C6.6387 13.3887 7.06057 13.1074 7.5176 13.1074H16.5176C16.9395 13.1074 17.3614 13.3887 17.5371 13.8105C17.7129 14.2324 17.6074 14.7246 17.291 15.041L12.791 19.541C12.3692 19.998 11.6309 19.998 11.209 19.541Z"/>
  </svg>
);

const arrowChannelUpDownFilledIconDefinition = svgToIconDefinition(
  arrowChannelUpDownFilledSvg,
  'arrow-channel-up-down-filled'
);

/**![ArrowChannelUpDownFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTEuMjA5IDQuNDU4OThDMTEuNjMwOSA0LjAwMTk1IDEyLjM2OTIgNC4wMDE5NSAxMi43OTEgNC40NTg5OEwxNy4yOTEgOC45NTg5OEMxNy42MDc0IDkuMjc1MzkgMTcuNzEyOSA5Ljc2NzU4IDE3LjUzNzEgMTAuMTg5NUMxNy4zNjE0IDEwLjYxMTMgMTYuOTc0NiAxMC44OTI2IDE2LjUxNzYgMTAuODkyNkg3LjUxNzZDNy4wNjA1NyAxMC44OTI2IDYuNjM4NyAxMC42MTEzIDYuNDYyOTEgMTAuMTg5NUM2LjI4NzEzIDkuNzY3NTggNi4zOTI2IDkuMjc1MzkgNi43MDkwMSA4Ljk1ODk4TDExLjIwOSA0LjQ1ODk4Wk0xMS4yMDkgMTkuNTQxTDYuNzA5MDEgMTUuMDQxQzYuMzkyNiAxNC43MjQ2IDYuMjg3MTMgMTQuMjMyNCA2LjQ2MjkxIDEzLjgxMDVDNi42Mzg3IDEzLjM4ODcgNy4wNjA1NyAxMy4xMDc0IDcuNTE3NiAxMy4xMDc0SDE2LjUxNzZDMTYuOTM5NSAxMy4xMDc0IDE3LjM2MTQgMTMuMzg4NyAxNy41MzcxIDEzLjgxMDVDMTcuNzEyOSAxNC4yMzI0IDE3LjYwNzQgMTQuNzI0NiAxNy4yOTEgMTUuMDQxTDEyLjc5MSAxOS41NDFDMTIuMzY5MiAxOS45OTggMTEuNjMwOSAxOS45OTggMTEuMjA5IDE5LjU0MVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={arrowChannelUpDownFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ArrowChannelUpDownFilledIcon';
}

export default RefIcon;
