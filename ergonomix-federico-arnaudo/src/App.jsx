import React from "react";
import Container from "./components/Containers/Container";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./temaConfig";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container></Container>
    </ThemeProvider>
  );
};

export default App;
