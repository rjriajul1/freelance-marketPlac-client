import React, { use } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router";

const Profile = () => {
  const navigate = useNavigate();
  const { user, userSignOut } = use(AuthContext);
  const handleSignOut = () => {
    userSignOut();
    navigate("/");
  };
  return (
    <div>
      {user && (
        <div className="max-w-sm mx-auto bg-base-100 shadow-xl rounded-xl overflow-hidden">
          {/* Background image */}
          <div
            className="relative h-32 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1050&q=80)",
            }}
          >
            {/* Optional: overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          </div>

          {/* Profile Image - overlapping */}
          <div className="relative -mt-12 flex justify-center">
            <img
              src={user?.photoURL}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-base-100 object-cover"
            />
          </div>

          {/* Info Section */}
          <div className="text-center px-6 py-4">
            <h2 className="text-xl font-semibold text-primary">
              {user?.displayName}
            </h2>
            <p className="text-sm text-gray-500">{user?.email}</p>
            <p className="text-xs text-success mt-1">Verified Freelancer</p>

            {/* Buttons */}
            <div className="mt-4 flex justify-center gap-4">
              {/* <button className="btn btn-outline btn-sm">Edit Profile</button> */}
              <button onClick={handleSignOut} className="btn btn-error btn-sm">
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>

  );
};

export default Profile;
