import {Routes, Route} from "react-router-dom"
import SideBar from "./components/SideBar.tsx";


function App() {
  return <div>
    <Routes>
      <Route path="/" element={<SideBar />} />


    </Routes>
  </div>;
}

export default App;
