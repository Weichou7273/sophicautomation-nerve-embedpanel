/**
 * Options
 */
export interface PanelOptions {
  /**
   * Field name with data
   *
   * @type {string}
   */
  url: string;
  columns: Array<{name: string; type: 'button' | 'number' | 'string' | 'boolean'}>;
}
