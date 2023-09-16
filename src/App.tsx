import { Box } from "@chakra-ui/react";
import Footer from "components/Layout/Footer";
import Header from "components/Layout/Header";
import Banner from "components/Section/Banner";
import Community from "components/Section/Conmunity";
import ExclusiveContent from "components/Section/ExclusiveContent";
import Register from "components/Section/Register";
import SpecialEvent from "components/Section/SpecialEvent";
import "./App.css";
import Animation from "components/Animation";

function App() {
  return (
    <Box position="relative">
      <Header />
      <Banner />
      <Animation>
        <Register />
      </Animation>
      <Animation>
        <Community />
      </Animation>
      <Animation>
        <SpecialEvent />
      </Animation>

      <Animation>
        <ExclusiveContent />
      </Animation>

      <Animation>
        <Footer />
      </Animation>
    </Box>
  );
}

export default App;
