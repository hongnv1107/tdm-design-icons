// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const arrowChannelLeftFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5.49941 10.3115L15.1049 0.706053C15.7803 0.0306676 16.8309 -0.194461 17.7314 0.180753C18.6319 0.555968 19.2323 1.45648 19.2323 2.43204L19.2323 21.643C19.2323 22.5435 18.6319 23.444 17.7314 23.8192C16.8309 24.1945 15.7803 23.9693 15.1049 23.2939L5.49941 13.6885C4.52386 12.7879 4.52386 11.212 5.49941 10.3115Z"/>
  </svg>
);

const arrowChannelLeftFilledIconDefinition = svgToIconDefinition(
  arrowChannelLeftFilledSvg,
  'arrow-channel-left-filled'
);

/**![ArrowChannelLeftFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNNS40OTk0MSAxMC4zMTE1TDE1LjEwNDkgMC43MDYwNTNDMTUuNzgwMyAwLjAzMDY2NzYgMTYuODMwOSAtMC4xOTQ0NjEgMTcuNzMxNCAwLjE4MDc1M0MxOC42MzE5IDAuNTU1OTY4IDE5LjIzMjMgMS40NTY0OCAxOS4yMzIzIDIuNDMyMDRMMTkuMjMyMyAyMS42NDNDMTkuMjMyMyAyMi41NDM1IDE4LjYzMTkgMjMuNDQ0IDE3LjczMTQgMjMuODE5MkMxNi44MzA5IDI0LjE5NDUgMTUuNzgwMyAyMy45NjkzIDE1LjEwNDkgMjMuMjkzOUw1LjQ5OTQxIDEzLjY4ODVDNC41MjM4NiAxMi43ODc5IDQuNTIzODYgMTEuMjEyIDUuNDk5NDEgMTAuMzExNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={arrowChannelLeftFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ArrowChannelLeftFilled';
}

export default RefIcon;
