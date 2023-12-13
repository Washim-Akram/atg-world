import { Dropdown } from "react-bootstrap";

const PostCard = () => {
  return (
    <div className="mb-5">
      {/* for single card  */}

      {/* card One  */}
      <div className="border rounded mb-2 ">
        <div>
          <img className="w-100" src="cart-img-1.png" alt="" />
          <div className="px-4">
            <p className="py-3 m-0"> ✍️ Article</p>
            <div className="d-flex justify-content-between align-items-baseline ">
              <p className="w-75 m-0 twenty-two-px">
                What if famous brands had regular fonts? Meet Regular Brands!
              </p>
              <Dropdown>
                <Dropdown.Toggle
                  variant="light"
                  id="dropdown-basic"
                ></Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Share</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <p className="py-3 nineteen-px m-0">
              I’ve worked in UX for the better part of a decade. From now on, I
              plan to rei…
            </p>
            <div className="d-flex align-items-center justify-content-between py-2">
              <div className="d-flex align-items-center justify-content-center gap-3">
                <img
                  className="rounded-circle"
                  src="profile-pic 1.png"
                  alt=""
                />
                <p className="m-0">Sarthak Kamra</p>
              </div>
              <div className="d-flex align-items-center justify-content-center gap-3 ">
                <h6 className="m-0 d-block">
                  {" "}
                  <span>
                    <img src="visibility.png" alt="" />
                  </span>
                  14.5K view{" "}
                </h6>

                <img className="m-0 d-block" src="share-icon.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* card 2  */}
      <div className="border rounded mb-2 ">
        <div>
          <img className="w-100" src="cart-img-3.png" alt="" />
          <div className="p-4">
            <p className="m-0 py-3">🔬️ Education</p>
            <div className="d-flex justify-content-between align-items-baseline">
              <h5 className="w-75 m-0 twenty-two-px">
                Tax Benefits for Investment under National Pension Scheme
                launched by Government
              </h5>
              <Dropdown>
                <Dropdown.Toggle
                  variant="light"
                  id="dropdown-basic"
                ></Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Share</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <p className="py-3 nineteen-px m-0 ">
              I’ve worked in UX for the better part of a decade. From now on, I
              plan to rei…
            </p>
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center justify-content-center gap-3">
                <img
                  className="rounded-circle"
                  src="profile-pic 2.png"
                  alt=""
                />
                <p className="m-0">Sarah West</p>
              </div>
              <div className="d-flex align-items-center justify-content-center gap-3 ">
                <h6 className="m-0 d-block">
                  {" "}
                  <span>
                    <img src="visibility.png" alt="" />
                  </span>
                  14.5K view{" "}
                </h6>

                <img className="m-0 d-block" src="share-icon.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* card three  */}
      <div className="border rounded mb-2 ">
        <img className="w-100" src="cart-img-2.png" alt="" />
        <div className="px-4">
          <p className=" m-0 py-3">🗓️ Meetup </p>
          <div className="d-flex justify-content-between align-items-baseline">
            <h5 className="w-75 m-0 twenty-two-px">
              Finance & Investment Elite Social Mixer @Lujiazui
            </h5>
            <Dropdown>
                <Dropdown.Toggle
                  variant="light"
                  id="dropdown-basic"
                ></Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Share</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
          </div>
          <div className="w-75 my-2 d-flex align-items-center justify-content-between fw-bold fs-6">
            <p className="fifteen-px">
              {" "}
              <img src="date-icon.png " alt="" /> Fri, 12 Oct, 2018
            </p>
            <p className="fifteen-px">
              {" "}
              <img src="location-icon.png" alt="" /> Ahmedabad, India
            </p>
          </div>
          <button className=" btn btn-outline-dark text-danger fw-bold w-100 fs-6 my-3 bg-opacity-10">
            Visit Website
          </button>

          <div className="d-flex align-items-center justify-content-between py-3 ">
            <div className="d-flex align-items-center justify-content-center gap-3">
              <img className="rounded-circle" src="profile-pic 3.png" alt="" />
              <p className="m-0">Ronal Jones</p>
            </div>
            <div className="d-flex align-items-center justify-content-center gap-3 ">
              <h6 className="m-0 d-block">
                {" "}
                <span>
                  <img src="visibility.png" alt="" />
                </span>
                14.5K view{" "}
              </h6>

              <img className="m-0 d-block" src="share-icon.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* card four  */}
      <div className="border rounded mb-2 ">
        <div className="px-4">
          <p className=" m-0 py-3">💼️ Job</p>
          <div className="d-flex justify-content-between align-items-baseline">
            <h5 className="w-75 m-0 twenty-two-px">Software Developer</h5>
            <Dropdown>
                <Dropdown.Toggle
                  variant="light"
                  id="dropdown-basic"
                ></Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Share</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
          </div>
          <div className="w-75 my-2 d-flex align-items-center justify-content-between fw-bold fs-6">
            <p>
              {" "}
              <img src="date-icon.png" alt="" /> Innovaccer Analytics Private
              Ltd.
            </p>
            <p>
              {" "}
              <img src="location-icon.png" alt="" /> Ahmedabad, India
            </p>
          </div>
          <button className=" btn btn-outline-dark text-info fw-bold w-100 fs-6 my-3 bg-opacity-10">
            Apply on Times jobs
          </button>
          <div className="d-flex align-items-center justify-content-between py-3">
            <div className="d-flex align-items-center justify-content-center gap-3">
              <img className="rounded-circle" src="profile-pic 4.png" alt="" />
              <p className="m-0">Joseph Gray</p>
            </div>
            <div className="d-flex align-items-center justify-content-center gap-3 ">
              <h6 className="m-0 d-block">
                {" "}
                <span>
                  <img src="visibility.png" alt="" />
                </span>
                14.5K view{" "}
              </h6>

              <img className="m-0 d-block" src="share-icon.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
