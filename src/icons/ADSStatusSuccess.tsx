// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSStatusSuccessSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C12.418 0 16 3.582 16 8C16 12.418 12.418 16 8 16C3.582 16 0 12.418 0 8C0 3.582 3.582 0 8 0ZM6.75 9.828L4.826 7.52L3.674 8.48L6.174 11.481C6.316 11.651 6.528 11.75 6.75 11.75C6.973 11.75 7.184 11.651 7.326 11.481L12.326 5.48L11.174 4.52L6.75 9.828Z"/>
  </svg>
);

const aDSStatusSuccessIconDefinition = svgToIconDefinition(
  aDSStatusSuccessSvg,
  'ads-status-success'
);

/**![ADSStatusSuccess](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTggMEMxMi40MTggMCAxNiAzLjU4MiAxNiA4QzE2IDEyLjQxOCAxMi40MTggMTYgOCAxNkMzLjU4MiAxNiAwIDEyLjQxOCAwIDhDMCAzLjU4MiAzLjU4MiAwIDggMFpNNi43NSA5LjgyOEw0LjgyNiA3LjUyTDMuNjc0IDguNDhMNi4xNzQgMTEuNDgxQzYuMzE2IDExLjY1MSA2LjUyOCAxMS43NSA2Ljc1IDExLjc1QzYuOTczIDExLjc1IDcuMTg0IDExLjY1MSA3LjMyNiAxMS40ODFMMTIuMzI2IDUuNDhMMTEuMTc0IDQuNTJMNi43NSA5LjgyOFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSStatusSuccessIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSStatusSuccess';
}

export default RefIcon;
