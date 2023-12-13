import { Col, Row } from "react-bootstrap";
import signUpPhoto from "/public/sign-up.png";
import Modal from "react-bootstrap/Modal";
import { useContext, useState } from "react";
import { UserContext } from "../../context/Context";
import SocialSignUp from "./SocialSignUp";


const SignUp = () => {
  const { handleSignUpShow, handleSignInShow, showSignUp, createUser, manageUser } =
    useContext(UserContext);
  const [error, setError] = useState();
  console.log(error);

  const photo = 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D'



  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;


    if (password.length < 6) {
      setError("Password should be at least 6 character");
      return;
    }

    if (password !== confirmPassword) {
      setError("Password did not match");
      return;
    }

    console.log(email, password);

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        manageUser(name, photo)
          .then((result) => {
            console.log("Profile Updated",result);
          })
          .catch((error) => {
            console.log(error.message);
          });

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
        show={showSignUp}
        size="lg"
        onHide={() => handleSignUpShow(false)}
        backdrop="static"
        keyboard={false}
        className="p-0"
      >
        <Modal.Header className="p-0" closeButton></Modal.Header>
        <Modal.Body className="p-0 rounded-2">
          <div className="">
            <p className="nine-px text-center bg-success bg-opacity-10 p-3 text-success fw-medium">
              {" "}
              Lets learn, share & inspire each other with our passion for
              computer engineering. Sign up now 🤘🏼
            </p>

            <Row className=" m-0 px-2 p-md-3 p-lg-4 w-100 ">
              <Col sm={12} lg={6} className="">
                <p className="twenty-four-px fw-bold mt-2 lh-1">
                  Create Account
                </p>
                <form onSubmit={handleRegister} className="border-1">
                  <div className="d-flex">
                    <input
                      className="w-50 py-2 px-3 fw-medium input "
                      type="text"
                      placeholder="First Name"
                      name="name"
                    />
                    <input
                      className="w-50 py-2 px-3 fw-medium input "
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>

                  <input
                    className="w-100  py-2 px-3 fw-medium input "
                    type="email"
                    name="email"
                    id=""
                    placeholder="Email"
                    required
                  />
                  <input
                    className="w-100  py-2 px-3 fw-medium input "
                    type="password"
                    name="password"
                    id=""
                    placeholder="Password"
                    required
                  />
                  <input
                    className="w-100 py-2 px-3 fw-medium input "
                    type="password"
                    name="confirmPassword"
                    id=""
                    placeholder="Confirm Password"
                    required
                  />
                  <button
                    type="submit"
                    className="w-100 btn btn-primary rounded-pill mt-4 mb-2"
                  >
                    Create Account
                  </button>
                </form>

                <SocialSignUp />
              </Col>

              <Col sm={6} lg={6} className="d-none d-lg-block">
                <p className="text-center">
                  Already have an account?{" "}
                  <button
                    className="text-primary border-0 bg-transparent fw-medium"
                    onClick={() => handleSignInShow(true)}
                  >
                    Sign In
                  </button>
                </p>
                <img className="w-100 h-75" src={signUpPhoto} alt="" />
                <p className="nine-px text-center">
                  By signing up, you agree to our Terms & conditions, Privacy
                  policy
                </p>
              </Col>
            </Row>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SignUp;
