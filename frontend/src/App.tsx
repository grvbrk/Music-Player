import { Routes, Route } from "react-router-dom";
import Player from "./components/Player/Player.tsx";
// import SideBar from "./components/SideBar.tsx";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <div>
      <Routes>
        <RecoilRoot>
          <Route path="/" element={<Player />} />
        </RecoilRoot>
      </Routes>
    </div>
  );
}

export default App;
