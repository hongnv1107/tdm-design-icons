// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSIncidentSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
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

/**![ADSIncident](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOCAxQzguMzA3IDEgOC41ODIgMS4xODcgOC42OTYgMS40NzFMMTAuODk2IDYuOTcxTDEzLjUwOCAxMy41SDE1VjE1SDFMMSAxMy41SDIuNDkyTDcuMzA0IDEuNDcxQzcuNDE4IDEuMTg3IDcuNjkzIDEgOCAxWk00LjEwOCAxMy41SDExLjg5MkwxMS4wOTIgMTEuNUg0LjkwOEw0LjEwOCAxMy41Wk01LjUwOCAxMEgxMC40OTJMOS42OTIgOEw2LjMwOCA4TDUuNTA4IDEwWk02LjkwOCA2LjVMOS4wOTIgNi41TDggMy43NjlMNi45MDggNi41WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSIncidentIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSIncident';
}

export default RefIcon;
