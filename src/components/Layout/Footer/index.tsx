import { Box, Container, Grid, Select } from "@chakra-ui/react";
import {
  facebookNoBg,
  gameLoftLogo,
  linkedinIcon,
  twitterBlue,
  ytbIcon,
} from "assets";
import SubHeading from "components/Text/SubHeading";
import { FC } from "react";
import { mainColor } from "theme/theme";

const Footer: FC = () => {
  return (
    <Box bg={mainColor.primary} py={24}>
      <Container maxW="container.lg">
        <Grid templateColumns="80% 20%">
          <Box position="relative">
            <Box ml={-7} mb={10}>
              <img src={gameLoftLogo} />
            </Box>
            <Box display="flex" flexDirection="column" gap={4}>
              <SubHeading
                content="Follow Us"
                color={mainColor.white}
                fontWeight={700}
              />
              <Box display="flex" alignItems="center" gap={4}>
                <Box h={12} display="flex">
                  <img src={facebookNoBg} />
                </Box>
                <Box bg={mainColor.white} p={2} h={12}>
                  <img src={linkedinIcon} />
                </Box>

                <Box bg={mainColor.white} p={2} h={12}>
                  <img src={twitterBlue} />
                </Box>

                <Box bg={mainColor.white} p={2} h={12}>
                  <img src={ytbIcon} />
                </Box>
              </Box>

              <Box>
                <Select></Select>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
