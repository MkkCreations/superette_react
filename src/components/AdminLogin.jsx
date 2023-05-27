import './styles/adminLogin.css';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userPhoto from '../samples/usr.png';
import pwdPhoto from '../samples/pwd.png';
import { logginAction } from '../Actions/index';
import { useDispatch } from 'react-redux';



function AdminLogin() {
    const [user, setUser] = useState({usr: '', pwd: ''});
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.usr === 'supermarket@supermarket.com' && user.pwd === 'supermarket') {
            dispatch(logginAction());
            setError('');
            navigate('/admin');
        } else {
            setError('Invalid Credentials');
        }
    }

    return (
        <div className='loginDiv'>
            <form onSubmit={handleSubmit}>
                {error && <div>{error}</div>}
                <span>
                    <figure>
                        <img src={userPhoto} alt="usr" />
                    </figure>
                    <input type="text" name="usr" placeholder="Email" onChange={handleChange}/>
                </span>
                <br/>
                <span>
                    <figure>
                        <img src={pwdPhoto} alt="pwd" />
                    </figure>
                    <input type="password" name="pwd" placeholder="Password" onChange={handleChange}/>
                </span>
                <a className='forgot' href="/">Forgot Password?</a>
                <br/>
                <button>Login</button>
                <Link className='backHome' to='/'>Back to Home</Link>
            </form>
        </div>
    )
}

export default AdminLogin;