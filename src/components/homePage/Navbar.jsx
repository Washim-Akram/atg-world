import { useContext } from "react";
import SignIn from "../signIn/SignIn";
import { UserContext } from "../../context/Context";
import SignUp from "../signUp/SignUp";
import Profile from "./Profile";


const NavigationBar = () => {
  const { handleSignUpShow, user } = useContext(UserContext);
  console.log(user);

  return (
    <div>
      <div className="d-flex d-md-none align-items-center justify-content-end gap-2 my-3 mx-3">
        <img src="/public/Rectangle.png" alt="" />
        <img src="/public/Oval.png" alt="" />
        {
          !user?<img className="" onClick={()=>handleSignUpShow(true)} src="/public/Path.png" alt="" /> :<img className="" src="/public/Path.png" alt="" />
        }
        
        
      </div>

      <div className=" d-none bg-white px-5 my-1  d-md-flex flex-row align-items-center justify-content-between text-white">
        <img className="h-75" src="whole.png" alt="logo" />
        <div className="position-relative">
          <img className="position-absolute top-0 ms-3 mt-2 p-2" src="/public/search-icon.png" alt="" />
          <input
            className="bg-black twelve-px bg-opacity-10 focus-ring-danger ps-5 px-4 text-center py-2 fw-medium   m-2 border-0 rounded-pill   "
            type="text"
            placeholder="Search Favorite Groupe"
          />
        </div>
        {user ? (
          <Profile />
        ) : (
          <div className=" d-none d-md-block text-black fourteen-px">
            Create account.{" "}
            <button
              className="btn text-primary fw-medium"
              onClick={() => handleSignUpShow(true)}
            >
              It’s free!
            </button>
          </div>
        )}

        <SignIn />
        <SignUp />
      </div>
    </div>
  );
};

export default NavigationBar;
