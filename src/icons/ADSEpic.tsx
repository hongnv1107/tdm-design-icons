// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSEpicSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.271 0.051C10.56 0.163 10.75 0.44 10.75 0.75V5.385L13.897 6.015C14.162 6.068 14.378 6.259 14.463 6.516C14.547 6.773 14.486 7.056 14.304 7.255L6.554 15.755C6.346 15.984 6.018 16.061 5.729 15.949C5.44 15.838 5.25 15.56 5.25 15.25V10.615L2.103 9.985C1.838 9.932 1.622 9.741 1.537 9.484C1.453 9.227 1.514 8.945 1.696 8.745L9.446 0.245C9.654 0.016 9.982 -0.061 10.271 0.051ZM3.698 8.775L6.75 9.385V13.314L12.302 7.225L9.25 6.615V2.686L3.698 8.775Z"/>
  </svg>
);

const aDSEpicIconDefinition = svgToIconDefinition(
  aDSEpicSvg,
  'ads-epic'
);

/**![ADSEpic](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTAuMjcxIDAuMDUxQzEwLjU2IDAuMTYzIDEwLjc1IDAuNDQgMTAuNzUgMC43NVY1LjM4NUwxMy44OTcgNi4wMTVDMTQuMTYyIDYuMDY4IDE0LjM3OCA2LjI1OSAxNC40NjMgNi41MTZDMTQuNTQ3IDYuNzczIDE0LjQ4NiA3LjA1NiAxNC4zMDQgNy4yNTVMNi41NTQgMTUuNzU1QzYuMzQ2IDE1Ljk4NCA2LjAxOCAxNi4wNjEgNS43MjkgMTUuOTQ5QzUuNDQgMTUuODM4IDUuMjUgMTUuNTYgNS4yNSAxNS4yNVYxMC42MTVMMi4xMDMgOS45ODVDMS44MzggOS45MzIgMS42MjIgOS43NDEgMS41MzcgOS40ODRDMS40NTMgOS4yMjcgMS41MTQgOC45NDUgMS42OTYgOC43NDVMOS40NDYgMC4yNDVDOS42NTQgMC4wMTYgOS45ODIgLTAuMDYxIDEwLjI3MSAwLjA1MVpNMy42OTggOC43NzVMNi43NSA5LjM4NVYxMy4zMTRMMTIuMzAyIDcuMjI1TDkuMjUgNi42MTVWMi42ODZMMy42OTggOC43NzVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSEpicIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSEpic';
}

export default RefIcon;
