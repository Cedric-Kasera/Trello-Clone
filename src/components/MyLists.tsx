import React from "react";
import { Lists } from "../Constants/Types";

function MyLists(content: Lists) {
  const first = content[0];


  return (
    <div>
      <div className="flex-1 flex-wrap justify-start text-gray-800">
        <div className="bg-white text-black">{first.Title}</div>
      </div>
    </div>
  );
}

export default MyLists;
