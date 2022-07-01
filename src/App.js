import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditorPage from "./Pages/EditorPage";
import Home from "./Pages/Home";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      {/* Adding a container for toaster to be displayed */}
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            theme: {
              primary: "#4aed88",
            },
          },
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editor/:roomId" element={<EditorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
