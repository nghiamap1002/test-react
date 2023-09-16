import {
  Box,
  Container,
  Divider,
  Grid,
  Image,
  Link,
  Select,
} from "@chakra-ui/react";
import {
  facebookBgBlue,
  facebookNoBg,
  gameLoftLogo,
  linkedinBgBlue,
  linkedinIcon,
  twitterBgBlue,
  twitterIcon,
  web,
  ytbBgBlue,
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

  const listLink = (arr: any, title: any) => {
    return (
      <Box mb={6}>
        <SubHeading
          fontWeight={700}
          content={title}
          textTransform="uppercase"
          display={{ sm: "none", lg: "block" }}
          color={mainColor.white}
          mb={6}
        />
        {arr.map((ele: any, index: number) => (
          <Link
            key={`${ele}-${index}`}
            href="/"
            fontSize={{ sm: "12px", lg: "20px" }}
            color={mainColor.white}
            lineHeight={{ lg: "tall", sm: "8" }}
            fontWeight={{ lg: 400, sm: 600 }}
          >
            <Box>{ele}</Box>
          </Link>
        ))}
      </Box>
    );
  };

  const SocialLink = ({ href, image }: any) => {
    return (
      <Link h={12} href={href} target="_blank" display="flex">
        {image}
      </Link>
    );
  };

  return (
    <>
      <Box
        py={4}
        bg={mainColor.third}
        display={{ sm: "flex", lg: "none" }}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={2}
      >
        <Text fontSize="15px" content="Follow Us" fontWeight={700} />
        <Box display="flex" gap={2}>
          <SocialLink
            href="https://www.linked.com"
            image={<Image src={facebookBgBlue} w={10} />}
          />
          <SocialLink
            href="https://www.linked.com"
            image={<Image src={linkedinBgBlue} w={10} />}
          />
          <SocialLink
            href="https://www.linked.com"
            image={<Image src={twitterBgBlue} w={10} />}
          />
          <SocialLink
            href="https://www.linked.com"
            image={<Image src={ytbBgBlue} w={10} />}
          />
        </Box>
      </Box>

      <Box
        bg={mainColor.primary}
        py={{ lg: 24, sm: 10 }}
        color={mainColor.white}
      >
        <Container maxW="container.lg">
          <Box
            display={{ lg: "none", sm: "flex" }}
            ml={-7}
            mt={-7}
            justifyContent="center"
            alignItems="center"
          >
            <Image src={gameLoftLogo} w={60} />
          </Box>
          <Grid templateColumns={{ lg: "75% 25%" }}>
            <Box position="relative" display={{ sm: "none", lg: "block" }}>
              <Box ml={-7} mb={10} mt={-7}>
                <Image src={gameLoftLogo} />
              </Box>
              <Box display="flex" flexDirection="column" gap={8}>
                <SubHeading
                  content="Follow Us"
                  fontWeight={700}
                  color={mainColor.white}
                />
                <Box display="flex" alignItems="center" gap={4}>
                  <SocialLink
                    href="https://www.facebook.com"
                    image={<Image src={facebookNoBg} />}
                  />

                  <SocialLink
                    href="https://www.linked.com"
                    image={<Image src={linkedinIcon} />}
                  />

                  <SocialLink
                    href="https://www.twitter.com"
                    image={<Image src={twitterIcon} />}
                  />

                  <SocialLink
                    href="https://www.youtube.com"
                    image={<Image src={ytbIcon} />}
                  />
                </Box>

                <Box display="flex" justifyContent="start">
                  <Box>
                    <Select
                      bg={mainColor.white}
                      color={mainColor.primary}
                      size="lg"
                    >
                      <option defaultChecked value="English">
                        English
                      </option>
                      <option value="Vietnamese">Vietnamese</option>
                    </Select>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box
              display={{ sm: "grid", lg: "block" }}
              gridTemplateColumns={{ sm: "50% auto" }}
              gap={8}
              w="100%"
            >
              {listLink(arrFooter1, "visit")}
              {listLink(arrFooter2, "legal")}
            </Box>
          </Grid>
        </Container>
      </Box>
      <Box bg={mainColor.primary} pb={4}>
        <Divider
          h={0.5}
          w="100%"
          bg={mainColor.white}
          display={{ sm: "none", lg: "block" }}
        />
        <Container maxW="container.lg">
          <Text
            my={{ lg: 6 }}
            fontSize={{ lg: "15px", sm: "10px" }}
            textAlign="center"
            fontWeight={400}
            color={mainColor.white}
            content="©2020 Gameloft. All rights reserved. Gameloft and the Gameloft logo
          are trademarks of Gameloft in the U.S. and/or other countries. All
          other trademarks are the property of their respective owners."
          />
        </Container>
      </Box>
    </>
  );
};

export default Footer;
