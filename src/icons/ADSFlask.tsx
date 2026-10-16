// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSFlaskSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.25 1V2.5H10.5V3.859L13.783 12.273C14.295 13.584 13.328 15 11.92 15H4.08C2.672 15 1.705 13.584 2.217 12.273L5.5 3.859V2.5H4.75V1H11.25ZM3.614 12.818C3.486 13.146 3.728 13.5 4.08 13.5H11.92C12.272 13.5 12.514 13.146 12.386 12.818L10.897 9H5.104L3.614 12.818ZM7 4C7 4.093 6.982 4.186 6.948 4.272L5.69 7.5H10.311L9.052 4.272C9.018 4.186 9 4.093 9 4V2.5H7V4Z"/>
  </svg>
);

const aDSFlaskIconDefinition = svgToIconDefinition(
  aDSFlaskSvg,
  'ads-flask'
);

/**![ADSFlask](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xMS4yNSAxVjIuNUgxMC41VjMuODU5TDEzLjc4MyAxMi4yNzNDMTQuMjk1IDEzLjU4NCAxMy4zMjggMTUgMTEuOTIgMTVINC4wOEMyLjY3MiAxNSAxLjcwNSAxMy41ODQgMi4yMTcgMTIuMjczTDUuNSAzLjg1OVYyLjVINC43NVYxSDExLjI1Wk0zLjYxNCAxMi44MThDMy40ODYgMTMuMTQ2IDMuNzI4IDEzLjUgNC4wOCAxMy41SDExLjkyQzEyLjI3MiAxMy41IDEyLjUxNCAxMy4xNDYgMTIuMzg2IDEyLjgxOEwxMC44OTcgOUg1LjEwNEwzLjYxNCAxMi44MThaTTcgNEM3IDQuMDkzIDYuOTgyIDQuMTg2IDYuOTQ4IDQuMjcyTDUuNjkgNy41SDEwLjMxMUw5LjA1MiA0LjI3MkM5LjAxOCA0LjE4NiA5IDQuMDkzIDkgNFYyLjVIN1Y0WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSFlaskIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSFlask';
}

export default RefIcon;
