import './App.css';
import { Route,Routes } from 'react-router-dom';
import { TransbankRouter } from "./router/TransbankRouter";

function App() {
    return (
      <div>
        <Routes>
        <Route path='/*' element={<TransbankRouter />} />
        </Routes>
      </div>
    );
  }

export default App;