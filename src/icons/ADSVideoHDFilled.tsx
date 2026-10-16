// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSVideoHDFilledSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10.25 9.5V6.5H11.25C11.388 6.5 11.5 6.612 11.5 6.75V9.25C11.5 9.388 11.388 9.5 11.25 9.5H10.25Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2 2C0.895 2 0 2.895 0 4V12C0 13.105 0.895 14 2 14H14C15.105 14 16 13.105 16 12V4C16 2.895 15.105 2 14 2H2ZM4.75 5V7.25H6V5H7.5V11H6V8.75H4.75V11H3.25V5H4.75ZM11.25 5H8.75V11H11.25C12.217 11 13 10.217 13 9.25V6.75C13 5.784 12.217 5 11.25 5Z"/>
  </svg>
);

const aDSVideoHDFilledIconDefinition = svgToIconDefinition(
  aDSVideoHDFilledSvg,
  'ads-video-hd-filled'
);

/**![ADSVideoHDFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTAuMjUgOS41VjYuNUgxMS4yNUMxMS4zODggNi41IDExLjUgNi42MTIgMTEuNSA2Ljc1VjkuMjVDMTEuNSA5LjM4OCAxMS4zODggOS41IDExLjI1IDkuNUgxMC4yNVoiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIgMkMwLjg5NSAyIDAgMi44OTUgMCA0VjEyQzAgMTMuMTA1IDAuODk1IDE0IDIgMTRIMTRDMTUuMTA1IDE0IDE2IDEzLjEwNSAxNiAxMlY0QzE2IDIuODk1IDE1LjEwNSAyIDE0IDJIMlpNNC43NSA1VjcuMjVINlY1SDcuNVYxMUg2VjguNzVINC43NVYxMUgzLjI1VjVINC43NVpNMTEuMjUgNUg4Ljc1VjExSDExLjI1QzEyLjIxNyAxMSAxMyAxMC4yMTcgMTMgOS4yNVY2Ljc1QzEzIDUuNzg0IDEyLjIxNyA1IDExLjI1IDVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSVideoHDFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSVideoHDFilled';
}

export default RefIcon;
