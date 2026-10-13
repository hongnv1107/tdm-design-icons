// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const arrowChannelRightFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.5006 10.3115L8.8951 0.706053C8.21972 0.0306676 7.16912 -0.194461 6.2686 0.180753C5.36809 0.555968 4.76775 1.45648 4.76775 2.43204L4.76775 21.643C4.76775 22.5435 5.36809 23.444 6.2686 23.8192C7.16912 24.1945 8.21972 23.9693 8.8951 23.2939L18.5006 13.6885C19.4761 12.7879 19.4761 11.212 18.5006 10.3115Z"/>
  </svg>
);

const arrowChannelRightFilledIconDefinition = svgToIconDefinition(
  arrowChannelRightFilledSvg,
  'arrow-channel-right-filled'
);

/**![ArrowChannelRightFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTguNTAwNiAxMC4zMTE1TDguODk1MSAwLjcwNjA1M0M4LjIxOTcyIDAuMDMwNjY3NiA3LjE2OTEyIC0wLjE5NDQ2MSA2LjI2ODYgMC4xODA3NTNDNS4zNjgwOSAwLjU1NTk2OCA0Ljc2Nzc1IDEuNDU2NDggNC43Njc3NSAyLjQzMjA0TDQuNzY3NzUgMjEuNjQzQzQuNzY3NzUgMjIuNTQzNSA1LjM2ODA5IDIzLjQ0NCA2LjI2ODYgMjMuODE5MkM3LjE2OTEyIDI0LjE5NDUgOC4yMTk3MiAyMy45NjkzIDguODk1MSAyMy4yOTM5TDE4LjUwMDYgMTMuNjg4NUMxOS40NzYxIDEyLjc4NzkgMTkuNDc2MSAxMS4yMTIgMTguNTAwNiAxMC4zMTE1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={arrowChannelRightFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ArrowChannelRightFilled';
}

export default RefIcon;
