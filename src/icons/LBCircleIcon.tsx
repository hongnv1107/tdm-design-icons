// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const lBCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)"><path fill="#F0F0F0" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"/><path fill="#D80027" d="M12 0A12 12 0 0 0 1.19 6.782h21.62A12 12 0 0 0 12 0Zm0 24c4.758 0 8.869-2.77 10.81-6.783H1.19A12 12 0 0 0 12 24Z"/><path fill="#6DA544" d="M15.13 14.086 12 8.347l-3.13 5.74h2.348v1.564h1.565v-1.565h2.348Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
  </svg>
);

const lBCircleIconDefinition = svgToIconDefinition(
  lBCircleSvg,
  'lbcircle'
);

/**![LBCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiNEODAwMjciIGQ9Ik0xMiAwQTEyIDEyIDAgMCAwIDEuMTkgNi43ODJoMjEuNjJBMTIgMTIgMCAwIDAgMTIgMFptMCAyNGM0Ljc1OCAwIDguODY5LTIuNzcgMTAuODEtNi43ODNIMS4xOUExMiAxMiAwIDAgMCAxMiAyNFoiLz48cGF0aCBmaWxsPSIjNkRBNTQ0IiBkPSJNMTUuMTMgMTQuMDg2IDEyIDguMzQ3bC0zLjEzIDUuNzRoMi4zNDh2MS41NjRoMS41NjV2LTEuNTY1aDIuMzQ4WiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={lBCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'LBCircleIcon';
}

export default RefIcon;
