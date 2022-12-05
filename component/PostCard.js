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
import Image from "next/image";

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
              <Image 
                  width={20}
                  height={20}
                  alt="categories icon"
                  src="https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/icons%2Fcategories%20icon%2Fhappy.png?alt=media&token=fe32ca51-ac62-4dbb-84c7-d9b3b4f608b7"
              />
              <p>Dog</p>
            </button>
            <button>
              <Image 
                  width={20}
                  height={20}
                  alt="categories icon"
                  src="https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/icons%2Fcategories%20icon%2Flaughing.png?alt=media&token=396c580c-e8eb-4a43-a0ad-ca1d7b5f12c4"
              />
              <p>Cat</p>
            </button>
            <button>
              <Image 
                  width={20}
                  height={20}
                  alt="categories icon"
                  src="https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/icons%2Fcategories%20icon%2Fbird.png?alt=media&token=9cce959d-2dca-41bc-ab7a-77be5e01e305"
              />
              <p>Bird</p>
            </button>
            <button>
              <Image 
                  width={20}
                  height={20}
                  alt="categories icon"
                  src="https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/icons%2Fcategories%20icon%2Ffish.png?alt=media&token=bebd65d5-2cb3-45b4-a311-c864f23e4929"
              />
              <p>Fish</p>
            </button>
            <button>
              <Image 
                  width={20}
                  height={20}
                  alt="categories icon"
                  src="https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/icons%2Fcategories%20icon%2Fhamster.png?alt=media&token=8327ce39-2520-4282-a47b-681d966f4112"
              />
              <p>Humster</p>
            </button>
            <button>
              <Image 
                  width={20}
                  height={20}
                  alt="categories icon"
                  src="https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/icons%2Fcategories%20icon%2Fraccoon1.png?alt=media&token=3389cbb7-a71c-4c23-b49d-33137fba86df"
              />
              <p>Raccoon</p>
            </button>
            <button>
              <Image 
                  width={20}
                  height={20}
                  alt="categories icon"
                  src="https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/icons%2Fcategories%20icon%2Ftortoise.png?alt=media&token=44bfbfd8-1cc4-4585-93a1-ac24dd041558"
              />
              <p>Turtle</p>
            </button>
            <button>
              <Image 
                  width={20}
                  height={20}
                  alt="categories icon"
                  src="https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/icons%2Fcategories%20icon%2Fmonkey1.png?alt=media&token=5ff2a2e9-0e19-4a3f-a515-9b7accfaaea0"
              />
              <p>Shimpanzee</p>
            </button>
            <button>
              <Image 
                  width={20}
                  height={20}
                  alt="categories icon"
                  src="https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/icons%2Fcategories%20icon%2Fpanda1.png?alt=media&token=ea0a6c55-a738-4004-9764-5bbe79e32714"
              />
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
