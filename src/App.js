
import './App.css';
import Body from './Component/Body/Body';
import WatchPage from './Component/WatchPage/WatchPage';
import "./index.css"
import { Routes, Route } from 'react-router-dom';
import { ToggleContextProvider } from "../src/Utils/ToggleContext";

function App() {
  return (
    <div className="App">
      <ToggleContextProvider>
        <Routes>
          <Route path='/' exact element={<Body />} />
          <Route path='/watchpage/:id' element={<WatchPage />} />
        </Routes>
      </ToggleContextProvider>
    </div>
  );
}

export default App;
