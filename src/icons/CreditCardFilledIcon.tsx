// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const creditCardFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22 17.8799C22 18.9845 21.1046 19.8799 20 19.8799H4C2.89543 19.8799 2 18.9845 2 17.8799V10.8799H22V17.8799ZM5 15.8799C4.44776 15.8799 4.00007 16.3277 4 16.8799C4 17.4322 4.44772 17.8799 5 17.8799H9C9.55228 17.8799 10 17.4322 10 16.8799C9.99993 16.3277 9.55224 15.8799 9 15.8799H5ZM13 15.8799C12.4478 15.8799 12.0001 16.3277 12 16.8799C12 17.4322 12.4477 17.8799 13 17.8799H15C15.5523 17.8799 16 17.4322 16 16.8799C15.9999 16.3277 15.5522 15.8799 15 15.8799H13ZM20 3.87988C21.1045 3.87988 21.9999 4.77537 22 5.87988V8.87988H2V5.87988C2.00007 4.77537 2.89547 3.87988 4 3.87988H20Z"/>
  </svg>
);

const creditCardFilledIconDefinition = svgToIconDefinition(
  creditCardFilledSvg,
  'credit-card-filled'
);

/**![CreditCardFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMjIgMTcuODc5OUMyMiAxOC45ODQ1IDIxLjEwNDYgMTkuODc5OSAyMCAxOS44Nzk5SDRDMi44OTU0MyAxOS44Nzk5IDIgMTguOTg0NSAyIDE3Ljg3OTlWMTAuODc5OUgyMlYxNy44Nzk5Wk01IDE1Ljg3OTlDNC40NDc3NiAxNS44Nzk5IDQuMDAwMDcgMTYuMzI3NyA0IDE2Ljg3OTlDNCAxNy40MzIyIDQuNDQ3NzIgMTcuODc5OSA1IDE3Ljg3OTlIOUM5LjU1MjI4IDE3Ljg3OTkgMTAgMTcuNDMyMiAxMCAxNi44Nzk5QzkuOTk5OTMgMTYuMzI3NyA5LjU1MjI0IDE1Ljg3OTkgOSAxNS44Nzk5SDVaTTEzIDE1Ljg3OTlDMTIuNDQ3OCAxNS44Nzk5IDEyLjAwMDEgMTYuMzI3NyAxMiAxNi44Nzk5QzEyIDE3LjQzMjIgMTIuNDQ3NyAxNy44Nzk5IDEzIDE3Ljg3OTlIMTVDMTUuNTUyMyAxNy44Nzk5IDE2IDE3LjQzMjIgMTYgMTYuODc5OUMxNS45OTk5IDE2LjMyNzcgMTUuNTUyMiAxNS44Nzk5IDE1IDE1Ljg3OTlIMTNaTTIwIDMuODc5ODhDMjEuMTA0NSAzLjg3OTg4IDIxLjk5OTkgNC43NzUzNyAyMiA1Ljg3OTg4VjguODc5ODhIMlY1Ljg3OTg4QzIuMDAwMDcgNC43NzUzNyAyLjg5NTQ3IDMuODc5ODggNCAzLjg3OTg4SDIwWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={creditCardFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CreditCardFilledIcon';
}

export default RefIcon;
