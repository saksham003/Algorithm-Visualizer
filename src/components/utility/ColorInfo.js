import React from 'react'

const ColorInfo = ({color, description}) => {
    return (
        <div className="flex flex-row items-center mr-20 ">
           <div className={`w-4 h-4 ${color} inline-block mr-3`}></div> 
           {description}
        </div>
    )
}

export default ColorInfo
