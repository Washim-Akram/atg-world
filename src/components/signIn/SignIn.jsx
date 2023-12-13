import { Col, Row } from "react-bootstrap";
import signUpPhoto from "/public/sign-up.png";
import Modal from "react-bootstrap/Modal";
import { useContext, useState } from "react";
import { UserContext } from "../../context/Context";
import SocialSignUp from "../signUp/SocialSignUp";

const SignIn = () => {
  const { handleSignInShow, handleSignUpShow, showSignIn, signIn } =
    useContext(UserContext);
  const [error, setError] = useState();
  console.log(error);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (password.length < 6) {
      setError("Password should be at least 6 character");
      return;
    }
    
    signIn(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        handleSignInShow(false);
        handleSignUpShow(false);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <>
      <Modal
        show={showSignIn}
        size="lg"
        onHide={() => handleSignInShow(false)}
        backdrop="static"
        keyboard={false}
        className="p-0 "
      >
        <Modal.Header className="p-0" closeButton></Modal.Header>
        <Modal.Body className="p-0 rounded-2">
          <div>
            <p className="nine-px text-center bg-success bg-opacity-10 p-3 text-success fw-medium">
              {" "}
              Lets learn, share & inspire each other with our passion for
              computer engineering. Sign up now 🤘🏼
            </p>

            <Row className=" m-0 px-2 p-md-3 p-lg-4 w-100 ">
              <Col sm={12} lg={6} className="">
                <p className="twenty-four-px fw-bold mt-2 lh-1">Sign In </p>
                <form className="border-1" onSubmit={handleSubmit}>
                  <input
                    className="w-100  py-2 px-3 fw-medium input "
                    type="email"
                    name="email"
                    id=""
                    placeholder="Email"
                  />
                  <input
                    className="w-100  py-2 px-3 fw-medium input "
                    type="password"
                    name="password"
                    id=""
                    placeholder="Password"
                  />
                  <button
                    type="submit"
                    className="w-100 btn btn-primary rounded-pill mt-4 mb-2"
                  >
                    Sign In
                  </button>
                </form>

                <SocialSignUp />
              </Col>

              <Col sm={6} lg={6} className="d-none d-lg-block">
                <p className="text-center">
                  Don’t have an account?{" "}
                  <button
                    className="text-primary border-0 bg-transparent fw-medium"
                    onClick={() => handleSignUpShow(true)}
                  >
                    Create new for free!
                  </button>
                </p>
                <img className="w-100 h-75" src={signUpPhoto} alt="" />
              </Col>
            </Row>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SignIn;
