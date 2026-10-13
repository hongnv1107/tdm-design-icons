// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const tagFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10.8193 0C11.8078 2.64802e-05 12.6506 0.347466 13.3462 1.0415L23.0112 10.6846C23.6703 11.4152 24 12.2381 24 13.1514C23.9998 14.1009 23.6701 14.9228 23.0112 15.6167L15.6519 22.9585C14.9196 23.6526 14.096 24 13.1807 24C12.2288 24 11.4051 23.6525 10.7095 22.9585L1.04297 13.3154C0.347367 12.6214 0 11.7984 0 10.8486V2.63086C0.0366094 1.90034 0.293167 1.27896 0.769043 0.767578C1.28163 0.292692 1.90445 0.0365297 2.63672 0H10.8193ZM4.5 3C3.67157 3 3 3.67157 3 4.5C3 5.32843 3.67157 6 4.5 6C5.32843 6 6 5.32843 6 4.5C6 3.67157 5.32843 3 4.5 3Z"/>
  </svg>
);

const tagFilledIconDefinition = svgToIconDefinition(
  tagFilledSvg,
  'tag-filled'
);

/**![TagFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTAuODE5MyAwQzExLjgwNzggMi42NDgwMmUtMDUgMTIuNjUwNiAwLjM0NzQ2NiAxMy4zNDYyIDEuMDQxNUwyMy4wMTEyIDEwLjY4NDZDMjMuNjcwMyAxMS40MTUyIDI0IDEyLjIzODEgMjQgMTMuMTUxNEMyMy45OTk4IDE0LjEwMDkgMjMuNjcwMSAxNC45MjI4IDIzLjAxMTIgMTUuNjE2N0wxNS42NTE5IDIyLjk1ODVDMTQuOTE5NiAyMy42NTI2IDE0LjA5NiAyNCAxMy4xODA3IDI0QzEyLjIyODggMjQgMTEuNDA1MSAyMy42NTI1IDEwLjcwOTUgMjIuOTU4NUwxLjA0Mjk3IDEzLjMxNTRDMC4zNDczNjcgMTIuNjIxNCAwIDExLjc5ODQgMCAxMC44NDg2VjIuNjMwODZDMC4wMzY2MDk0IDEuOTAwMzQgMC4yOTMxNjcgMS4yNzg5NiAwLjc2OTA0MyAwLjc2NzU3OEMxLjI4MTYzIDAuMjkyNjkyIDEuOTA0NDUgMC4wMzY1Mjk3IDIuNjM2NzIgMEgxMC44MTkzWk00LjUgM0MzLjY3MTU3IDMgMyAzLjY3MTU3IDMgNC41QzMgNS4zMjg0MyAzLjY3MTU3IDYgNC41IDZDNS4zMjg0MyA2IDYgNS4zMjg0MyA2IDQuNUM2IDMuNjcxNTcgNS4zMjg0MyAzIDQuNSAzWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={tagFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'TagFilled';
}

export default RefIcon;
