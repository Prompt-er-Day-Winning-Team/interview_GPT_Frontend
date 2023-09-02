import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import JoinPage from "./pages/join";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/joinpage" element={<JoinPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
