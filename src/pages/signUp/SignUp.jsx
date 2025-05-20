import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';

const SignUp = () => {

    const {signUp,profileUpdate} = use(AuthContext)
    

    const handleSignUp =(e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const {email,password,name,photo} = Object.fromEntries(formData.entries())
        // const email = e.target.email.value;
        // const password = e.target.password.value;
      // console.log(name,photo);
        signUp(email,password)
        .then(result=>{
            console.log(result.user);

            // user profile update
            const userProfileData = {
              displayName: name,
              photoURL:photo
            }
            profileUpdate(userProfileData)
            .then(result=>{
              console.log(result);
            })
            .catch(error=>{
              console.log(error.message);
            })
           
           
        })
        .catch(error=>{
            console.log(error.message);
        })

    }



    return (
    <div className="card bg-base-100 w-full mx-auto  mt-10 max-w-lg shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-center">Sign Up now!</h1>
        <button className='btn btn-primary text-white'>Login With Google</button>
        <form onSubmit={handleSignUp} className="fieldset">
            {/* name */}
          <label className="label">Name</label>
          <input type="name" name='name' className="input w-full" placeholder="Name" />
            {/* photo */}
          <label className="label">Photo</label>
          <input type="text" name='photo' className="input w-full" placeholder="Photo URL" />
            {/* email */}
          <label className="label">Email</label>
          <input type="email" name='email' className="input w-full" placeholder="Email" />
         
          {/* password */}
          <label className="label">Password</label>
          <input type="password" name='password' className="input w-full" placeholder="Password" />

          <button className="btn btn-neutral mt-4">Sing Up</button>
          <p className='text-center text-xl'>Already have an account? Please <Link className='text-blue-500 underline' to='/login'>Login</Link></p>
        </form>
      </div>
    </div>
    );
};

export default SignUp;