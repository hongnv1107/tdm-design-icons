// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTextStyleSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.799 0.484C6.909 0.193 7.188 0 7.5 0H8.518C8.83 0 9.109 0.193 9.219 0.485L12.952 10.36C12.984 10.445 13 10.534 13 10.625V11H11.5V10.762L10.456 8H5.549L4.5 10.763V11H3V10.625C3 10.534 3.017 10.444 3.049 10.359L6.799 0.484ZM6.119 6.5H9.889L8.008 1.524L6.119 6.5Z"/>
  </svg>
);

const aDSTextStyleIconDefinition = svgToIconDefinition(
  aDSTextStyleSvg,
  'ads-text-style'
);

/**![ADSTextStyle](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTYuNzk5IDAuNDg0QzYuOTA5IDAuMTkzIDcuMTg4IDAgNy41IDBIOC41MThDOC44MyAwIDkuMTA5IDAuMTkzIDkuMjE5IDAuNDg1TDEyLjk1MiAxMC4zNkMxMi45ODQgMTAuNDQ1IDEzIDEwLjUzNCAxMyAxMC42MjVWMTFIMTEuNVYxMC43NjJMMTAuNDU2IDhINS41NDlMNC41IDEwLjc2M1YxMUgzVjEwLjYyNUMzIDEwLjUzNCAzLjAxNyAxMC40NDQgMy4wNDkgMTAuMzU5TDYuNzk5IDAuNDg0Wk02LjExOSA2LjVIOS44ODlMOC4wMDggMS41MjRMNi4xMTkgNi41WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTextStyleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTextStyle';
}

export default RefIcon;
