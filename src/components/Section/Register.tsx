import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  Grid,
  Input,
  Select,
} from "@chakra-ui/react";
import { minion } from "assets";
import { FC } from "react";
import { mainColor } from "theme/theme";

const Register: FC<any> = ({}) => {
  return (
    <Box
      bg={mainColor.fourth}
      color={mainColor.primary}
      h="100vh"
      fontSize="10px"
      display="flex"
      alignItems="center"
      lineHeight="normal"
    >
      <Container
        maxW="container.lg"
        alignItems="center"
        justifyContent="center"
      >
        <Grid templateColumns="60% 35%" gap={8}>
          <Box>
            <img src={minion} />
          </Box>

          <Box display="flex" flexDirection="column" gap={8} w="74%">
            <Box fontWeight={500}>
              <Box fontSize="1.5rem" fontWeight={700}>
                Stay in the Know!
              </Box>
              <Box fontSize="12px">
                <Box>Don't get left behind!</Box>
                <Box>Subscribe to our newsletters today!</Box>
              </Box>
            </Box>

            <Box display="flex" flexDirection="column" gap={2}>
              <Input placeholder="Name" size="sm" />
              <Input placeholder="Email" size="sm" />
              <Select placeholder="Country" size="sm">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
              <Select placeholder="Platform" size="sm">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </Box>

            <Box fontWeight={500} display="flex" flexDirection="column" gap={2}>
              <Box display="flex" gap={2} alignItems="start">
                <Checkbox size="sm" />

                <Box>
                  By signing up, I confirm that I am 13 years old or older. I
                  agree to the Gameloft Terms and Conditions and I have read the
                  Privacy Policy.
                </Box>
              </Box>

              <Box display="flex" gap={2} alignItems="start">
                <Box>
                  <Checkbox size="sm" />
                </Box>
                <Box>
                  I agree to receive promotional offers relating to all Gameloft
                  games and services.
                </Box>
              </Box>
              <Box textAlign="center">
                <Button size="sm" fontSize="10px" bg={mainColor.fourth} px={8}>
                  Button
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default Register;
