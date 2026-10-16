// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSStudioSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSStudio](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTYuNSA3Ljg3NUM2LjUgNy4xMTYgNy4xMTYgNi41IDcuODc1IDYuNUgxNC42MjVDMTUuMzg0IDYuNSAxNiA3LjExNiAxNiA3Ljg3NVYxNC42MjVDMTYgMTUuMzg0IDE1LjM4NCAxNiAxNC42MjUgMTZINy44NzVDNy4xMTYgMTYgNi41IDE1LjM4NCA2LjUgMTQuNjI1VjcuODc1Wk04IDhWMTQuNUgxNC41VjhIOFoiLz48cGF0aCBkPSJNNS45NTUgMC4yMzVDNS41MjEgLTAuMDI0IDQuOTc5IC0wLjAyNCA0LjU0NSAwLjIzNUwwLjY3IDIuNTQ5QzAuMjU0IDIuNzk3IDAgMy4yNDYgMCAzLjczVjguMDJDMCA4LjUwNCAwLjI1NCA4Ljk1MyAwLjY3IDkuMjAxTDQuNTQ1IDExLjUxNUM0LjY4OCAxMS42IDQuODQyIDExLjY1OCA1IDExLjY4N1YxMC4wNEwxLjUgNy45NDlWMy44MDFMNS4yNSAxLjU2MUw5IDMuODAxVjVIMTAuNVYzLjczQzEwLjUgMy4yNDYgMTAuMjQ2IDIuNzk3IDkuODMgMi41NDlMNS45NTUgMC4yMzVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSStudioIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSStudio';
}

export default RefIcon;
