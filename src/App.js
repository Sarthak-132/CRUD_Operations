import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <div className="container">
<h1 className='text-center my-3'>CRUD Operations</h1>
        <BrowserRouter>
          <Routes>
              <Route exact path='/' element={<Create/>}/>
              <Route exact path='/read' element={<Read/>}/>
              <Route exact path='/update' element={<Update/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
