import { Routes, Route } from "react-router-dom";
import Player from "./components/Player.tsx";
// import SideBar from "./components/SideBar.tsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Player />} />
      </Routes>
    </div>
  );
}

export default App;
