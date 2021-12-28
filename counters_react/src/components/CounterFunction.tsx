import React, { useState } from "react";

function CounterFunction() {
   const [count, setCount] = useState(0);

   const handleClick = () => {
       setCount(count + 1);
       //setCount(currentCount => currentCount + 1);
   };

   return (
       <div>
           <p>You clicked {count} times</p>
           <button onClick={handleClick}>Click Me</button>
       </div>
   );
}

export default CounterFunction;