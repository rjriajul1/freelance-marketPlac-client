import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import { FcGoogle } from 'react-icons/fc';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';
import { IoIosEyeOff } from 'react-icons/io';
import { FaRegEye } from 'react-icons/fa';

const Login = () => {
    const {login,googleLogin} = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [showPass, setShowPass ] = useState(false);

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
         toast.success('your login with google successfully')
      })
      .catch(error=>{
        toast.error(error.message);
      })
    }
    return (
       <div className="card  w-full mx-auto  mt-10 max-w-lg shrink-0 shadow-2xl">
        <Helmet>
          <title>freelance MarketPlace || Login</title>
        </Helmet>
      <div className="card-body">
        <h1 className="text-3xl font-bold text-center">Login now!</h1>
        <button onClick={handleGoogleLogin} className='btn btn-primary text-white'><FcGoogle size={24}></FcGoogle>Login With Google</button>
        <form onSubmit={handleLogin} className="fieldset">
          
           
            {/* email */}
          <label className="label">Email</label>
          <input type="email" name='email' className="p-2 border w-full" placeholder="Email" />
         
          {/* password */}
          <label className="label">Password</label>
         <div className='relative'>
           <input type={showPass ? 'text' : 'password'} name='password' className="p-2 border w-full" placeholder="Password" />
           <div onClick={()=> setShowPass(!showPass)} className='absolute top-2 right-4'>
             {showPass ? <IoIosEyeOff size={20} /> : <FaRegEye size={20} />}
           </div>
         </div>

          <button className="btn mt-4">Login</button>
          <p className='text-center text-xl'>Don't have an account? Please <Link className='text-blue-500 underline' to='/signUp'>SignUp</Link></p>
        </form>
      </div>
    </div>
    );
};

export default Login;