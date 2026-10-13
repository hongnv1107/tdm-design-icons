// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const caretDownFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10.2786 18.525L0.698545 8.925C0 8.125 -0.174636 7.25 0.174636 6.3C0.623701 5.35 1.37214 4.85 2.41996 4.8H21.58C22.6279 4.85 23.3763 5.35 23.8254 6.3C24.1746 7.25 24 8.125 23.3015 8.925L13.7214 18.525C13.2225 18.975 12.6486 19.2 12 19.2C11.3514 19.2 10.7775 18.975 10.2786 18.525Z"/>
  </svg>
);

const caretDownFilledIconDefinition = svgToIconDefinition(
  caretDownFilledSvg,
  'caret-down-filled'
);

/**![CaretDownFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTAuMjc4NiAxOC41MjVMMC42OTg1NDUgOC45MjVDMCA4LjEyNSAtMC4xNzQ2MzYgNy4yNSAwLjE3NDYzNiA2LjNDMC42MjM3MDEgNS4zNSAxLjM3MjE0IDQuODUgMi40MTk5NiA0LjhIMjEuNThDMjIuNjI3OSA0Ljg1IDIzLjM3NjMgNS4zNSAyMy44MjU0IDYuM0MyNC4xNzQ2IDcuMjUgMjQgOC4xMjUgMjMuMzAxNSA4LjkyNUwxMy43MjE0IDE4LjUyNUMxMy4yMjI1IDE4Ljk3NSAxMi42NDg2IDE5LjIgMTIgMTkuMkMxMS4zNTE0IDE5LjIgMTAuNzc3NSAxOC45NzUgMTAuMjc4NiAxOC41MjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={caretDownFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CaretDownFilled';
}

export default RefIcon;
