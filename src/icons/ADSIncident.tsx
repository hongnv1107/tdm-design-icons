// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSIncidentSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 1C8.307 1 8.582 1.187 8.696 1.471L10.896 6.971L13.508 13.5H15V15H1L1 13.5H2.492L7.304 1.471C7.418 1.187 7.693 1 8 1ZM4.108 13.5H11.892L11.092 11.5H4.908L4.108 13.5ZM5.508 10H10.492L9.692 8L6.308 8L5.508 10ZM6.908 6.5L9.092 6.5L8 3.769L6.908 6.5Z"/>
  </svg>
);

const aDSIncidentIconDefinition = svgToIconDefinition(
  aDSIncidentSvg,
  'ads-incident'
);

/**![ADSIncident](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTggMUM4LjMwNyAxIDguNTgyIDEuMTg3IDguNjk2IDEuNDcxTDEwLjg5NiA2Ljk3MUwxMy41MDggMTMuNUgxNVYxNUgxTDEgMTMuNUgyLjQ5Mkw3LjMwNCAxLjQ3MUM3LjQxOCAxLjE4NyA3LjY5MyAxIDggMVpNNC4xMDggMTMuNUgxMS44OTJMMTEuMDkyIDExLjVINC45MDhMNC4xMDggMTMuNVpNNS41MDggMTBIMTAuNDkyTDkuNjkyIDhMNi4zMDggOEw1LjUwOCAxMFpNNi45MDggNi41TDkuMDkyIDYuNUw4IDMuNzY5TDYuOTA4IDYuNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSIncidentIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSIncident';
}

export default RefIcon;
