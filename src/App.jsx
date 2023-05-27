import './components/styles/App.css';
import { useSelector, useDispatch } from 'react-redux';
import { listeAction } from './Actions/index';
import { useEffect } from 'react';
import ListeProducts from './components/ListeProducts';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import AdminLogin from './components/AdminLogin';
import Admin from './components/Admin';

function App() {
  const liste = useSelector(state => state.listeReducer);
  const logged = useSelector(state => state.loggedReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listeAction());
  }, []);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListeProducts liste={liste} />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/admin" element={logged?<Admin />:<AdminLogin/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
