import React, { useState } from 'react'

function Hookscounterdeux() {
    const initcount=0;
    const [count,setCount]=useState(initcount);
  return (
    <div>
        count:{count}
      <button onClick={()=>setCount(initcount)}>Reset</button>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  )
}

export default Hookscounterdeux
