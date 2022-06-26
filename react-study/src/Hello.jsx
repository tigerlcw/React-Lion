import React from "react";

function Hello() {
  const PracticeStyle ={
    marginTop: "20px", 
    backgroundColor: "red",
  }
  return( 
    // inline style 2
  <>
  <div style={PracticeStyle}>Hello World</div>
  <div style={{marginTop:"20px", backgroundColor:"blue"}}>Hello World</div>
  <div style={{marginTop:"20px", backgroundColor:"blue"}}>Hello World</div>
  </>
  )
}

export default Hello;