import { Route, Routes, Link } from "react-router-dom"
import './App.css';
import ChineseSuperLeague from "./pages/ChineseSuperLeague";
import EnglishLeagueOne from "./pages/EnglishLeagueOne";
import EnglishLeagueTwo from "./pages/EnglishLeagueTwo";
import Turkish1Lig from "./pages/Turkish1Lig";
import ItalianSerieB from "./pages/ItalianSerieB";
import RomanianLiga1 from "./pages/RomanianLiga1";
import IndianISL from "./pages/IndianISL";
import SpanishLaLiga2 from "./pages/SpanishLaLiga2";
import EnglishPremierLeague from "./pages/EnglishPremierLeague";
import EnglishChampionship from "./pages/EnglishChampionship";
import Navigation from "./components/Navigation";
import ScottishPremiership from "./pages/ScottishPremiership";
import ScottishChampionship from "./pages/ScottishChampionship";
import ScottishLeagueOne from "./pages/ScottishLeagueOne";
import ScottishLeagueTwo from "./pages/ScottishLeagueTwo";
import BelgianChallengerProLeague from "./pages/BelgianChallengerLeaguePro";
import TurkishSuperLig from "./pages/TurkishSuperLig";
import FrenchLigue2 from "./pages/FrenchLigue2";
import SpanishLaLiga from "./pages/SpanishLaLiga";
import FrenchLigue1 from "./pages/FrenchLigue1";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/belgianChallengerProLeague" element={<BelgianChallengerProLeague />} />
        <Route path="/chineseSuperLeague" element={<ChineseSuperLeague />} />
        <Route path="/englishLeagueOne" element={<EnglishLeagueOne />} />
        <Route path="/englishLeagueTwo" element={<EnglishLeagueTwo />} />
        <Route path="/turkish1Lig" element={<Turkish1Lig />} />
        <Route path="/italianSerieB" element={<ItalianSerieB />} />
        <Route path="/romanianLiga1" element={<RomanianLiga1 />} />
        <Route path="/indianISL" element={<IndianISL />} />
        <Route path="/spanishLaLiga2" element={<SpanishLaLiga2 />} />
        <Route path="/englishPremierLeague" element={<EnglishPremierLeague />} />
        <Route path="/englishChampionship" element={<EnglishChampionship />} />
        <Route path="/scottishPremiership" element={<ScottishPremiership />} />
        <Route path="/scottishChampionship" element={<ScottishChampionship />} />
        <Route path="/scottishLeagueOne" element={<ScottishLeagueOne />} />
        <Route path="/scottishLeagueTwo" element={<ScottishLeagueTwo />} />
        <Route path="/turkishSuperLig" element={<TurkishSuperLig />} />
        <Route path="/frenchLigue2" element={<FrenchLigue2 />} />
        <Route path="/spanishLaLiga" element={<SpanishLaLiga />} />
        <Route path="/frenchLigue1" element={<FrenchLigue1 />} />
        {/* <Route path="/books" element={< />} /> */}
      </Routes>
      
      
    </div>
  );
}

export default App;
