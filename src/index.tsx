import Ending from 'pages/Ending';
import Guide from 'pages/Guide';
import Intro from 'pages/Intro';
import Lobby from 'pages/Lobby';
import Main from 'pages/Main';

// import reportWebVitals from "./reportWebVitals";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <DndProvider backend={HTML5Backend}>
    <RecoilRoot>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/guide' element={<Guide />} />
          <Route path='/intro' element={<Intro />} />
          <Route path='/lobby' element={<Lobby />} />
          <Route path='/main' element={<Main />} />
          <Route path='/ending' element={<Ending />} />
          <Route path='*' element={<Navigate to='/intro' replace />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  </DndProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
