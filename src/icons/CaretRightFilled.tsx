// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const caretRightFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.525 13.7214L8.92499 23.3015C8.12499 24 7.24999 24.1746 6.29999 23.8254C5.34999 23.3763 4.84999 22.6279 4.79999 21.58V2.41996C4.84999 1.37214 5.34999 0.623701 6.29999 0.174636C7.24999 -0.174636 8.12499 0 8.92499 0.698545L18.525 10.2786C18.975 10.7775 19.2 11.3514 19.2 12C19.2 12.6486 18.975 13.2225 18.525 13.7214Z"/>
  </svg>
);

const caretRightFilledIconDefinition = svgToIconDefinition(
  caretRightFilledSvg,
  'caret-right-filled'
);

/**![CaretRightFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTguNTI1IDEzLjcyMTRMOC45MjQ5OSAyMy4zMDE1QzguMTI0OTkgMjQgNy4yNDk5OSAyNC4xNzQ2IDYuMjk5OTkgMjMuODI1NEM1LjM0OTk5IDIzLjM3NjMgNC44NDk5OSAyMi42Mjc5IDQuNzk5OTkgMjEuNThWMi40MTk5NkM0Ljg0OTk5IDEuMzcyMTQgNS4zNDk5OSAwLjYyMzcwMSA2LjI5OTk5IDAuMTc0NjM2QzcuMjQ5OTkgLTAuMTc0NjM2IDguMTI0OTkgMCA4LjkyNDk5IDAuNjk4NTQ1TDE4LjUyNSAxMC4yNzg2QzE4Ljk3NSAxMC43Nzc1IDE5LjIgMTEuMzUxNCAxOS4yIDEyQzE5LjIgMTIuNjQ4NiAxOC45NzUgMTMuMjIyNSAxOC41MjUgMTMuNzIxNFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={caretRightFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CaretRightFilled';
}

export default RefIcon;
