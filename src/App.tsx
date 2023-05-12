import { Routes, Route } from "react-router-dom";
import * as P from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<P.Main />} />
      <Route path="/my" element={<P.My />} />
    </Routes>
  );
}

export default App;
