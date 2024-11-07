import React, { useState } from 'react'
import { Lists } from '../Constants/Types';

function Hero() {
    const [list, setList] = useState<Lists> (
        [{
            Title: "Assignment",
            Items: [{
                Name: "BCS 212",
                Likes: 10,
                Comments: ["Excellent"]
            }] 
        }]
    )

    console.log(list);

    return (
        <div className="px-4 md:px-12 lg:px-20 flex flex-col md:flex-row">
        <div className="flex-1 flex-col bg-white text-gray-800">
        Hello Omar!!👌👌
        </div>

        </div>
    )
}

export default Hero
