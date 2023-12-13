import { useState } from "react";

const Connect = ({members}) => {


console.log(members)

    const [followedMembers, setFollowedMembers] = useState([]);

    const handleFollowMember = (memberId) => {
      const isAlreadyFollowed = followedMembers.includes(memberId);
      if (isAlreadyFollowed) {
        setFollowedMembers((prevFollowedMembers) =>
          prevFollowedMembers.filter((member) => member !== memberId)
        );
      } else {
        setFollowedMembers((prevFollowedMembers) => [
          ...prevFollowedMembers,
          memberId,
        ]);
      }
    };

    return (
        <div>
          <div className="d-flex align-items-center gap-2 m-3 ">
            <img src="thumb_up.png" alt="" />
            <span className="fourteen-px fw-medium">Connect</span>
          </div>

          {/* for single groupe */}
          <div>
            {members?.map((member) => (
              <div
                key={member?.memberId}
                className="d-flex justify-content-between fourteen-px  align-items-center my-3"
              >
                <div className="d-flex justify-content-between align-items-center">
                  <img src={member?.memberImg} alt="" />
                  <p className="ps-2 m-0 ten-px">{member?.memberName}</p>
                </div>
                <button
                  onClick={() => handleFollowMember(member?.memberId)}
                  className={`border-0 fs6 bg-black text-light  rounded-pill px-3 py-1 ${
                    followedMembers.includes(member?.memberId)
                      ? "followed  "
                      : "text-black bg-black bg-opacity-10"
                  }`}
                >
                  {followedMembers.includes(member?.memberId)
                    ? "Connected"
                    : "Connect"}
                </button>
              </div>
            ))}
          </div>
          <div className="d-flex flex-row-reverse">
          <a href="#" className="text-decoration-none twelve-px">Show More...</a>
          </div>
        </div>
    );
};

export default Connect;