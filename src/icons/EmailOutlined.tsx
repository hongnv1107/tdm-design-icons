// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const emailOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M21.6 7.9676L12.675 14.0426C12.2678 14.3195 11.7322 14.3195 11.325 14.0426L2.4 7.9676V18.3C2.4 18.7606 2.80254 19.1999 3.35977 19.2H20.6402C21.1975 19.1999 21.6 18.7606 21.6 18.3V7.9676ZM3.25781 4.80471C2.9687 4.83326 2.73 4.98271 2.57812 5.18557L12 11.5981L21.4207 5.18557C21.2688 4.983 21.031 4.83324 20.7422 4.80471L20.6402 4.80002H3.35977L3.25781 4.80471ZM24 18.3C24 20.1493 22.4588 21.5999 20.6402 21.6H3.35977C1.54122 21.5999 0 20.1493 0 18.3V5.70002C0 3.85072 1.54122 2.40015 3.35977 2.40002H20.6402L20.9777 2.41643C22.6455 2.58269 24 3.96632 24 5.70002V18.3Z"/>
  </svg>
);

const emailOutlinedIconDefinition = svgToIconDefinition(
  emailOutlinedSvg,
  'email-outlined'
);

/**![EmailOutlined](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMjEuNiA3Ljk2NzZMMTIuNjc1IDE0LjA0MjZDMTIuMjY3OCAxNC4zMTk1IDExLjczMjIgMTQuMzE5NSAxMS4zMjUgMTQuMDQyNkwyLjQgNy45Njc2VjE4LjNDMi40IDE4Ljc2MDYgMi44MDI1NCAxOS4xOTk5IDMuMzU5NzcgMTkuMkgyMC42NDAyQzIxLjE5NzUgMTkuMTk5OSAyMS42IDE4Ljc2MDYgMjEuNiAxOC4zVjcuOTY3NlpNMy4yNTc4MSA0LjgwNDcxQzIuOTY4NyA0LjgzMzI2IDIuNzMgNC45ODI3MSAyLjU3ODEyIDUuMTg1NTdMMTIgMTEuNTk4MUwyMS40MjA3IDUuMTg1NTdDMjEuMjY4OCA0Ljk4MyAyMS4wMzEgNC44MzMyNCAyMC43NDIyIDQuODA0NzFMMjAuNjQwMiA0LjgwMDAySDMuMzU5NzdMMy4yNTc4MSA0LjgwNDcxWk0yNCAxOC4zQzI0IDIwLjE0OTMgMjIuNDU4OCAyMS41OTk5IDIwLjY0MDIgMjEuNkgzLjM1OTc3QzEuNTQxMjIgMjEuNTk5OSAwIDIwLjE0OTMgMCAxOC4zVjUuNzAwMDJDMCAzLjg1MDcyIDEuNTQxMjIgMi40MDAxNSAzLjM1OTc3IDIuNDAwMDJIMjAuNjQwMkwyMC45Nzc3IDIuNDE2NDNDMjIuNjQ1NSAyLjU4MjY5IDI0IDMuOTY2MzIgMjQgNS43MDAwMlYxOC4zWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={emailOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'EmailOutlined';
}

export default RefIcon;
