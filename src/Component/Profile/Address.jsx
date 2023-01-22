import React from "react";

function Address(props) {
  const { informations } = props;
  return (
    <div>
      <div className="container-information">
        {informations.map((information) => {
          return (
            <div>
              <h3>{information.address}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Address;
