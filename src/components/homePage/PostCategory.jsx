import { Dropdown, Nav } from "react-bootstrap";
import { UserContext } from "../../context/Context";
import { useContext } from "react";


const PostCategory = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <div className="d-flex align-items-center  justify-content-between d-md-none fw-bold fs-3">
        <p>Post (120)</p>
        <Dropdown>
          <Dropdown.Toggle
            variant="light"
            id="dropdown-basic"
          >Filter:All</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">All</Dropdown.Item>
            <Dropdown.Item href="#/action-1">Article</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Event</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className=" d-md-flex w-100 justify-content-between p-0 mb-3 d-none  ">
        <div className="">
          <Nav className="m-0  " variant="tabs" defaultActiveKey="#">
            <Nav.Item>
              <Nav.Link href="#">All Post(21)</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="1">Article</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="2"> Event</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="3"> Job</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="4"> Education</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <div className="d-flex align-items-center justify-content-center gap-2">
          <button className="btn bg-black fw-medium rounded-2 bg-opacity-10">
            Write a Post <img src="arrow_drop_down.png" alt="" />
          </button>
          <button
            className={`btn bg-primary fw-medium rounded-2 border ${
              user ? "bg-dark bg-opacity-25" : ""
            }`}
          >
            <img className="me-2" src={user ? '/public/exit.png' : '/public/group_add.png'} alt="" />
            {user ? "Leave Group" : "Join Group"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCategory;
