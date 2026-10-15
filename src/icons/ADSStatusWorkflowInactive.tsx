// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSStatusWorkflowInactiveSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2.343 2.343C5.467 -0.781 10.533 -0.781 13.658 2.343C16.782 5.467 16.782 10.533 13.658 13.658C10.533 16.782 5.467 16.782 2.343 13.658C-0.781 10.533 -0.781 5.467 2.343 2.343ZM12.597 3.404C10.059 0.865 5.942 0.865 3.404 3.404C0.865 5.942 0.865 10.059 3.404 12.597C5.942 15.136 10.059 15.136 12.597 12.597C15.136 10.059 15.136 5.942 12.597 3.404ZM11.712 5.349L5.349 11.712L4.288 10.652L10.652 4.288L11.712 5.349Z"/>
  </svg>
);

const aDSStatusWorkflowInactiveIconDefinition = svgToIconDefinition(
  aDSStatusWorkflowInactiveSvg,
  'ads-status-workflow-inactive'
);

/**![ADSStatusWorkflowInactive](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMi4zNDMgMi4zNDNDNS40NjcgLTAuNzgxIDEwLjUzMyAtMC43ODEgMTMuNjU4IDIuMzQzQzE2Ljc4MiA1LjQ2NyAxNi43ODIgMTAuNTMzIDEzLjY1OCAxMy42NThDMTAuNTMzIDE2Ljc4MiA1LjQ2NyAxNi43ODIgMi4zNDMgMTMuNjU4Qy0wLjc4MSAxMC41MzMgLTAuNzgxIDUuNDY3IDIuMzQzIDIuMzQzWk0xMi41OTcgMy40MDRDMTAuMDU5IDAuODY1IDUuOTQyIDAuODY1IDMuNDA0IDMuNDA0QzAuODY1IDUuOTQyIDAuODY1IDEwLjA1OSAzLjQwNCAxMi41OTdDNS45NDIgMTUuMTM2IDEwLjA1OSAxNS4xMzYgMTIuNTk3IDEyLjU5N0MxNS4xMzYgMTAuMDU5IDE1LjEzNiA1Ljk0MiAxMi41OTcgMy40MDRaTTExLjcxMiA1LjM0OUw1LjM0OSAxMS43MTJMNC4yODggMTAuNjUyTDEwLjY1MiA0LjI4OEwxMS43MTIgNS4zNDlaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSStatusWorkflowInactiveIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSStatusWorkflowInactive';
}

export default RefIcon;
