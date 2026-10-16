// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSStatusWorkflowInactiveSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
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

/**![ADSStatusWorkflowInactive](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0yLjM0MyAyLjM0M0M1LjQ2NyAtMC43ODEgMTAuNTMzIC0wLjc4MSAxMy42NTggMi4zNDNDMTYuNzgyIDUuNDY3IDE2Ljc4MiAxMC41MzMgMTMuNjU4IDEzLjY1OEMxMC41MzMgMTYuNzgyIDUuNDY3IDE2Ljc4MiAyLjM0MyAxMy42NThDLTAuNzgxIDEwLjUzMyAtMC43ODEgNS40NjcgMi4zNDMgMi4zNDNaTTEyLjU5NyAzLjQwNEMxMC4wNTkgMC44NjUgNS45NDIgMC44NjUgMy40MDQgMy40MDRDMC44NjUgNS45NDIgMC44NjUgMTAuMDU5IDMuNDA0IDEyLjU5N0M1Ljk0MiAxNS4xMzYgMTAuMDU5IDE1LjEzNiAxMi41OTcgMTIuNTk3QzE1LjEzNiAxMC4wNTkgMTUuMTM2IDUuOTQyIDEyLjU5NyAzLjQwNFpNMTEuNzEyIDUuMzQ5TDUuMzQ5IDExLjcxMkw0LjI4OCAxMC42NTJMMTAuNjUyIDQuMjg4TDExLjcxMiA1LjM0OVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSStatusWorkflowInactiveIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSStatusWorkflowInactive';
}

export default RefIcon;
