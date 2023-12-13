import { useContext } from "react";
import { UserContext } from "../../context/Context";

const SocialSignUp = () => {
  const { facebookSignIn, googleSignIn, handleSignInShow, handleSignUpShow } = useContext(UserContext);

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        handleSignInShow(false);
        handleSignUpShow(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const handleFacebookSignIn = () => {
    facebookSignIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="w-100 ">
      <button
        onClick={handleFacebookSignIn}
        className="w-100 btn-outline-light input  py-2 my-1 fw-medium align-items-center d-flex justify-content-center gap-2"
      >
        <img src="/public/facebook-logo.png" alt="" />
        <span>Sign up with Facebook</span>
      </button>
      <button
        onClick={handleGoogleSignIn}
        className="w-100 btn-outline-light input py-2 my-1 fw-medium d-flex align-items-center justify-content-center gap-2 "
      >
        <img src="/public/google-logo.png" alt="" />{" "}
        <span>Sign up with Google</span>
      </button>
      <p className="text-center fw-medium mt-3">Forgotten Password</p>
    </div>
  );
};

export default SocialSignUp;
