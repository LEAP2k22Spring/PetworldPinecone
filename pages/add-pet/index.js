import styled from "styled-components";
import { useState, useRef } from "react";
import { useRouter } from "next/router";
import classes from "../../styles/profile.module.css";
import {
  Avatar,
  Typography,
  Stack,
  Divider,
  Box,
  FormControl,
  MenuItem,
  InputLabel,
  OutlinedInput,
  Select,
  Input,
  TextField,
  InputAdornment,
} from "@mui/material";
import LoadingSpinner from "../../component/Spinner";
import {
  SettingsOutlined,
  CameraAltOutlined,
  ArrowBackIosNewOutlined,
} from "@mui/icons-material";
import { v4 as uuidv4 } from "uuid";
import {
  auth,
  imageUploadToFirestore,
  useDocument,
  useFirebase,
} from "../../firebase/useFirebase";
// import { useGetUsersDataContext } from '../../context/UsersDataContext';
import { serverTimestamp } from "firebase/firestore";

const names = [
  "Fish",
  "Giraffe",
  "Gorilla",
  "Alligator",
  "Turtle",
  "Rabbit",
  "Snake",
  "Humster",
  "Raccoon",
];
const AddPet = () => {
  const router = useRouter();
  const { createData: createPet } = useDocument({ path: "Pets" });
  const [isLoading, setIsLoading] = useState(false);
  const [imageData, setImageData] = useState({
    url: "",
    file: "",
    imageName: "",
  });
  const petNameRef = useRef(null);
  const breedRef = useRef(null);
  const birthRef = useRef(null);
  const colorRef = useRef(null);
  const descriptionRef = useRef(null);
  const [petInputData, setPetInputData] = useState({
    category: "",
    image: "",
    sex: "",
    petName: "",
    birthDate: "",
    breed: "",
    description: "",
    weight: "",
    height: "",
    color: "",
    microchipped: false,
    vaccinated: false,
    sprayed: false,
  });

  // destructuring some field of petInputData
  const {
    breed,
    petName,
    category,
    birthDate,
    description,
    microchipped,
    vaccinated,
    sprayed,
    sex,
    weight,
    height,
    color,
  } = petInputData;

  // 1) Pet inputs handler
  const handleChange = (event) => {
    const { name, value } = event.target;
    setPetInputData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // 2) Image picker handler
  const imgUploadHandler = (e) => {
    const file = e.target.files[0];
    const fileName = `${file.name}-${uuidv4()}`;
    const reader = new FileReader();
    reader.onload = (event) => {
      setImageData({
        ...imageData,
        url: event.target.result,
        imageName: fileName,
        file: file,
      });
    };
    reader.readAsDataURL(file);
  };

  // 4) YES/ NO toggler input handler (buttons)
  const onMutate = (e) => {
    let boolean = null;
    if (e.target.value === "true") {
      boolean = true;
    }
    if (e.target.value === "false") {
      boolean = false;
    }
    setPetInputData((prevState) => ({
      ...prevState,
      [e.target.id]: boolean,
    }));
  };

  // 5) SAVE ALL DATA - FINAL STEP
  const onSave = async () => {
    // Validation - 1;
    if (category === "") {
      alert("Please choose your pet category");
      return;
    }

    //Validation-2
    if (imageData.url === "") {
      alert("Please upload your image");
      return;
    }

    //Validation-3
    if (
      sex === "" ||
      petName === "" ||
      birthDate === "" ||
      breed === "" ||
      color === "" ||
      weight === "" ||
      height === "" ||
      description === ""
    ) {
      alert("Please fill all empty input fields");
      return;
    }

    // if everything is okay then upload image to the firebase/storage
    setIsLoading(true);

    const { uploaded, url } = await imageUploadToFirestore(imageData);

    if (uploaded) {
      await saveData(url);
    } else {
      alert("Could not upload image");
      return;
    }
  };

  // if image successfully uploaded then save all data to the firebase/firestore
  const saveData = async (url) => {
    createPet({
      ...petInputData,
      image: url,
      ownerID: auth?.currentUser?.uid,
      createdAt: serverTimestamp(),
    });

    if (createPet) {
      setIsLoading(false);
      clearAllInputs();
      alert("Pet data successfully created!");
    }
    router.push("/profile");
  };

  // if data saved, then clear all inputs, make everything default
  const clearAllInputs = () => {
    petNameRef.current.value = "";
    breedRef.current.value = "";
    birthRef.current.value = "";
    descriptionRef.current.value = "";
    colorRef.current.value = "";
    setPetInputData({
      category: "",
      image: "",
      sex: "",
      petName: "",
      birthDate: "",
      breed: "",
      description: "",
      weight: "",
      height: "",
      color: "",
      microchipped: false,
      vaccinated: false,
      sprayed: false,
    });

    setImageData({ url: "", file: "", imageName: "" });
  };

  const goBackHandler = () => {
    router.back();
  };
  return (
    <Box className={classes.petProfile_wrapp}>
      <Container className={classes.pet_container}>
        <LoadingSpinner open={isLoading} />
        <Header>
          <Box className={classes.top_icon_btn}>
            <ArrowBackIosNewOutlined
              onClick={goBackHandler}
              className={classes.icon_btn}
              fontSize="large"
            />
            <SettingsOutlined className={classes.icon_btn} fontSize="large" />
          </Box>
          <UserProfile>
            <Typography variant="body1" mt={5} mx={3}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
              eaque nemo reprehenderit sint inventore obcaecati et eum maxime
              consectetur illum?
            </Typography>{" "}
            {/* 1) ============================================= */}
            <StyledTitleTypography variant="body1" mt={5} mx={3}>
              Choose pet category
            </StyledTitleTypography>
            <Box
              display="flex"
              justifyContent="center"
              sx={{ "& button": { m: 1 } }}
            >
              <Stack
                className={classes.top_button}
                direction="row"
                justifyContent="center"
              >
                <button
                  variant="outlined"
                  size="large"
                  name="category"
                  value="dog"
                  className={
                    category === "dog" ? classes.buttonActive : classes.button
                  }
                  onClick={handleChange}
                >
                  Dog
                </button>
                <button
                  variant="outlined"
                  size="large"
                  value="cat"
                  name="category"
                  className={
                    category === "cat" ? classes.buttonActive : classes.button
                  }
                  onClick={handleChange}
                >
                  Cat
                </button>
                <FormControl sx={{ m: 1, width: 200 }}>
                  <InputLabel>Other</InputLabel>
                  <Select
                    value={category}
                    onChange={handleChange}
                    name="category"
                    sx={{
                      background:
                        (category === "dog") | (category === "cat")
                          ? ""
                          : "#e8f0e4",
                      color:
                        (category === "dog") | (category === "cat")
                          ? ""
                          : "#298c16",
                    }}
                    input={<OutlinedInput label="Name" />}
                  >
                    {names.map((name) => (
                      <MenuItem key={name} value={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Stack>
            </Box>{" "}
            {/* 2) ============================================= */}
            <StyledTitleTypography variant="body1" mt={5} mx={3}>
              Upload pet image
            </StyledTitleTypography>
            <UploadImageContainer>
              <div style={{ position: "relative", margin: " 10px" }}>
                <UserAvatar src={imageData.url} />
                <Label>
                  <Input
                    sx={{ display: "none" }}
                    type="file"
                    onChange={imgUploadHandler}
                  />
                  <CameraAltOutlined />
                </Label>
              </div>
            </UploadImageContainer>
            {/* 3) ============================================= */}
            <StyledTitleTypography variant="body1" mt={5} mx={3}>
              Enter pet details
            </StyledTitleTypography>
            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="center"
              sx={{ margin: "20 auto" }}
            >
              <FormControl sx={{ m: 2, width: 223 }}>
                <InputLabel>Sex</InputLabel>
                <Select
                  value={sex}
                  onChange={handleChange}
                  label="sex"
                  name="sex"
                  color="success"
                  sx={{
                    background:
                      (sex === "female") | (sex === "male") ? "#e8f0e4" : "",
                    color:
                      (sex === "female") | (sex === "male") ? "#298c16" : "",
                  }}
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                </Select>
              </FormControl>
              <TextField
                sx={{ width: "223px" }}
                error={false}
                name="petName"
                label="name*"
                color="success"
                focused
                // defaultValue='Hello World'
                inputRef={petNameRef}
                onBlur={handleChange}

                // helperText='Incorrect entry.'
              />
              <TextField
                sx={{ width: "223px" }}
                error={false}
                name="birthDate"
                label="date of birth*"
                margin="normal"
                color="success"
                // defaultValue='Hello World'
                // helperText='Incorrect entry.'
                inputRef={birthRef}
                onBlur={handleChange}
              />
              <TextField
                sx={{ width: "223px", m: 1 }}
                error={false}
                name="breed"
                label="breed*"
                color="success"
                // defaultValue='Hello World'
                // helperText='Incorrect entry.'
                inputRef={breedRef}
                onBlur={handleChange}
              />
              <TextField
                sx={{ width: "223px" }}
                error={false}
                name="color"
                label="color*"
                margin="normal"
                color="success"
                // defaultValue='Hello World'
                // helperText='Incorrect entry.'
                inputRef={colorRef}
                onBlur={handleChange}
              />
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <FormControl
                  className={classes.input_btn}
                  sx={{ m: 1, width: "15ch" }}
                  variant="outlined"
                >
                  <InputLabel color="success">Weight</InputLabel>
                  <OutlinedInput
                    name="weight"
                    color="success"
                    value={weight}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">kg</InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl sx={{ m: 1, width: "15ch" }} variant="outlined">
                  <InputLabel color="success">Height</InputLabel>
                  <OutlinedInput
                    name="height"
                    color="success"
                    value={height}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">cm</InputAdornment>
                    }
                  />
                </FormControl>
              </Stack>
            </Stack>
            {/* 4) ============================================= */}
            <StyledTitleTypography variant="body1" mt={5} mx={3}>
              Enter the description
            </StyledTitleTypography>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              mt={2}
            >
              <TextField
                name="description"
                multiline
                placeholder="... add some description"
                rows={3}
                color="success"
                variant="outlined"
                inputRef={descriptionRef}
                onBlur={handleChange}
                sx={{ m: 1, width: 280 }}
              />
            </Stack>
            <StyledTitleTypography variant="body1" mt={5} mx={3}>
              Care info:
            </StyledTitleTypography>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              mt={5}
              sx={{ width: "100%", margin: "0 auto" }}
            >
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="flex-end"
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <label className={classes.label}>Microchipped?</label>
                  <button
                    variant="outlined"
                    className={
                      microchipped ? classes.buttonActive : classes.button
                    }
                    id="microchipped"
                    onClick={onMutate}
                    value={true}
                  >
                    Yes
                  </button>
                  <button
                    variant="outlined"
                    className={
                      !microchipped && microchipped !== null
                        ? classes.buttonActive
                        : classes.button
                    }
                    id="microchipped"
                    value={false}
                    onClick={onMutate}
                  >
                    No
                  </button>
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <label className={classes.label}>Vaccinated?</label>
                  <button
                    variant="outlined"
                    className={
                      vaccinated ? classes.buttonActive : classes.button
                    }
                    id="vaccinated"
                    onClick={onMutate}
                    value={true}
                  >
                    Yes
                  </button>
                  <button
                    variant="outlined"
                    className={
                      !vaccinated && vaccinated !== null
                        ? classes.buttonActive
                        : classes.button
                    }
                    id="vaccinated"
                    value={false}
                    onClick={onMutate}
                  >
                    No
                  </button>
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <label className={classes.label}>Sprayed?</label>
                  <button
                    variant="outlined"
                    className={sprayed ? classes.buttonActive : classes.button}
                    id="sprayed"
                    onClick={onMutate}
                    value={true}
                  >
                    Yes
                  </button>
                  <button
                    variant="outlined"
                    className={
                      !sprayed && sprayed !== null
                        ? classes.buttonActive
                        : classes.button
                    }
                    id="sprayed"
                    value={false}
                    onClick={onMutate}
                  >
                    No
                  </button>
                </Stack>
              </Stack>
            </Stack>
            <button className={classes.saveButton} onClick={onSave}>
              NEXT
            </button>
          </UserProfile>
        </Header>

        <Divider
          sx={{
            borderBottomWidth: 20,
            borderColor: "#f0f0f0",
            borderRadius: "10px",
          }}
        />
      </Container>
    </Box>
  );
};

export default AddPet;

const Container = styled.div`
  background: white;
  position: relative;
  margin-bottom: 120px;
  margin-top: 10px;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;
const SettingsIconContainer = styled.div`
  padding: 20px;
`;
const BackIconContainer = styled.div`
  padding: 20px;
  position: absolute;
  left: 10px;
`;
const UploadImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

const StyledTitleTypography = styled(Typography)`
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
  background: orange;
  width: fit-content;
  padding: 0 20px;
  border-radius: 5px;
`;

const UserAvatar = styled(Avatar)`
  width: 100px;
  height: 100px;
`;

const Label = styled.label`
  position: absolute;
  top: 80px;
  left: 70px;
  width: 30px;
  height: 30px;
  border: 3px solid #fff;
  background-color: #f5f5f7;
  border-radius: 50%;
`;
const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
`;

const styledTextField = styled(TextField)`
  .MuiInputBase-root {
    background-color: ${({ theme, value }) =>
      !value && theme.palette.background.grey01};
  }
`;
