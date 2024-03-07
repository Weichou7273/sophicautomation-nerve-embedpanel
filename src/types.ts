export interface PanelOptions {
  /**
   * Field name with data
   * This property represents the URL or path to retrieve data from.
   * @type {string}
   */
  url: string;
  /**
   * Columns configuration
   * This property represents an array of column configurations for the panel or table.
   * Each column configuration contains a name and a type.
   * @type {Array<{name: string; type: 'button' | 'number' | 'string' | 'boolean'}>}
   */
  columns: Array<{
    /**
     * Column name
     * This property represents the name of the column.
     * @type {string}
     */
    name: string;
    /**
     * Column type
     * This property represents the type of data that the column contains.
     * It can be one of 'button', 'number', 'string', or 'boolean'.
     * @type {'button' | 'number' | 'string' | 'boolean'}
     */
    type: 'button' | 'number' | 'string' | 'boolean';
  }>;
}
