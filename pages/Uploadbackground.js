import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import { CardMedia, Input } from "@mui/material";

function Uploadprofile() {
  const [ImageUrl, setImageUrl] = useState("");

  function HandleImage(e) {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function (event) {
      setImageUrl(event.target.result);
    };
    reader.readAsDataURL(file);
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "100px",
        flexDirection: "column",
      }}
    >
      <Stack alignItems="center" spacing={2}>
        <CardMedia
          sx={{ borderRadius: "100%", width: `200px`, height: `200px` }}
          src={ImageUrl}
          component="img"
        ></CardMedia>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <PhotoCamera />
          <Input
            sx={{ display: "none" }}
            type="file"
            onChange={(e) => HandleImage(e)}
          />
        </IconButton>
        <Button variant="contained">Upload</Button>

        {/* https://github.com/bilg08/foodAsite/blob/main/src/components/addNewFood.jsx */}
      </Stack>
    </Box>
  );
}

export default Uploadprofile;
