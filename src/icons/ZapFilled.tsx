// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const zapFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.1523 0.334909C12.5319 -0.00136794 13.0785 -0.0970881 13.5572 0.105747C14.036 0.308764 14.3475 0.768241 14.3697 1.275L14.3606 1.49504L13.5051 8.53397H21.3331C21.8469 8.53412 22.315 8.82931 22.5362 9.29307C22.7573 9.75673 22.6926 10.3065 22.3696 10.7058L11.9987 23.5063C11.6245 23.9678 10.9898 24.1261 10.4427 23.8944C9.89538 23.6624 9.56762 23.0952 9.63933 22.5051L10.4948 15.4661H2.66681C2.15279 15.4661 1.68494 15.171 1.46371 14.707C1.24263 14.2432 1.3071 13.6936 1.63037 13.2943L12.0013 0.49376L12.1523 0.334909Z"/>
  </svg>
);

const zapFilledIconDefinition = svgToIconDefinition(
  zapFilledSvg,
  'zap-filled'
);

/**![ZapFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTIuMTUyMyAwLjMzNDkwOUMxMi41MzE5IC0wLjAwMTM2Nzk0IDEzLjA3ODUgLTAuMDk3MDg4MSAxMy41NTcyIDAuMTA1NzQ3QzE0LjAzNiAwLjMwODc2NCAxNC4zNDc1IDAuNzY4MjQxIDE0LjM2OTcgMS4yNzVMMTQuMzYwNiAxLjQ5NTA0TDEzLjUwNTEgOC41MzM5N0gyMS4zMzMxQzIxLjg0NjkgOC41MzQxMiAyMi4zMTUgOC44MjkzMSAyMi41MzYyIDkuMjkzMDdDMjIuNzU3MyA5Ljc1NjczIDIyLjY5MjYgMTAuMzA2NSAyMi4zNjk2IDEwLjcwNThMMTEuOTk4NyAyMy41MDYzQzExLjYyNDUgMjMuOTY3OCAxMC45ODk4IDI0LjEyNjEgMTAuNDQyNyAyMy44OTQ0QzkuODk1MzggMjMuNjYyNCA5LjU2NzYyIDIzLjA5NTIgOS42MzkzMyAyMi41MDUxTDEwLjQ5NDggMTUuNDY2MUgyLjY2NjgxQzIuMTUyNzkgMTUuNDY2MSAxLjY4NDk0IDE1LjE3MSAxLjQ2MzcxIDE0LjcwN0MxLjI0MjYzIDE0LjI0MzIgMS4zMDcxIDEzLjY5MzYgMS42MzAzNyAxMy4yOTQzTDEyLjAwMTMgMC40OTM3NkwxMi4xNTIzIDAuMzM0OTA5WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={zapFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ZapFilled';
}

export default RefIcon;
