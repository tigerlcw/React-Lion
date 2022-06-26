import React from "react";
import "./Hello.css";
function Hello() {
  const PracticeStyle ={
    marginTop: "20px", 
    backgroundColor: "red",
  }
  return( 
    // 외부파일 css
  <>
  <div className="red">Hello World</div>
  <div class="red">Hello World</div>
  <div className="red">Hello World</div>
  </>
  )
}

export default Hello;