import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import FeedbackFormStar from './components/FeedbackFormStar';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='feedbackform' element={<FeedbackFormStar/>}/>
      </Routes>
      
      
    </div>
    </BrowserRouter>
  );
}

export default App;
