import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StContainer>
      <div>To do List APP</div>
      <div>Yudhit</div>
    </StContainer>
  );
};
export default Header;

const StContainer = styled.div`
  height: 60px;
  display: flex;
  color: white;
  height: 100px;
  font-weight: bold;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 24px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('https://images.unsplash.com/photo-1564430061921-72d0304555b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')
`;
