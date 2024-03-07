import { PanelPlugin } from '@grafana/data'; // Importing necessary dependencies
import { AbcPanel } from './components'; // Importing the panel component
import { PanelOptions } from './types'; // Importing the PanelOptions interface from './types'

/**
 * Panel Plugin
 */
// Creating a new PanelPlugin instance with PanelOptions type and AbcPanel component
export const plugin = new PanelPlugin<PanelOptions>(AbcPanel) 
  .setPanelOptions(builder => { // Setting panel options using a builder function
    return builder
      .addTextInput({ // Adding a text input field to configure the URL
        path: 'url', // Path to the property in PanelOptions interface
        name: 'URL', // Display name of the field
        description: 'Website URL', // Description of the field
      });
  });
