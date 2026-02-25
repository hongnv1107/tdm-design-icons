// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const pSCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#F0F0F0" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"/>
    <path fill="#000" d="M7.304 7.827h15.95C21.557 3.257 17.159 0 12 0a11.962 11.962 0 0 0-8.485 3.516l3.79 4.31Z"/>
    <path fill="#6DA544" d="M7.304 16.174h15.95C21.557 20.744 17.159 24 12 24a11.961 11.961 0 0 1-8.485-3.515l3.79-4.311Z"/>
    <path fill="#D80027" d="M3.515 3.515c-4.687 4.686-4.686 12.283 0 16.97L12 12 3.515 3.515Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const pSCircleIconDefinition = svgToIconDefinition(
  pSCircleSvg,
  'pscircle'
);

/**![PSCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik03LjMwNCA3LjgyN2gxNS45NUMyMS41NTcgMy4yNTcgMTcuMTU5IDAgMTIgMGExMS45NjIgMTEuOTYyIDAgMCAwLTguNDg1IDMuNTE2bDMuNzkgNC4zMVoiLz48cGF0aCBmaWxsPSIjNkRBNTQ0IiBkPSJNNy4zMDQgMTYuMTc0aDE1Ljk1QzIxLjU1NyAyMC43NDQgMTcuMTU5IDI0IDEyIDI0YTExLjk2MSAxMS45NjEgMCAwIDEtOC40ODUtMy41MTVsMy43OS00LjMxMVoiLz48cGF0aCBmaWxsPSIjRDgwMDI3IiBkPSJNMy41MTUgMy41MTVjLTQuNjg3IDQuNjg2LTQuNjg2IDEyLjI4MyAwIDE2Ljk3TDEyIDEyIDMuNTE1IDMuNTE1WiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={pSCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PSCircleIcon';
}

export default RefIcon;
