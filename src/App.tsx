import { Routes, Route } from "react-router-dom";
import * as P from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<P.Main />} />
      <Route path="/my" element={<P.My />} />
      <Route path="/signup" element={<P.Signup />} />
    </Routes>
  );
}

export default App;
