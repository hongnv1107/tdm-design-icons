// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSPageLiveDocSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15 3.5H1V2H15V3.5ZM6 8.5H1V7H6V8.5ZM6 14H1V12.5H6V14Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8.72 7.22C8.928 7.012 9.238 6.944 9.513 7.048L15.513 9.298C15.821 9.413 16.017 9.715 15.999 10.043C15.98 10.37 15.75 10.648 15.432 10.728L12.869 11.369L12.228 13.932C12.148 14.25 11.87 14.48 11.543 14.499C11.215 14.518 10.913 14.321 10.798 14.013L8.548 8.013C8.445 7.738 8.512 7.428 8.72 7.22Z"/>
  </svg>
);

const aDSPageLiveDocIconDefinition = svgToIconDefinition(
  aDSPageLiveDocSvg,
  'ads-page-live-doc'
);

/**![ADSPageLiveDoc](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1IDMuNUgxVjJIMTVWMy41Wk02IDguNUgxVjdINlY4LjVaTTYgMTRIMVYxMi41SDZWMTRaIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04LjcyIDcuMjJDOC45MjggNy4wMTIgOS4yMzggNi45NDQgOS41MTMgNy4wNDhMMTUuNTEzIDkuMjk4QzE1LjgyMSA5LjQxMyAxNi4wMTcgOS43MTUgMTUuOTk5IDEwLjA0M0MxNS45OCAxMC4zNyAxNS43NSAxMC42NDggMTUuNDMyIDEwLjcyOEwxMi44NjkgMTEuMzY5TDEyLjIyOCAxMy45MzJDMTIuMTQ4IDE0LjI1IDExLjg3IDE0LjQ4IDExLjU0MyAxNC40OTlDMTEuMjE1IDE0LjUxOCAxMC45MTMgMTQuMzIxIDEwLjc5OCAxNC4wMTNMOC41NDggOC4wMTNDOC40NDUgNy43MzggOC41MTIgNy40MjggOC43MiA3LjIyWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSPageLiveDocIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSPageLiveDoc';
}

export default RefIcon;
