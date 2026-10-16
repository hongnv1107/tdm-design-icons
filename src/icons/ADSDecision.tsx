// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDecisionSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.97 0.97L9.47 5.47L10.53 6.53L15.03 2.03L13.97 0.97ZM3.561 2.5H8V1H1.75C1.336 1 1 1.336 1 1.75V8H2.5V3.561L7.104 8.164C7.197 8.258 7.25 8.385 7.25 8.518V15H8.75V8.518C8.75 7.987 8.539 7.479 8.164 7.104L3.561 2.5Z"/>
  </svg>
);

const aDSDecisionIconDefinition = svgToIconDefinition(
  aDSDecisionSvg,
  'ads-decision'
);

/**![ADSDecision](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjk3IDAuOTdMOS40NyA1LjQ3TDEwLjUzIDYuNTNMMTUuMDMgMi4wM0wxMy45NyAwLjk3Wk0zLjU2MSAyLjVIOFYxSDEuNzVDMS4zMzYgMSAxIDEuMzM2IDEgMS43NVY4SDIuNVYzLjU2MUw3LjEwNCA4LjE2NEM3LjE5NyA4LjI1OCA3LjI1IDguMzg1IDcuMjUgOC41MThWMTVIOC43NVY4LjUxOEM4Ljc1IDcuOTg3IDguNTM5IDcuNDc5IDguMTY0IDcuMTA0TDMuNTYxIDIuNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDecisionIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDecision';
}

export default RefIcon;
