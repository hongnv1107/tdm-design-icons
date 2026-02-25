// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const hTCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#A2001D" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 12 0 12 0s12 5.373 12 12Z"/>
    <path fill="#0052B4" d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12"/>
    <path fill="#F0F0F0" d="M16.174 15.13 12 14.61l-4.174.521V8.87h8.348v6.26Z"/>
    <path fill="#0052B4" d="M12 14.609a2.087 2.087 0 1 0-.001-4.175 2.087 2.087 0 0 0 0 4.175Z"/>
    <path fill="#A2001D" d="M12 13.565a1.043 1.043 0 1 0 0-2.087 1.043 1.043 0 0 0 0 2.087Z"/>
    <path fill="#6DA544" d="M10.435 9.913h3.13L12 11.478l-1.565-1.565Z"/>
    <path fill="#FFDA44" d="M12.522 10.956H11.48v3.13h1.043v-3.13Z"/>
    <path fill="#6DA544" d="M13.67 13.775h-3.34L7.826 15.13h8.348l-2.505-1.355Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const hTCircleIconDefinition = svgToIconDefinition(
  hTCircleSvg,
  'htcircle'
);

/**![HTCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNBMjAwMUQiIGQ9Ik0yNCAxMmMwIDYuNjI3LTUuMzczIDEyLTEyIDEyUzAgMTguNjI3IDAgMTIgMTIgMCAxMiAwczEyIDUuMzczIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiMwMDUyQjQiIGQ9Ik0wIDEyQzAgNS4zNzMgNS4zNzMgMCAxMiAwczEyIDUuMzczIDEyIDEyIi8+PHBhdGggZmlsbD0iI0YwRjBGMCIgZD0iTTE2LjE3NCAxNS4xMyAxMiAxNC42MWwtNC4xNzQuNTIxVjguODdoOC4zNDh2Ni4yNloiLz48cGF0aCBmaWxsPSIjMDA1MkI0IiBkPSJNMTIgMTQuNjA5YTIuMDg3IDIuMDg3IDAgMSAwLS4wMDEtNC4xNzUgMi4wODcgMi4wODcgMCAwIDAgMCA0LjE3NVoiLz48cGF0aCBmaWxsPSIjQTIwMDFEIiBkPSJNMTIgMTMuNTY1YTEuMDQzIDEuMDQzIDAgMSAwIDAtMi4wODcgMS4wNDMgMS4wNDMgMCAwIDAgMCAyLjA4N1oiLz48cGF0aCBmaWxsPSIjNkRBNTQ0IiBkPSJNMTAuNDM1IDkuOTEzaDMuMTNMMTIgMTEuNDc4bC0xLjU2NS0xLjU2NVoiLz48cGF0aCBmaWxsPSIjRkZEQTQ0IiBkPSJNMTIuNTIyIDEwLjk1NkgxMS40OHYzLjEzaDEuMDQzdi0zLjEzWiIvPjxwYXRoIGZpbGw9IiM2REE1NDQiIGQ9Ik0xMy42NyAxMy43NzVoLTMuMzRMNy44MjYgMTUuMTNoOC4zNDhsLTIuNTA1LTEuMzU1WiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={hTCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'HTCircleIcon';
}

export default RefIcon;
