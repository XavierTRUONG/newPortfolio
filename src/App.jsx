import './scss/_app.scss';
import { Route, Routes} from "react-router-dom";
import Homepage from './pages/Homepage/Homepage';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/*" element={<NotFound/>} />
      </Routes>
    </>
  );
}

export default App;