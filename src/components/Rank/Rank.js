import React from "react";
import "./Rank.css";

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className="fontzone white f3">
      {`${name}, your current entry count is...`}
      </div>
      <div className="fontzone white f1">
        {entries}
      </div>
    </div>
  );
};

export default Rank;
