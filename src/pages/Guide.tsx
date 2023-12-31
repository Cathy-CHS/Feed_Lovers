import GuideWindow from 'components/GuideWindow';

import { useNavigate } from 'react-router-dom';

function Guide() {
  // navigate
  const navigate = useNavigate();
  const navigateMain = () => {
    navigate('/main');
  };
  return (
    <div
      className='Guide'
      style={{
        display: 'flex',
        position: 'absolute',
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
      }}
    >
      <GuideWindow
        messageList={[
          '> Do you see me?',
          "> Oh! This really works! I can't believe! \nUmm... anyway, nice to meet you!",
          "> Hello, you are 'Feed', developed for our platform's \ncontent recommendation algorithm.",
          '> No time to talk. There are so many people already waiting for you! \nLet’s go to meet them.',
        ]}
        navigate={navigateMain}
        style={{
          display: 'flex',
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
}

export default Guide;
