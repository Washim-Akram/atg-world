/* eslint-disable react/prop-types */
import { useState } from "react";

const Recommend = ({groups}) => {

    const [followedGroups, setFollowedGroups] = useState([]);

    const handleFlow = (groupId) => {
      const isAlreadyFollowed = followedGroups.includes(groupId);
      if (isAlreadyFollowed) {
        setFollowedGroups((prevFollowedGroups) =>
          prevFollowedGroups.filter((group) => group !== groupId)
        );
      } else {
        setFollowedGroups((prevFollowedGroups) => [
          ...prevFollowedGroups,
          groupId,
        ]);
      }
    };

    return (
        <div>
          <div className="d-flex align-items-center gap-2 m-3 ">
            <img src="thumb_up.png" alt="" />
            <span className="fourteen-px fw-medium">Recommended Groups</span>
          </div>

          {/* for single groupe */}
          <div>
            {groups.map((group) => (
              <div
                key={group.groupId}
                className="d-flex justify-content-between fourteen-px  align-items-center my-3"
              >
                <div className="d-flex justify-content-between  align-items-center">
                  <img src={group.groupImg} alt="" />
                  <p className="ps-2 m-0 fourteen-px">{group?.groupName}</p>
                </div>
                <button
                  onClick={() => handleFlow(group.groupId)}
                  className={`border-0  bg-black text-light  rounded-pill px-3 py-1 ${
                    followedGroups.includes(group.groupId)
                      ? "followed  "
                      : "text-black bg-black bg-opacity-10"
                  }`}
                >
                  {followedGroups.includes(group.groupId)
                    ? "Followed"
                    : "Follow"}
                </button>
              </div>
            ))}
          </div>
          <div className="d-flex flex-row-reverse ">
          <a href="#" className="text-decoration-none twelve-px ">Show More...</a>
          </div>
        </div>
    );
};

export default Recommend;