import { useContext } from "react";
import { UserContext } from "../../context/Context";
import Connect from "./Connect";
import Recommend from "./Recommend";

const SideBar = () => {
  const { user } = useContext(UserContext);

  const groups = [
    {
      groupId: 1,
      groupName: "Leisure",
      groupImg: "group 1.png",
    },
    {
      groupId: 2,
      groupName: "Activism",
      groupImg: "group 2.png",
    },
    {
      groupId: 3,
      groupName: "MBA",
      groupImg: "group 3.png",
    },
    {
      groupId: 4,
      groupName: "Philosophy",
      groupImg: "group 4.png",
    },
  ];

  const members = [
    {
      memberId: 1,
      memberName: "Sarthak",
      memberImg: "profile-pic 1.png",
    },
    {
      memberId: 2,
      memberName: "Sarah West",
      memberImg: "profile-pic 2.png",
    },
    {
      memberId: 3,
      memberName: "Ronal Jones",
      memberImg: "profile-pic 3.png",
    },
    {
      memberId: 4,
      memberName: "Joseph Gray",
      memberImg: "profile-pic 4.png",
    },
  ];

  return (
    <div className=" d-none  d-lg-flex w-100 flex-row-reverse align-items-end">
      <div></div>
      <div className="d-grid col-10">
        <div>
          <div className="d-flex">
            <img src="location-icon.png" alt="" />
            <input
              className="border-0 fourteen-px w-100 "
              type="text"
              placeholder="Enter your location"
              disabled={!user}
            />
            <img src="clear-icon.png" alt="" />
          </div>
          <hr />
          <div className="d-flex align-items-baseline justify-content-between gap-2 mt-4 ">
            <img src="error_outline-24px.png" alt="" />
            <p className="eleven-px">
              Your location will help us serve better and extend a personalized
              experience.
            </p>
          </div>
        </div>

        {/* for recommend groups  */}
        {user && <Recommend groups={groups} />}
        {user && <Connect members={members} />}
      </div>
    </div>
  );
};

export default SideBar;
