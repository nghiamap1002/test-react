import { Box } from "@chakra-ui/react";
import Banner from "components/Section/Banner";
import Header from "components/Layout/Header";
import "./App.css";
import Community from "components/Section/Conmunity";
import Register from "components/Section/Register";
import SpecialEvent from "components/Section/SpecialEvent";
import ExclusiveContent from "components/Section/ExclusiveContent";
import Footer from "components/Layout/Footer";

function App() {
  return (
    <Box position="relative">
      <Header />
      <Banner />
      <Register />
      <Community />
      <SpecialEvent />
      <ExclusiveContent />
      <Footer />
    </Box>
  );
}

export default App;
