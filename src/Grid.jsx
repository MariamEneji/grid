// eslint-disable-next-line no-unused-vars
import React from 'react';
import { range } from './utils';

// eslint-disable-next-line react/prop-types
const Grid = ({ numRows, numCols }) => {

    
  return (
    <div className="grid grid-flow-col ">



{range(numRows).map((rowIndex) => (

        <div className="row" key={rowIndex}>
          {range(numCols).map((colIndex) => (
            <div className="cell h-[100px] w-[100px]  border-2 m-4  border-gray-400 rounded-md" key={colIndex}></div>
          ))}
        </div>
      ))}



    </div>
  )
}

export default Grid