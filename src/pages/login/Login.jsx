import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';

const Login = () => {
    const {login} = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);
        login(email,password)
        .then(result=>{
            console.log(result.user);
            navigate(location?.state || '/')
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    return (
       <div className="card bg-base-100 w-full mx-auto  mt-10 max-w-lg shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-center">Login now!</h1>
        <button className='btn btn-primary text-white'>Login With Google</button>
        <form onSubmit={handleLogin} className="fieldset">
          
           
            {/* email */}
          <label className="label">Email</label>
          <input type="email" name='email' className="input w-full" placeholder="Email" />
         
          {/* password */}
          <label className="label">Password</label>
          <input type="password" name='password' className="input w-full" placeholder="Password" />

          <button className="btn btn-neutral mt-4">Login</button>
          <p className='text-center text-xl'>Don't have an account? Please <Link className='text-blue-500 underline' to='/signUp'>SignUp</Link></p>
        </form>
      </div>
    </div>
    );
};

export default Login;