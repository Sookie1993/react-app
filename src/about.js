import React, { Component } from 'react';
// import { useState } from 'react';

// const Counter=()=>{
//   const [count, setCount] = useState(0)
//   return (
//     <div>
//       <div>{count}</div>
//       <button onClick={()=>{setCount( count + 1)}}>+</button>
//       <button onClick={()=>{setCount( count - 1)}}>-</button>
//     </div>
//   )
// }
class about extends Component{
  render(){
    return <div>
      关于页面 字体默认12px
      {/* <Counter/> */}
    </div>
  }
}
export default about;
