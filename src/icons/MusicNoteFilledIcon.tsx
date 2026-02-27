// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const musicNoteFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18 5V7C18 7.46875 17.6875 7.875 17.2188 7.96875L14 8.78125V17.5C14 18.9062 12.4062 20 10.5 20C8.5625 20 7 18.9062 7 17.5C7 16.125 8.5625 15 10.5 15C11.0312 15 11.5312 15.0938 12 15.25V8V6C12 5.5625 12.3125 5.15625 12.75 5.03125L16.75 4.03125C17.0312 3.96875 17.3438 4.03125 17.5938 4.21875C17.8438 4.40625 18 4.71875 18 5Z"/>
  </svg>
);

const musicNoteFilledIconDefinition = svgToIconDefinition(
  musicNoteFilledSvg,
  'music-note-filled'
);

/**![MusicNoteFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTggNVY3QzE4IDcuNDY4NzUgMTcuNjg3NSA3Ljg3NSAxNy4yMTg4IDcuOTY4NzVMMTQgOC43ODEyNVYxNy41QzE0IDE4LjkwNjIgMTIuNDA2MiAyMCAxMC41IDIwQzguNTYyNSAyMCA3IDE4LjkwNjIgNyAxNy41QzcgMTYuMTI1IDguNTYyNSAxNSAxMC41IDE1QzExLjAzMTIgMTUgMTEuNTMxMiAxNS4wOTM4IDEyIDE1LjI1VjhWNkMxMiA1LjU2MjUgMTIuMzEyNSA1LjE1NjI1IDEyLjc1IDUuMDMxMjVMMTYuNzUgNC4wMzEyNUMxNy4wMzEyIDMuOTY4NzUgMTcuMzQzOCA0LjAzMTI1IDE3LjU5MzggNC4yMTg3NUMxNy44NDM4IDQuNDA2MjUgMTggNC43MTg3NSAxOCA1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={musicNoteFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MusicNoteFilledIcon';
}

export default RefIcon;
