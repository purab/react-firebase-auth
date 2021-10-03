import React, {useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { loginInitiate, googleSignInInitiate } from '../redux/actions';
import './Login.css';

const Login = () => {
    const [state, setState] = useState({
        email:"",
        password:""
    })

    const {currentUser} = useSelector(state => state.user);
    const {email, password} = state;

    const history = useHistory();

    useEffect(()=> {
        if(currentUser) {
            history.push("/")
        }
    },[currentUser, history])

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!email || !password) {
            return;
        }
        dispatch(loginInitiate(email,password));
        setState({email:"",password:""})
    }
    const handleGoogleSignIn = () => {
        dispatch(googleSignInInitiate());
    }
    const handleFBSignIn = () => {}
    const handleChange =(e) => {
        let {name,value} = e.target;
        setState({...state, [name]:value})
    }
    return (
        <div>
           <div id="logreg-forms">
               <form onSubmit={handleSubmit} className="form-signin"></form>
               <h1 className="h3 mb-3 font-weight-normal" style={{textAlign:"center"}}>
                    Sign in 
               </h1>
               <div className="social-login">
                   <button className="btn google-btn social-btn" type="button" onClick={handleGoogleSignIn}>
                        <span>
                            <i className="fab fa-google-plus-g"></i> Sign in with Google+
                        </span>
                   </button>
               </div>

               <div className="social-login">
                   <button className="btn facebook-btn social-btn" type="button" onClick={handleFBSignIn}>
                        <span>
                            <i className="fab fa-facebook-f"></i>  in with Facebook
                        </span>
                   </button>
               </div>
               <p style={{textAlign:"center"}}>OR </p>
               <input type="email" id="inputEmail" className="form-control" placeholder="Email Address" 
               name="email" onChange={handleChange} value={email} required />
               <input type="password" id="inputPassword" className="form-control" placeholder="Password" 
               name="password" onChange={handleChange} value={password} required />
                <button className="btn btn-secondary btn-block" onClick={handleSubmit}  type="submit">
                      <i className="fas fa-sign-in-alt"></i>  Sign in
                </button>
                <hr />
                <p>Don't have an account </p>
                <Link to="/register"> 
                <button className="btn btn-primary btn-block" id="btn-signup" type="button">
                        <i className="fas fa-user-plus"></i> Sign up for new account
                </button>
                 </Link>
           </div>
        </div>
    )
}

export default Login
