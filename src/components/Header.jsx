import { useDispatch } from 'react-redux';
import './styles/header.css';
import { Link } from "react-router-dom";
import { logginAction } from '../Actions';

function Header({admin=false}) {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(
      logginAction()
    );
  }

  return (
    <header className="header">
      <h1>Superette</h1>
      {admin? <div><Link to="/">Home</Link> <p onClick={logout}>Logout</p></div>: <Link to="/admin">Admin</Link>}
    </header>
  );
}

export default Header;