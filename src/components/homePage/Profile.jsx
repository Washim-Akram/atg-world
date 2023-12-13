import { useContext } from "react";
import { UserContext } from "../../context/Context";
import { Dropdown } from "react-bootstrap";



const Profile = () => {
    const  {user,logOut} =useContext(UserContext)
console.log(user.displayName)
    return (
        <div className="d-flex align-items-center justify-content-center gap-2 ">
            <img className="rounded-pill" style={{height: "35px"}} src={user.photoURL} alt="" />
            <p className="text-black fw-medium m-0 ">{user?.displayName}</p>
            <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item className="text-center" onClick={logOut}>Log Out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </div>
    );
};

export default Profile;