import { PanelPlugin } from '@grafana/data';
import { AbcPanel } from './components';
import { PanelOptions } from './types';
/**
 * Panel Plugin
 */
export const plugin = new PanelPlugin<PanelOptions>(AbcPanel).setPanelOptions(builder => {
  return builder
    .addTextInput({
      path: 'url',
      name: 'URL',
      description: 'Website URL',
    })
});
