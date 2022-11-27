import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { useRef } from "react";
import { Controller, useForm, useFormContext } from "react-hook-form";
let cityname = ["Архангай", "Баян-Өлгий", "Баянхонгор", "Булган", "Говь-Алтай", "Говьсүмбэр", "Дархан-Уул", "Дорноговь", "Дорнод", "Дундговь", "Завхан", "Орхон", "Өвөрхангай", "Өмнөговь", "Сүхбаатар", "Сэлэнгэ", "Төв", "Увс", "Улаанбаатар", "Ховд", "Хөвсгөл", "Хэнтий"]
//StepperComp
const StepperComp = () => {
  function getSteps() {
    return [
      "Basic information",
      "Contact Information",
      "Pet Information",
      "Finish",
    ];
  }

  //User sign up information
  const BasicForm = () => {
    const {
      control,
      formState: { errors },
    } = useFormContext();
    return (
      <Box>
        <Controller
          control={control}
          name="firstName"
          rules={{ required: "this field is required." }}
          render={({ field }) => (
            <TextField
              id="first-name"
              label="First Name"
              variant="outlined"
              placeholder="Enter Your First Name"
              fullWidth
              margin="normal"
              {...field}
              error={Boolean(errors?.firstName)}
              helperText={errors.firstName?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="lastName"
          rules={{ required: "this field is required." }}
          render={({ field }) => (
            <TextField
              id="last-name"
              label="Last Name"
              variant="outlined"
              placeholder="Enter Your Last Name"
              fullWidth
              margin="normal"
              {...field}
              error={Boolean(errors?.lastName)}
              helperText={errors.lastName?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="emailAddress"
          rules={{ required: "this field is required." }}
          render={({ field }) => (
            <TextField
              id="emailAddress"
              label="Email Address"
              variant="outlined"
              placeholder="Enter Your Last Name"
              fullWidth
              margin="normal"
              {...field}
              error={Boolean(errors?.emailAddress)}
              helperText={errors.emailAddress?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={{ required: "this field is required." }}
          render={({ field }) => (
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              placeholder="Enter Your Password"
              fullWidth
              margin="normal"
              type="password"
              {...field}
              error={Boolean(errors?.password)}
              helperText={errors.password?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="passwordConfirm"
          rules={{ required: "this field is required." }}
          render={({ field }) => (
            <TextField
              id="passwordConfirm"
              label="Password-confirm"
              variant="outlined"
              placeholder="Enter Your Password-confirm"
              fullWidth
              margin="normal"
              type="password"
              {...field}
              error={Boolean(errors?.passwordConfirm)}
              helperText={errors.passwordConfirm?.message}
            />
          )}
        />
      </Box>
    );
  };
  //User sign up contact form
  const ContactForm = () => {
    const {
      control,
      formState: { errors },
    } = useFormContext();
    return (
      <>
        <Controller
          control={control}
          name="dateOfBirth"
          rules={{ required: "this field is required." }}
          render={({ field }) => (
            <TextField
              id="date-of-birth"
              type="date"
              variant="outlined"
              placeholder="Enter Your Date Of Birth"
              fullWidth
              margin="normal"
              {...field}
              error={Boolean(errors?.dateOfBirth)}
              helperText={errors.dateOfBirth?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="phoneNumber"
          rules={{ required: "this field is required." }}

          render={({ field }) => (
            <TextField
              id="phone-number"
              type="number"
              variant="outlined"
              placeholder="Enter Your Phone Number"
              fullWidth
              margin="normal"
              {...field}
              error={Boolean(errors?.phoneNumber)}
              helperText={errors.phoneNumber?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="gender"
          render={({ field }) => (
            <>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                {...field}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </>
          )}
        />
        {/* <Controller
          control={control}
          name="cityName"
          render={({ field }) => (
            // <TextField
            //   id="city-name"
            //   type="cityName"
            //   variant="outlined"
            //   placeholder="Enter Your City Name"
            //   fullWidth
            //   margin="normal"
            //   {...field}
            // />
          )}
        /> */}
        <Controller
          name="cityName"
          rules={{ required: 'Please select a city' }}
          control={control}
          render={({ field, fieldState }) => {
            return (
              <FormControl fullWidth>
                <InputLabel id="city-label">City</InputLabel>
                <Select
                  id="city-select"
                  label="City"
                  labelId="city-id"
                  error={!!fieldState.error}
                  {...field}
                >
                {cityname.map((i)=> (<MenuItem value={i ?? ''} key={i}>
                        {i}
                </MenuItem>))}
                </Select>
                {fieldState.error ? (
                  <FormHelperText error>
                    {fieldState.error?.message}
                  </FormHelperText>
                ) : null}
              </FormControl>
            );
          }}
        />
      </>
    );
  };

  //Pet sign up form
  const PetForm = () => {
    const {
      control,
      formState: { errors },
    } = useFormContext();
    return (
      <>
        <Controller
          control={control}
          name="category"
          render={({ field }) => (
            <>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Category
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                {...field}
              >
                <FormControlLabel value="dog" control={<Radio />} label="Dog" />
                <FormControlLabel value="cat" control={<Radio />} label="Cat" />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </>
          )}
        />
        <Controller
          control={control}
          name="petName"
          render={({ field }) => (
            <TextField
              id="petname"
              label="Pet Name"
              variant="outlined"
              placeholder="Enter Your Pet Name"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="petAge"
          render={({ field }) => (
            <TextField
              id="petage"
              label="Pet Age"
              variant="outlined"
              defaultValue=""
              placeholder="Enter Your Pet Age"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="breed"
          render={({ field }) => (
            <TextField
              id="breed"
              label="Breed"
              variant="outlined"
              defaultValue=""
              placeholder="Enter Your Breed"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="sex"
          render={({ field }) => (
            <>
              <FormLabel id="demo-pet-gender">
              sex
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-pet-gender"
                name="demo-pet-gender"
                {...field}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            </>
          )}
        />
        <Controller
          control={control}
          name="vaccinated"
          render={({ field }) => (
            <>
              <FormLabel id="demo-pet-vaccined">
              vaccinated
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-pet-vaccined"
                name="demo-pet-vaccined"
                {...field}
              >
                <FormControlLabel value={true} control={<Radio />} label="Yes" />
                <FormControlLabel value={false} control={<Radio />} label="No" />
              </RadioGroup>
            </>
          )}
        />
      </>
    );
  };

  //User form change event
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <BasicForm />;
      case 1:
        return <ContactForm />;
      case 2:
        return <PetForm />;
      default:
        return "You're almost there";
    }
  }
  const userInputData = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      password: "",
      passwordConfirm: "",
      dateOfBirth: "",
      phoneNumber: "",
      gender: "",
      cityName: "",
      createdAt: serverTimestamp(),
      backgroundImage: "",
    },
  });
  const petInputData = useForm({
    defaultValues: {
      category: "",
      petName: "",
      petAge: "",
      breed: "",
      sex: "",
      vaccinated: false,
    },
  });
  return { getStepContent, getSteps, userInputData, petInputData };
};
export default StepperComp;
