// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const gMCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#F0F0F0" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"/>
    <path fill="#A2001D" d="M12 0C7.039 0 2.782 3.011.954 7.305h22.093C21.219 3.011 16.96 0 12 0Z"/>
    <path fill="#496E2D" d="M12 24c4.961 0 9.219-3.01 11.047-7.304H.954C2.782 20.99 7.04 24 12 24Z"/>
    <path fill="#0052B4" d="M23.586 8.87H.413A12.013 12.013 0 0 0 0 12c0 1.083.144 2.132.413 3.13h23.174a12.053 12.053 0 0 0-.001-6.26Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const gMCircleIconDefinition = svgToIconDefinition(
  gMCircleSvg,
  'gmcircle'
);

/**![GMCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiNBMjAwMUQiIGQ9Ik0xMiAwQzcuMDM5IDAgMi43ODIgMy4wMTEuOTU0IDcuMzA1aDIyLjA5M0MyMS4yMTkgMy4wMTEgMTYuOTYgMCAxMiAwWiIvPjxwYXRoIGZpbGw9IiM0OTZFMkQiIGQ9Ik0xMiAyNGM0Ljk2MSAwIDkuMjE5LTMuMDEgMTEuMDQ3LTcuMzA0SC45NTRDMi43ODIgMjAuOTkgNy4wNCAyNCAxMiAyNFoiLz48cGF0aCBmaWxsPSIjMDA1MkI0IiBkPSJNMjMuNTg2IDguODdILjQxM0ExMi4wMTMgMTIuMDEzIDAgMCAwIDAgMTJjMCAxLjA4My4xNDQgMi4xMzIuNDEzIDMuMTNoMjMuMTc0YTEyLjA1MyAxMi4wNTMgMCAwIDAtLjAwMS02LjI2WiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={gMCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'GMCircleIcon';
}

export default RefIcon;
