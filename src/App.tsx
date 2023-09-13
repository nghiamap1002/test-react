import { Box } from "@chakra-ui/react";
import Banner from "components/Banner";
import Header from "components/Layout/Header";
import Register from "components/Register";
import "./App.css";
import Community from "components/Community";

function App() {
  return (
    <Box position="relative">
      <Header />
      <Banner />
      <Register />
      <Community />
    </Box>
  );
}

export default App;
