import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { StartPage } from './components/StartPage';
import { ResultsPage } from './components/ResultsPage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<StartPage />} />
          <Route path="/:token/:address" element={<ResultsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
