// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const boltLightningFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3.01752 11.9766L4.32746 1.30994C4.42103 0.561404 5.076 0 5.82453 0H13.6842C14.3859 0 14.9941 0.608187 14.9941 1.30994C14.9941 1.45029 14.9473 1.59064 14.9006 1.73099L12.7485 7.48538H19.2514C20.1871 7.48538 20.9824 8.2807 20.9824 9.21637C20.9824 9.59064 20.8421 9.91813 20.6549 10.1988L11.6725 23.345C11.3918 23.7193 10.9239 24 10.4561 24H10.3158C9.56722 24 9.00582 23.3918 9.00582 22.6433C9.00582 22.5497 9.00582 22.4094 9.0526 22.3158L11.2514 13.4737H4.51459C3.67249 13.4737 3.01752 12.8187 3.01752 11.9766Z"/>
  </svg>
);

const boltLightningFilledIconDefinition = svgToIconDefinition(
  boltLightningFilledSvg,
  'bolt-lightning-filled'
);

/**![BoltLightningFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMy4wMTc1MiAxMS45NzY2TDQuMzI3NDYgMS4zMDk5NEM0LjQyMTAzIDAuNTYxNDA0IDUuMDc2IDAgNS44MjQ1MyAwSDEzLjY4NDJDMTQuMzg1OSAwIDE0Ljk5NDEgMC42MDgxODcgMTQuOTk0MSAxLjMwOTk0QzE0Ljk5NDEgMS40NTAyOSAxNC45NDczIDEuNTkwNjQgMTQuOTAwNiAxLjczMDk5TDEyLjc0ODUgNy40ODUzOEgxOS4yNTE0QzIwLjE4NzEgNy40ODUzOCAyMC45ODI0IDguMjgwNyAyMC45ODI0IDkuMjE2MzdDMjAuOTgyNCA5LjU5MDY0IDIwLjg0MjEgOS45MTgxMyAyMC42NTQ5IDEwLjE5ODhMMTEuNjcyNSAyMy4zNDVDMTEuMzkxOCAyMy43MTkzIDEwLjkyMzkgMjQgMTAuNDU2MSAyNEgxMC4zMTU4QzkuNTY3MjIgMjQgOS4wMDU4MiAyMy4zOTE4IDkuMDA1ODIgMjIuNjQzM0M5LjAwNTgyIDIyLjU0OTcgOS4wMDU4MiAyMi40MDk0IDkuMDUyNiAyMi4zMTU4TDExLjI1MTQgMTMuNDczN0g0LjUxNDU5QzMuNjcyNDkgMTMuNDczNyAzLjAxNzUyIDEyLjgxODcgMy4wMTc1MiAxMS45NzY2WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={boltLightningFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BoltLightningFilled';
}

export default RefIcon;
