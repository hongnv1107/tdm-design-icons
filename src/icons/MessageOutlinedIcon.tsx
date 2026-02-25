// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const messageOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8.625 16.061c.469.024.867.188 1.195.493.305.328.47.726.492 1.195v.562l2.567-1.898c.281-.234.61-.352.984-.352h4.887c.352-.023.54-.21.563-.562V5.374c-.024-.352-.211-.54-.563-.563H5.25c-.352.024-.54.211-.563.563v10.125c.024.351.211.539.563.562h3.375zm1.688 4.36l-.176.14-.598.457a.603.603 0 01-.598.036.498.498 0 01-.316-.493V17.75H5.25c-.633-.023-1.16-.246-1.582-.668-.422-.422-.645-.95-.668-1.582V5.374c.023-.633.246-1.16.668-1.582.422-.422.95-.645 1.582-.668h13.5c.633.023 1.16.246 1.582.668.422.422.645.95.668 1.582v10.125c-.023.633-.246 1.16-.668 1.582-.422.422-.95.645-1.582.668h-4.887l-3.55 2.672z"/>
  </svg>
);

const messageOutlinedIconDefinition = svgToIconDefinition(
  messageOutlinedSvg,
  'message-outlined'
);

/**![MessageOutlinedIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTguNjI1IDE2LjA2MWMuNDY5LjAyNC44NjcuMTg4IDEuMTk1LjQ5My4zMDUuMzI4LjQ3LjcyNi40OTIgMS4xOTV2LjU2MmwyLjU2Ny0xLjg5OGMuMjgxLS4yMzQuNjEtLjM1Mi45ODQtLjM1Mmg0Ljg4N2MuMzUyLS4wMjMuNTQtLjIxLjU2My0uNTYyVjUuMzc0Yy0uMDI0LS4zNTItLjIxMS0uNTQtLjU2My0uNTYzSDUuMjVjLS4zNTIuMDI0LS41NC4yMTEtLjU2My41NjN2MTAuMTI1Yy4wMjQuMzUxLjIxMS41MzkuNTYzLjU2MmgzLjM3NXptMS42ODggNC4zNmwtLjE3Ni4xNC0uNTk4LjQ1N2EuNjAzLjYwMyAwIDAxLS41OTguMDM2LjQ5OC40OTggMCAwMS0uMzE2LS40OTNWMTcuNzVINS4yNWMtLjYzMy0uMDIzLTEuMTYtLjI0Ni0xLjU4Mi0uNjY4LS40MjItLjQyMi0uNjQ1LS45NS0uNjY4LTEuNTgyVjUuMzc0Yy4wMjMtLjYzMy4yNDYtMS4xNi42NjgtMS41ODIuNDIyLS40MjIuOTUtLjY0NSAxLjU4Mi0uNjY4aDEzLjVjLjYzMy4wMjMgMS4xNi4yNDYgMS41ODIuNjY4LjQyMi40MjIuNjQ1Ljk1LjY2OCAxLjU4MnYxMC4xMjVjLS4wMjMuNjMzLS4yNDYgMS4xNi0uNjY4IDEuNTgyLS40MjIuNDIyLS45NS42NDUtMS41ODIuNjY4aC00Ljg4N2wtMy41NSAyLjY3MnoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={messageOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MessageOutlinedIcon';
}

export default RefIcon;
