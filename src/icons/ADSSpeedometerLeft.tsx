// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSSpeedometerLeftSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2.702 5.234C3.88 3.579 5.814 2.5 8 2.5C11.59 2.5 14.5 5.41 14.5 9C14.5 10.852 13.726 12.522 12.482 13.707L13.517 14.793C15.046 13.337 16 11.279 16 9C16 4.582 12.418 1 8 1C5.112 1 2.581 2.53 1.175 4.824L2.702 5.234Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M0.344 6.672C0.2 7.146 0.099 7.638 0.045 8.145L5.501 9.607C5.546 10.669 6.271 11.625 7.353 11.915C8.686 12.272 10.057 11.481 10.414 10.147C10.772 8.813 9.98 7.443 8.647 7.085C7.565 6.795 6.46 7.261 5.889 8.158L0.344 6.672ZM7.741 10.466C7.207 10.323 6.891 9.775 7.034 9.241C7.177 8.708 7.725 8.391 8.258 8.534C8.792 8.677 9.108 9.225 8.965 9.759C8.823 10.292 8.274 10.609 7.741 10.466Z"/><path d="M2.482 14.793C1.234 13.604 0.369 12.013 0.094 10.229L1.714 10.663C2.025 11.842 2.659 12.89 3.517 13.707L2.482 14.793Z"/>
  </svg>
);

const aDSSpeedometerLeftIconDefinition = svgToIconDefinition(
  aDSSpeedometerLeftSvg,
  'ads-speedometer-left'
);

/**![ADSSpeedometerLeft](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMi43MDIgNS4yMzRDMy44OCAzLjU3OSA1LjgxNCAyLjUgOCAyLjVDMTEuNTkgMi41IDE0LjUgNS40MSAxNC41IDlDMTQuNSAxMC44NTIgMTMuNzI2IDEyLjUyMiAxMi40ODIgMTMuNzA3TDEzLjUxNyAxNC43OTNDMTUuMDQ2IDEzLjMzNyAxNiAxMS4yNzkgMTYgOUMxNiA0LjU4MiAxMi40MTggMSA4IDFDNS4xMTIgMSAyLjU4MSAyLjUzIDEuMTc1IDQuODI0TDIuNzAyIDUuMjM0WiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMC4zNDQgNi42NzJDMC4yIDcuMTQ2IDAuMDk5IDcuNjM4IDAuMDQ1IDguMTQ1TDUuNTAxIDkuNjA3QzUuNTQ2IDEwLjY2OSA2LjI3MSAxMS42MjUgNy4zNTMgMTEuOTE1QzguNjg2IDEyLjI3MiAxMC4wNTcgMTEuNDgxIDEwLjQxNCAxMC4xNDdDMTAuNzcyIDguODEzIDkuOTggNy40NDMgOC42NDcgNy4wODVDNy41NjUgNi43OTUgNi40NiA3LjI2MSA1Ljg4OSA4LjE1OEwwLjM0NCA2LjY3MlpNNy43NDEgMTAuNDY2QzcuMjA3IDEwLjMyMyA2Ljg5MSA5Ljc3NSA3LjAzNCA5LjI0MUM3LjE3NyA4LjcwOCA3LjcyNSA4LjM5MSA4LjI1OCA4LjUzNEM4Ljc5MiA4LjY3NyA5LjEwOCA5LjIyNSA4Ljk2NSA5Ljc1OUM4LjgyMyAxMC4yOTIgOC4yNzQgMTAuNjA5IDcuNzQxIDEwLjQ2NloiLz48cGF0aCBkPSJNMi40ODIgMTQuNzkzQzEuMjM0IDEzLjYwNCAwLjM2OSAxMi4wMTMgMC4wOTQgMTAuMjI5TDEuNzE0IDEwLjY2M0MyLjAyNSAxMS44NDIgMi42NTkgMTIuODkgMy41MTcgMTMuNzA3TDIuNDgyIDE0Ljc5M1oiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSSpeedometerLeftIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSSpeedometerLeft';
}

export default RefIcon;
