import { Routes, Route } from "react-router-dom";
import * as P from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<P.Main />} />
      <Route path="/my" element={<P.My />} />
      <Route path="/detail/:movieID" element={<P.Detail />} />
      <Route path="/signup" element={<P.Signup />} />
      <Route path="/login" element={<P.Login />} />
    </Routes>
  );
}

export default App;
