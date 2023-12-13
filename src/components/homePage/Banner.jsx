import { useContext } from "react";
import { UserContext } from "../../context/Context";


const Banner = () => {
    const {user} = useContext(UserContext)
    return (
        <div className="h-100 w-100  position-relative mb-5">
            <img className="w-100 mx-auto object-fit-contain" src="banner.png" alt="Banner Photo" />
            <div className="h-100 w-100 position-absolute top-0 bg-black z-0 bg-opacity-50 ">
                <div className="d-block d-md-none position-absolute end-0 me-3 mt-3 ">
                <button
            className={`btn bg-primary fw-medium rounded-2 border ${
                user ? "bg-dark bg-opacity-25 text-light" : ""
              }`}
          >
            {user ? "Leave Group" : "Join Group"}{" "}
          </button>

                </div>
                <div className="fw-bold text-white position-absolute bottom-0 m-1 m-md-5 px-1 md-px-5">
                <p className="z-3 thirty-six-px ">Computer Engineering</p>
                <h4 className="eighteen-px">142,765 Computer Engineers follow this</h4>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;