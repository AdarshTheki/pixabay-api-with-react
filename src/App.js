import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import Search from "./Components/Search";
import { Container } from "@mui/material";

class App extends Component {
  render() {
    return (
      <Container>
        <NavBar />
        <br />
        <Search/>
      </Container>
    );
  }
}
export default App;
