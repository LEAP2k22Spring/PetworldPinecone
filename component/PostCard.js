/* eslint-disable react/jsx-key */
import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import AvatarGroup from "@mui/material/AvatarGroup";
import PetsIcon from "@mui/icons-material/Pets";
import Link from "@mui/material/Link";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useFirebase } from "../firebase/useFirebase";
import LoadingSpinner from "./Spinner";
import styles from "../styles/Home.module.css";
import Stack from "@mui/material/Stack";
import { FemaleOutlined, MaleOutlined } from "@mui/icons-material";
import { useRouter } from "next/router";

export default function RecipeReviewCard() {
  const { getMultipleData } = useFirebase("Pets");
  const { data: petData, loading } = useFirebase("Pets");
  const { data: userData } = useFirebase("Users");
  const router = useRouter();

  // const [filteredList, setFilteredList] = useState()

  // const onFilterChange = (event) => {
  //   const selectedPet = Number(event.target.value)

  //   const filterList = petData.filter((pet) => {
  //     return Number(pet.category) > selectedPet
  //   })

  //   setFilteredList(filterList)
  // }

  const petHandleClick = (id) => {
    router.push(`/profile/${id}`);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  let ownerData = [];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box className={styles.home_main_wrapp}>
      <Box className={styles.category_wrapp}>
        <Box className={styles.categories}>
          <Typography fontSize={22} fontWeight={500}>
            Categories
          </Typography>
          <Box className={styles.categories_buttons}>
            <button>
              <p>Dog</p>
            </button>
            <button>
              <p>Cat</p>
            </button>
            <button>
              <p>Bird</p>
            </button>
            <button>
              <p>Fish</p>
            </button>
            <button>
              <p>Humster</p>
            </button>
            <button>
              <p>Raccoon</p>
            </button>
            <button>
              <p>Turtle</p>
            </button>
            <button>
              <p>Shimpanzee</p>
            </button>
            <button>
              <p>Panda</p>
            </button>
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        sx={{ flexGrow: 1, marginBottom: "120px" }}
      >
        <LoadingSpinner open={loading} color="#000" />

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "38px",
            maxWidth: "1425px",
            width: "80%",
          }}
        >
          {petData &&
            petData?.map((pet, i) => (
              <Box className={styles.home_card_wrapp} key={i} id={i}>
                <Card
                  className={styles.home_card}
                  sx={{ width: "350px", borderRadius: "20px" }}
                >
                  <Link onClick={() => petHandleClick(pet.id)}>
                    <CardMedia
                      className={styles.home_img_wrapp}
                      component="img"
                      height="200"
                      src={`${pet.image}?w=248&fit=crop&auto=format`}
                      alt="Pets image"
                    ></CardMedia>
                  </Link>
                  <CardHeader
                    className=""
                    action={
                      <IconButton
                        aria-label="settings"
                        aria-describedby={id}
                        onClick={handleClick}
                      >
                        {pet?.sex === "female" ? (
                          <FemaleOutlined
                            sx={{
                              width: "30px",
                              height: "30px",
                              fontSize: "3rem",
                              background: "pink",
                              color: "white",
                              borderRadius: "50%",
                              padding: "5px",
                            }}
                          />
                        ) : (
                          <MaleOutlined
                            sx={{
                              width: "30px",
                              height: "30px",
                              fontSize: "3rem",
                              background: "#0057c2",
                              color: "white",
                              borderRadius: "50%",
                              padding: "5px",
                            }}
                          />
                        )}
                      </IconButton>
                    }
                    title={pet.petName}
                    subheader={pet.breed}
                  />

                  <CardActions sx={{ justifyContent: "space-between" }}>
                    <ColorLensIcon sx={{ color: "gray", ml: 1 }} />
                    <Typography
                      sx={{
                        fontWeight: "400",
                        fontSize: "13px",
                        ml: -2,
                        color: "gray",
                      }}
                    >
                      {pet.color}
                    </Typography>

                    <AvatarGroup
                      max={6}
                      sx={{
                        "& .MuiAvatar-root": {
                          width: 20,
                          height: 20,
                          fontSize: 12,
                          background: "orange",
                        },
                        paddingRight: "60px",
                      }}
                    >
                      <Avatar
                        alt="Remy Sharp"
                        src="https://i.pinimg.com/564x/76/ce/7f/76ce7fe848cc16930d2d3570e24850e9.jpg"
                      />
                      <Avatar
                        alt="Travis Howard"
                        src="https://i.pinimg.com/564x/0f/f6/f8/0ff6f8f3a2361ae4e48e0ac6aa9bc939.jpg"
                      />
                      <Avatar
                        alt="Cindy Baker"
                        src="https://i.pinimg.com/564x/0e/a6/5c/0ea65c90ce035d5df688780e551e736a.jpg"
                      />
                      <Avatar
                        alt="Agnes Walker"
                        src="https://i.pinimg.com/564x/c0/8e/50/c08e50721c255c74d25964e740046ba8.jpg"
                      />
                      <Avatar
                        alt="Trevor Henderson"
                        src="https://i.pinimg.com/564x/ba/12/13/ba1213ba9e3be028a6e03f78cfa05e11.jpg"
                      />
                      <Avatar
                        alt="Trevor Henderson"
                        src="https://i.pinimg.com/564x/ba/12/13/ba1213ba9e3be028a6e03f78cfa05e11.jpg"
                      />
                      <Avatar
                        alt="Trevor Henderson"
                        src="https://i.pinimg.com/564x/ba/12/13/ba1213ba9e3be028a6e03f78cfa05e11.jpg"
                      />
                      <Avatar
                        alt="Trevor Henderson"
                        src="https://i.pinimg.com/564x/ba/12/13/ba1213ba9e3be028a6e03f78cfa05e11.jpg"
                      />
                    </AvatarGroup>
                    <IconButton
                      aria-label="add to favorites"
                      sx={{
                        margin: "0 5px 5px 0",
                        fontSize: "16px",
                        borderRadius: "15px",
                        bgcolor: "rgb(255, 217, 0)",
                        color: "white",
                        "&:hover": {
                          backgroundColor: "orange",
                        },
                      }}
                    >
                      <PetsIcon sx={{ color: "white" }} />
                    </IconButton>
                  </CardActions>
                </Card>
              </Box>
            ))}
        </Box>
      </Box>
    </Box>
  );
}
