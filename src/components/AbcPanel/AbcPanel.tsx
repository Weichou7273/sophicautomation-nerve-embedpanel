import React, { useEffect, useState } from 'react';
import { css, cx } from '@emotion/css';
import { LoadingState, PanelProps } from '@grafana/data';
import { TestIds } from '../../constants';
import { Styles } from '../../styles';
import { PanelOptions } from '../../types';

interface Props extends PanelProps<PanelOptions> {}

export const AbcPanel: React.FC<Props> = ({ options, width, height }) => {
  const styles = Styles();
  const [loading, setLoading] = useState(LoadingState.NotStarted);
  const [contentUrl, setContentUrl] = useState<string>('');

  useEffect(() => {
    if (options.url) {
      setLoading(LoadingState.Loading);
      setContentUrl(options.url);
      setLoading(LoadingState.Done);
    } else {
      // If URL is blank, clear content and set loading state to NotStarted
      setContentUrl('');
      setLoading(LoadingState.NotStarted);
    }
  }, [options.url]);

  return (
    <div
      data-testid={TestIds.panel.root}
      className={cx(
        styles.wrapper,
        css`
          width: ${width}px;
          height: ${height}px;
          overflow: auto;
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
