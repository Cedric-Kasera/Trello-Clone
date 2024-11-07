import React, { useState } from "react";
import { Lists } from "../Constants/Types";

function Hero() {
  const [list, setList] = useState<Lists>([
    {
      Title: "Assignment",
      Items: [
        {
          Name: "BCS 212",
          Likes: 10,
          Comments: ["Excellent"],
        },
      ],
    },
  ]);

  console.log(list);

  return (
    <div className="px-4 md:px-12 lg:px-20 flex flex-col md:flex-row gap-2 md:gap-3 lg:gap-4">
      <div className="flex-1 flex-col bg-white text-gray-800">Omar!!👌👌</div>

      <div className="bg-blue-400 md:w-fit p-3 md:p-4 lg:p-6 max-h-[60vh]:">
        <p><span className="mx-4 font-bold">+</span> Add Another List</p>
      </div>
    </div>  
  );
}

export default Hero;
