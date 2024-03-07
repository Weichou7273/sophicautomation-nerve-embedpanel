import React, { useEffect, useState } from 'react'; // Importing necessary dependencies
import { css, cx } from '@emotion/css'; // Importing CSS-in-JS utilities
import { LoadingState, PanelProps } from '@grafana/data'; // Importing types and utilities from Grafana
import { TestIds } from '../../constants'; // Importing constants
import { Styles } from '../../styles'; // Importing styles
import { PanelOptions } from '../../types'; // Importing PanelOptions interface

interface Props extends PanelProps<PanelOptions> {} // Defining Props interface extending PanelProps with PanelOptions

export const AbcPanel: React.FC<Props> = ({ options, width, height }) => { // Defining AbcPanel functional component
  const styles = Styles(); // Getting styles from Styles utility
  const [loading, setLoading] = useState(LoadingState.NotStarted); // State for loading state
  const [contentUrl, setContentUrl] = useState<string>(''); // State for content URL

  useEffect(() => {
    if (options.url) { // If URL is provided in options
      setLoading(LoadingState.Loading); // Set loading state to Loading
      setContentUrl(options.url); // Set content URL
      setLoading(LoadingState.Done); // Set loading state to Done after content is loaded
    } else {
      setContentUrl(''); // If URL is blank, clear content URL
      setLoading(LoadingState.NotStarted); // Set loading state to NotStarted
    }
  }, [options.url]); // Run effect whenever URL changes

  return (
    <div
      data-testid={TestIds.panel.root} // Set data-testid attribute for testing
      className={cx( // Use cx to combine multiple classes conditionally
        styles.wrapper, // Apply wrapper styles
        css`
          width: ${width}px; // Set width based on prop
          height: ${height}px; // Set height based on prop
          overflow: auto; // Enable overflow scrolling
        `
      )}
    >
      {loading === LoadingState.Loading && <div>Loading...</div>}
      {loading === LoadingState.Done && (
        <iframe
          src={contentUrl}
          className={css`
            width: 100%;
            height: 100%;
            border: none;
          `}
        />
      )}
      {loading === LoadingState.Error && <div>Error loading content.</div>}
    </div>
  );
};
// call server to get web content
// import React, { useEffect, useState } from 'react';
// import { css, cx } from '@emotion/css';
// import { LoadingState, PanelProps } from '@grafana/data';
// import { TestIds } from '../../constants';
// import { Styles } from '../../styles';
// import { PanelOptions } from '../../types';

// interface Props extends PanelProps<PanelOptions> {}

// export const AbcPanel: React.FC<Props> = ({ options, width, height }) => {
//   const styles = Styles();
//   const [loading, setLoading] = useState(LoadingState.NotStarted);
//   const [content, setContent] = useState<string>('');

//   useEffect(() => {
//     if (options.url) {
//       setLoading(LoadingState.Loading);
//       fetch(`http://localhost:4000/proxy?url=${encodeURIComponent(options.url)}`)
//         .then(response => response.text())
//         .then(text => {
//           setContent(text);
//           setLoading(LoadingState.Done);
//         })
//         .catch(error => {
//           console.error('Error fetching content:', error);
//           setLoading(LoadingState.Error);
//         });
//     }
//   }, [options.url]);

//   return (
//     <div
//       data-testid={TestIds.panel.root}
//       className={cx(
//         styles.wrapper,
//         css`
//           width: ${width}px;
//           height: ${height}px;
//           overflow: auto;
//         `
//       )}
//     >
//       {loading === LoadingState.Loading && <div>Loading...</div>}
//       {loading === LoadingState.Done && (
//         <div dangerouslySetInnerHTML={{ __html: content }} />
//       )}
//       {loading === LoadingState.Error && <div>Error loading content.</div>}
//     </div>
//   );
// };
