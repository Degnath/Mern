import React from 'react';
import { useParams } from 'react-router';


const Number = () => {
    
    const {id, color, color1} = useParams();
    console.log("Id is",id);
    // console.log("Word is:", word);
    console.log("The color is", color)

    return (
        <div>
            {isNaN(id) ?
            <h3 style= {{backgroundColor: color1, color: color}}>Word is: {id}</h3>:
            <h3>The number is: {id}</h3>}
        </div>
    );
}




export default Number;