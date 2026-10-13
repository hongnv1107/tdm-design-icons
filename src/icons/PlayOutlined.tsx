// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const playOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3.99992 21.4177L19.9999 12L3.99992 2.58233V21.4177ZM2.72214 0.33493C3.61103 -0.128819 4.49992 -0.110983 5.38881 0.388439L21.3888 9.80611C22.2036 10.3055 22.6295 11.0368 22.6666 12C22.6295 12.9632 22.2036 13.6945 21.3888 14.1939L5.38881 23.6116C4.49992 24.111 3.61103 24.1288 2.72214 23.6651C1.83325 23.1656 1.37029 22.4165 1.33325 21.4177V2.58233C1.37029 1.58348 1.83325 0.834352 2.72214 0.33493Z"/>
  </svg>
);

const playOutlinedIconDefinition = svgToIconDefinition(
  playOutlinedSvg,
  'play-outlined'
);

/**![PlayOutlined](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMy45OTk5MiAyMS40MTc3TDE5Ljk5OTkgMTJMMy45OTk5MiAyLjU4MjMzVjIxLjQxNzdaTTIuNzIyMTQgMC4zMzQ5M0MzLjYxMTAzIC0wLjEyODgxOSA0LjQ5OTkyIC0wLjExMDk4MyA1LjM4ODgxIDAuMzg4NDM5TDIxLjM4ODggOS44MDYxMUMyMi4yMDM2IDEwLjMwNTUgMjIuNjI5NSAxMS4wMzY4IDIyLjY2NjYgMTJDMjIuNjI5NSAxMi45NjMyIDIyLjIwMzYgMTMuNjk0NSAyMS4zODg4IDE0LjE5MzlMNS4zODg4MSAyMy42MTE2QzQuNDk5OTIgMjQuMTExIDMuNjExMDMgMjQuMTI4OCAyLjcyMjE0IDIzLjY2NTFDMS44MzMyNSAyMy4xNjU2IDEuMzcwMjkgMjIuNDE2NSAxLjMzMzI1IDIxLjQxNzdWMi41ODIzM0MxLjM3MDI5IDEuNTgzNDggMS44MzMyNSAwLjgzNDM1MiAyLjcyMjE0IDAuMzM0OTNaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={playOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PlayOutlined';
}

export default RefIcon;
