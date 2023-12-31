import GuideWindowLayout from 'components/GuideWindowLayout';
import GuideWindowMessage from 'components/GuideWindowMessage';

import { CSSProperties, MouseEventHandler } from 'react';

function GuideWindow(props: {
  messageList: string[];
  navigate: MouseEventHandler;
  style: CSSProperties;
}) {
  const { messageList, navigate, style } = props;
  return (
    <div style={style}>
      <GuideWindowLayout />
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          zIndex: 2,
        }}
      >
        <GuideWindowMessage
          counter={0}
          messageList={messageList}
          navigate={navigate}
        />
      </div>
    </div>
  );
}

export default GuideWindow;
