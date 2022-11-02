import React from "react";
import styled from "styled-components";
import Router from "./shared/Router";

const App = () => {
  return (
    <Stcontainer>
      <Router>
      </Router>
    </Stcontainer>
  );
};

export default App;

const Stcontainer= styled.div`
  font-family: 'Roboto', sans-serif;`;
