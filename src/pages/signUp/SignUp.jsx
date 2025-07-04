import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { FaRegEye } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";

const SignUp = () => {
  const { signUp, profileUpdate, googleLogin, emailVerify, } =
    use(AuthContext);
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, name, photo } = Object.fromEntries(
      formData.entries()
    );
    // const email = e.target.email.value;
    // const password = e.target.password.value;
    // console.log(name,photo);
    if (!/^(?=.*[a-z])/.test(password)) {
      toast.error("this password inside must be one character lower case");
      return;
    }

    if (!/^(?=.*[A-Z])/.test(password)) {
      toast.error("this password inside must be one character Uppercase case!");
      return;
    }
    if (password.length < 6) {
      toast.error("password at least 6 characters or geater than longer!");
      return;
    }

    signUp(email, password)
      .then((result) => {
        console.log(result.user);
        // user email verification
        emailVerify()
          .then((res) => {
            console.log(res);
          })
          .catch((error) => {
            toast.error(error.message);
          });
          navigate("/");
          toast.success("your successfully Sing Up");
        // user profile update
        const userProfileData = {
          displayName: name,
          photoURL: photo,
        };
        profileUpdate(userProfileData)
          .then((result) => {
            console.log(result);
          })
          .catch((error) => {
            toast.error(error.message);
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result);
        navigate(location?.state || "/");
        toast.success("your login with google successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="card  w-full mx-auto  mt-10 max-w-lg shrink-0 shadow-2xl">
      <Helmet>
        <title>freelance MarketPlace || Sign Up</title>
      </Helmet>
      <div className="card-body">
        <h1 className="text-3xl font-bold text-center">Sign Up now!</h1>
        <button
          onClick={handleGoogleLogin}
          className="btn btn-primary text-white"
        >
          <FcGoogle size={24}></FcGoogle>Login With Google
        </button>
        <form onSubmit={handleSignUp} className="fieldset">
          {/* name */}
          <label className="label">Name</label>
          <input
            type="name"
            name="name"
            className="p-2 border w-full"
            placeholder="Name"
          />
          {/* photo */}
          <label className="label">Photo</label>
          <input
            type="text"
            name="photo"
            className="p-2 border w-full"
            placeholder="Photo URL"
          />
          {/* email */}
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="p-2 border w-full"
            placeholder="Email"
          />

          {/* password */}
          <label className="label">Password</label>
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              name="password"
              className="border p-2 w-full"
              placeholder="Password"
            />
            <div
              onClick={() => setShowPass(!showPass)}
              className="absolute top-2 right-4"
            >
              {showPass ? <IoIosEyeOff size={20} /> : <FaRegEye size={20} />}
            </div>
          </div>

          <button className="btn mt-4">Sing Up</button>
          <p className="text-center text-xl">
            Already have an account? Please{" "}
            <Link className="text-blue-500 underline" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
