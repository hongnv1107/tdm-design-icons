// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const gWCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#FFDA44" d="M12 0c-1.084 0-2.133.144-3.131.413L7.826 12l1.043 11.587a12.01 12.01 0 0 0 3.13.413c6.628 0 12-5.373 12-12S18.628 0 12 0Z"/>
    <path fill="#6DA544" d="m7.826 12 1.043 11.587a12.01 12.01 0 0 0 3.13.413c6.628 0 12-5.373 12-12H7.827Z"/>
    <path fill="#D80027" d="M0 12c0 4.548 2.53 8.505 6.26 10.54V1.46A11.997 11.997 0 0 0 0 11.999Z"/>
    <path fill="#D80027" d="M0 12c0 5.544 3.76 10.21 8.87 11.587L8.868.413C3.759 1.79 0 6.455 0 12Z"/>
    <path fill="#000" d="m4.534 8.868.777 2.392h2.515l-2.034 1.478.777 2.391-2.035-1.478L2.5 15.13l.777-2.391-2.034-1.478h2.514l.777-2.392Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const gWCircleIconDefinition = svgToIconDefinition(
  gWCircleSvg,
  'gwcircle'
);

/**![GWCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGRkRBNDQiIGQ9Ik0xMiAwYy0xLjA4NCAwLTIuMTMzLjE0NC0zLjEzMS40MTNMNy44MjYgMTJsMS4wNDMgMTEuNTg3YTEyLjAxIDEyLjAxIDAgMCAwIDMuMTMuNDEzYzYuNjI4IDAgMTItNS4zNzMgMTItMTJTMTguNjI4IDAgMTIgMFoiLz48cGF0aCBmaWxsPSIjNkRBNTQ0IiBkPSJtNy44MjYgMTIgMS4wNDMgMTEuNTg3YTEyLjAxIDEyLjAxIDAgMCAwIDMuMTMuNDEzYzYuNjI4IDAgMTItNS4zNzMgMTItMTJINy44MjdaIi8+PHBhdGggZmlsbD0iI0Q4MDAyNyIgZD0iTTAgMTJjMCA0LjU0OCAyLjUzIDguNTA1IDYuMjYgMTAuNTRWMS40NkExMS45OTcgMTEuOTk3IDAgMCAwIDAgMTEuOTk5WiIvPjxwYXRoIGZpbGw9IiNEODAwMjciIGQ9Ik0wIDEyYzAgNS41NDQgMy43NiAxMC4yMSA4Ljg3IDExLjU4N0w4Ljg2OC40MTNDMy43NTkgMS43OSAwIDYuNDU1IDAgMTJaIi8+PHBhdGggZmlsbD0iIzAwMCIgZD0ibTQuNTM0IDguODY4Ljc3NyAyLjM5MmgyLjUxNWwtMi4wMzQgMS40NzguNzc3IDIuMzkxLTIuMDM1LTEuNDc4TDIuNSAxNS4xM2wuNzc3LTIuMzkxLTIuMDM0LTEuNDc4aDIuNTE0bC43NzctMi4zOTJaIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={gWCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'GWCircleIcon';
}

export default RefIcon;
