import { Box } from "@chakra-ui/react";
import { downloadIcon, facebookIcon, mountain2, shareBlack } from "assets";
import CircleIcon from "components/CircleIcon";
import { FC, useRef } from "react";
import { mainColor } from "theme/theme";

const GameContent: FC = () => {
  const imageRef = useRef(null);
  const download = (e: any) => {
    fetch(e.current.src, {
      method: "GET",
      headers: {},
    })
      .then((response) => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "image.png"); //or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box
      bg={mainColor.third}
      bgPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Box display="flex" justifyContent="end" alignItems="center">
        <Box
          boxShadow="0px 1px 5px 0px rgba(0, 0, 0, 0.15)"
          borderRadius="50%"
          display="flex"
          position="absolute"
          top={10}
          right={10}
          onClick={() => download(imageRef)}
        >
          <img src={downloadIcon} />
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <img src={"./cute_meow.png"} ref={imageRef} />
      </Box>
    </Box>
  );
};

export default GameContent;
