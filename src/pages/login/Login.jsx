import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import { FcGoogle } from 'react-icons/fc';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';

const Login = () => {
    const {login,googleLogin} = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email,password);
        login(email,password)
        .then(result=>{
            console.log(result.user);
            navigate(location?.state || '/')
            toast.success('your login successfully now !')
        })
        .catch(error=>{
            toast.error(error.message);
        })
    }

    const handleGoogleLogin = () => {
      googleLogin()
      .then(result=>{
        console.log(result);
         navigate(location?.state || '/')
         toast.success('you login with google successfully')
      })
      .catch(error=>{
        toast.error(error.message);
      })
    }
    return (
       <div className="card bg-base-100 w-full mx-auto  mt-10 max-w-lg shrink-0 shadow-2xl">
        <Helmet>
          <title>freelance MarketPlace || Login</title>
        </Helmet>
      <div className="card-body">
        <h1 className="text-3xl font-bold text-center">Login now!</h1>
        <button onClick={handleGoogleLogin} className='btn btn-primary text-white'><FcGoogle size={24}></FcGoogle>Login With Google</button>
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