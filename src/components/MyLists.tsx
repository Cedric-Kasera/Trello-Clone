import React from "react";
import { Lists } from "../Constants/Types";

function MyLists(content: Lists) {
  const first = content[0];


  return (
      <div className="flex-1 flex-wrap justify-start text-gray-800">
        <div className="bg-white text-black flex-1 max-w-[300px]">
            <div className="flex flex-row justify-between">
                <p>{first.Title}</p>
                <div></div>
            </div>
        </div>
      </div>
  );
}

export default MyLists;
