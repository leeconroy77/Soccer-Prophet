import { Route, Routes, Link } from "react-router-dom"
import './App.css';
import ChineseSuperLeague from "./pages/ChineseSuperLeague";
import EnglishLeagueOne from "./pages/EnglishLeagueOne";
import EnglishLeagueTwo from "./pages/EnglishLeagueTwo";
import Turkish1Lig from "./pages/Turkish1Lig";
import ItalianSerieB from "./pages/ItalianSerieB";
import RomanianLiga1 from "./pages/RomanianLiga1";
import IndianISL from "./pages/IndianISL";
import SpanishLaLiga2 from "./pages/SpanishLaLiga";
import EnglishPremierLeague from "./pages/EnglishPremierLeague";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/chineseSuperLeague" element={<ChineseSuperLeague />} />
        <Route path="/englishLeagueOne" element={<EnglishLeagueOne />} />
        <Route path="/englishLeagueTwo" element={<EnglishLeagueTwo />} />
        <Route path="/turkish1Lig" element={<Turkish1Lig />} />
        <Route path="/italianSerieB" element={<ItalianSerieB />} />
        <Route path="/romanianLiga1" element={<RomanianLiga1 />} />
        <Route path="/indianISL" element={<IndianISL />} />
        <Route path="/spanishLaLiga2" element={<SpanishLaLiga2 />} />
        <Route path="/englishPremierLeague" element={<EnglishPremierLeague />} />
        {/* <Route path="/books" element={< />} /> */}
      </Routes>
      
      
    </div>
  );
}

export default App;
