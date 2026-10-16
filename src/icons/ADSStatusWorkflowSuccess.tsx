// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSStatusWorkflowSuccessSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSStatusWorkflowSuccess](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTggMEMxMi40MTggMCAxNiAzLjU4MiAxNiA4QzE2IDEyLjQxOCAxMi40MTggMTYgOCAxNkMzLjU4MiAxNiAwIDEyLjQxOCAwIDhDMCAzLjU4MiAzLjU4MiAwIDggMFpNNi43NDcgOS44MjZMNC44MjYgNy41MjFMMy42NzQgOC40ODFMNi4xNzQgMTEuNDgxQzYuMzE3IDExLjY1MyA2LjUyOCAxMS43NTEgNi43NTEgMTEuNzUxQzYuOTc0IDExLjc1MSA3LjE4NiAxMS42NTEgNy4zMjggMTEuNDc5TDEyLjA3OCA1LjcyOUwxMC45MjIgNC43NzNMNi43NDcgOS44MjZaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSStatusWorkflowSuccessIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSStatusWorkflowSuccess';
}

export default RefIcon;
