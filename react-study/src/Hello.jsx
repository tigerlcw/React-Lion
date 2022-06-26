import React from "react";
import "./Hello.css";
// styled-components import 
import styled from "styled-components";

function Hello() {
   // styled-components 사용
   const StyledButton = styled.button`
    color:red;
    background-color:blue;
    `;

  return( 
    // 외부파일 css
  <>
  <div className="red">Hello World</div>
  <div class="red">Hello World</div>
  <div className="red">Hello World</div>
  <StyledButton>버튼예제</StyledButton>
  </>
  )
}

export default Hello;