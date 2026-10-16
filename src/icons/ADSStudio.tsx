// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSStudioSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 7.875C6.5 7.116 7.116 6.5 7.875 6.5H14.625C15.384 6.5 16 7.116 16 7.875V14.625C16 15.384 15.384 16 14.625 16H7.875C7.116 16 6.5 15.384 6.5 14.625V7.875ZM8 8V14.5H14.5V8H8Z"/><path d="M5.955 0.235C5.521 -0.024 4.979 -0.024 4.545 0.235L0.67 2.549C0.254 2.797 0 3.246 0 3.73V8.02C0 8.504 0.254 8.953 0.67 9.201L4.545 11.515C4.688 11.6 4.842 11.658 5 11.687V10.04L1.5 7.949V3.801L5.25 1.561L9 3.801V5H10.5V3.73C10.5 3.246 10.246 2.797 9.83 2.549L5.955 0.235Z"/>
  </svg>
);

const aDSStudioIconDefinition = svgToIconDefinition(
  aDSStudioSvg,
  'ads-studio'
);

/**![ADSStudio](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNi41IDcuODc1QzYuNSA3LjExNiA3LjExNiA2LjUgNy44NzUgNi41SDE0LjYyNUMxNS4zODQgNi41IDE2IDcuMTE2IDE2IDcuODc1VjE0LjYyNUMxNiAxNS4zODQgMTUuMzg0IDE2IDE0LjYyNSAxNkg3Ljg3NUM3LjExNiAxNiA2LjUgMTUuMzg0IDYuNSAxNC42MjVWNy44NzVaTTggOFYxNC41SDE0LjVWOEg4WiIvPjxwYXRoIGQ9Ik01Ljk1NSAwLjIzNUM1LjUyMSAtMC4wMjQgNC45NzkgLTAuMDI0IDQuNTQ1IDAuMjM1TDAuNjcgMi41NDlDMC4yNTQgMi43OTcgMCAzLjI0NiAwIDMuNzNWOC4wMkMwIDguNTA0IDAuMjU0IDguOTUzIDAuNjcgOS4yMDFMNC41NDUgMTEuNTE1QzQuNjg4IDExLjYgNC44NDIgMTEuNjU4IDUgMTEuNjg3VjEwLjA0TDEuNSA3Ljk0OVYzLjgwMUw1LjI1IDEuNTYxTDkgMy44MDFWNUgxMC41VjMuNzNDMTAuNSAzLjI0NiAxMC4yNDYgMi43OTcgOS44MyAyLjU0OUw1Ljk1NSAwLjIzNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSStudioIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSStudio';
}

export default RefIcon;
