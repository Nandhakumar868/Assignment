import {React, useState, createContext} from 'react';
import Header from './components/Header';
import {BrowserRouter as Router,Routes,Route, BrowserRouter} from 'react-router-dom';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

export const BaseContext = createContext('');

function App() {
  const [basename, setBasename] = useState('/');
  return (
    <Router>
      <div className="App">
        <Header/>
        <BaseContext.Provider value={basename}>
          <Routes>
            <Route path='/pricing' element={<Pricing/>}/>
          </Routes>
        </BaseContext.Provider>
        <Footer/>
    </div>
    </Router>
  );
}

export default App;