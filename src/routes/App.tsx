import { BrowserRouter, Routes, Route } from "react-router";

import Home from "../pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/verb-guide-app" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
