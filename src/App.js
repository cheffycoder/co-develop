import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditorPage from './Pages/EditorPage';
import Home from './Pages/Home';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/editor/:roomId" element={<EditorPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
