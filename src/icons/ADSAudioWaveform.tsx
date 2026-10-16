// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSAudioWaveformSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 15L6 1L7.5 1L7.5 15H6ZM11.875 13.5V2.5H13.375V13.5H11.875ZM3 12.5L3 3.5H4.5L4.5 12.5H3ZM9 11.5V4.5L10.5 4.5V11.5H9ZM14.5 10.5V5.5H16V10.5H14.5ZM0 10L0 6H1.5L1.5 10H0Z"/>
  </svg>
);

const aDSAudioWaveformIconDefinition = svgToIconDefinition(
  aDSAudioWaveformSvg,
  'ads-audio-waveform'
);

/**![ADSAudioWaveform](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTYgMTVMNiAxTDcuNSAxTDcuNSAxNUg2Wk0xMS44NzUgMTMuNVYyLjVIMTMuMzc1VjEzLjVIMTEuODc1Wk0zIDEyLjVMMyAzLjVINC41TDQuNSAxMi41SDNaTTkgMTEuNVY0LjVMMTAuNSA0LjVWMTEuNUg5Wk0xNC41IDEwLjVWNS41SDE2VjEwLjVIMTQuNVpNMCAxMEwwIDZIMS41TDEuNSAxMEgwWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSAudioWaveformIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSAudioWaveform';
}

export default RefIcon;
