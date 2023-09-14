import { Box, Container, Grid, Link, Select } from "@chakra-ui/react";
import {
  facebookNoBg,
  gameLoftLogo,
  linkedinIcon,
  twitterBlue,
  web,
  ytbIcon,
} from "assets";
import SubHeading from "components/Text/SubHeading";
import Text from "components/Text/Text";
import { FC } from "react";
import { mainColor } from "theme/theme";

const Footer: FC = () => {
  const arrFooter1 = [
    "Gameloft Games",
    "Gameloft Careers",
    "Gameloft News",
    "Gameloft Forum",
    "Gameloft Corporate",
    "Gameloft Advertising",
    "Gameloft Support",
  ];

  const arrFooter2 = [
    "Terms of Use",
    "Privacy Policy",
    "Cookies Policy",
    "EULA",
    "Legal Notices",
    "Event Rules",
    "Business Contacts",
  ];

  return (
    <Box bg={mainColor.primary} py={24} color={mainColor.white}>
      <Container maxW="container.lg">
        <Grid templateColumns="75% 25%">
          <Box position="relative">
            <Box ml={-7} mb={10} mt={-7}>
              <img src={gameLoftLogo} />
            </Box>
            <Box display="flex" flexDirection="column" gap={8}>
              <SubHeading
                content="Follow Us"
                fontWeight={700}
                color={mainColor.white}
              />
              <Box display="flex" alignItems="center" gap={4}>
                <Box
                  h={12}
                  display="flex"
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                >
                  <img src={facebookNoBg} />
                </Box>
                <Box
                  bg={mainColor.white}
                  p={2}
                  h={12}
                  onClick={() =>
                    window.open(
                      "https://www.linked.com",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                >
                  <img src={linkedinIcon} />
                </Box>

                <Box
                  bg={mainColor.white}
                  p={2}
                  h={12}
                  onClick={() =>
                    window.open(
                      "https://www.twitter.com",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                >
                  <img src={twitterBlue} />
                </Box>

                <Box
                  bg={mainColor.white}
                  p={2}
                  h={12}
                  onClick={() =>
                    window.open(
                      "https://www.youtube.com",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                >
                  <img src={ytbIcon} />
                </Box>
              </Box>

              <Box display="flex" justifyContent="start">
                <Box>
                  <Select
                    bg={mainColor.white}
                    color={mainColor.primary}
                    size="lg"
                  >
                    <option defaultChecked value="English">
                      <img src={web} /> English
                    </option>
                  </Select>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box>
            <Box mb={6}>
              <SubHeading
                fontWeight={700}
                content="visit"
                textTransform="uppercase"
                color={mainColor.white}
                mb={6}
              />
              {arrFooter1.map((ele) => (
                <Link
                  href="/"
                  fontSize="1.2rem"
                  color={mainColor.white}
                  lineHeight="tall"
                  fontWeight={400}
                >
                  <Box>{ele}</Box>
                </Link>
              ))}
            </Box>
            <Box>
              <SubHeading
                fontWeight={700}
                content="legal"
                textTransform="uppercase"
                color={mainColor.white}
                mb={6}
              />
              {arrFooter2.map((ele) => (
                <Link
                  href="/"
                  fontSize="1.2rem"
                  color={mainColor.white}
                  lineHeight="tall"
                  fontWeight={400}
                >
                  <Box>{ele}</Box>
                </Link>
              ))}
            </Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
