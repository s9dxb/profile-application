import React from "react";

function ProfilePhoto(props) {
  const { informations } = props;
  return (
    <div>
      <div className="container-information">
        {informations.map((information) => {
          return (
            <div>
              <img src={information.photo} width="200px" alt=" " />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default ProfilePhoto;
