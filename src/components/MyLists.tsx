import React from "react";
import { Lists } from "../Constants/Types";

function MyLists(content: Lists) {
  const first = content[0];


  return (
      <div className="flex-1 flex-wrap justify-start text-gray-800">
        <div className="bg-white text-black flex-1 max-w-[300px]">
            <div className="flex flex-row justify-between items-center text-center font-semibold p-2">
                <p className="text-lg underline tracking-wide capitalize">{first.Title}</p>
                <div className="text-gray-500 font-bold tracking-wide text-xl bg-slate-300 pb-3 px-3 rounded-md">...</div>
            </div>

            <div>
              <p></p>
              <div></div>
            </div>
        </div>
      </div>
  );
}

export default MyLists;
