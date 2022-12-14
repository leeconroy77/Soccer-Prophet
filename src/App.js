import { Route, Routes, Link } from "react-router-dom"
import './App.css';
import ChineseSuperLeague from "./pages/ChineseSuperLeague";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/chineseSuperLeague" element={<ChineseSuperLeague />} />
        {/* <Route path="/books" element={< />} /> */}
      </Routes>
      
      
    </div>
  );
}

export default App;
