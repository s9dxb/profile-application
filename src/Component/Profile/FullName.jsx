import React from "react";

function FullName(props) {
  const { informations } = props;
  return (
    <div>
      <div className="container-information">
        {informations.map((information) => {
          return (
            <div>
              <h1>{information.fullname}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default FullName;
