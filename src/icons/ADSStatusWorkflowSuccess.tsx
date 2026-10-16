// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSStatusWorkflowSuccessSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C12.418 0 16 3.582 16 8C16 12.418 12.418 16 8 16C3.582 16 0 12.418 0 8C0 3.582 3.582 0 8 0ZM6.747 9.826L4.826 7.521L3.674 8.481L6.174 11.481C6.317 11.653 6.528 11.751 6.751 11.751C6.974 11.751 7.186 11.651 7.328 11.479L12.078 5.729L10.922 4.773L6.747 9.826Z"/>
  </svg>
);

const aDSStatusWorkflowSuccessIconDefinition = svgToIconDefinition(
  aDSStatusWorkflowSuccessSvg,
  'ads-status-workflow-success'
);

/**![ADSStatusWorkflowSuccess](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOCAwQzEyLjQxOCAwIDE2IDMuNTgyIDE2IDhDMTYgMTIuNDE4IDEyLjQxOCAxNiA4IDE2QzMuNTgyIDE2IDAgMTIuNDE4IDAgOEMwIDMuNTgyIDMuNTgyIDAgOCAwWk02Ljc0NyA5LjgyNkw0LjgyNiA3LjUyMUwzLjY3NCA4LjQ4MUw2LjE3NCAxMS40ODFDNi4zMTcgMTEuNjUzIDYuNTI4IDExLjc1MSA2Ljc1MSAxMS43NTFDNi45NzQgMTEuNzUxIDcuMTg2IDExLjY1MSA3LjMyOCAxMS40NzlMMTIuMDc4IDUuNzI5TDEwLjkyMiA0Ljc3M0w2Ljc0NyA5LjgyNloiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSStatusWorkflowSuccessIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSStatusWorkflowSuccess';
}

export default RefIcon;
