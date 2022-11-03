import { Box, Button, FormControlLabel, FormLabel, Radio, RadioGroup, Step, StepLabel, Stepper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";
import { getSignUp } from "../firebase/firebaseConfig";

function getSteps() {
  return [
    "Basic information",
    "Contact Information",
    "Pet Information",
  ];
}
const BasicForm = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  console.log(errors);
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
              {...field}
              error={Boolean(errors?.passwordConfirm)}
              helperText={errors.passwordConfirm?.message}
            />
          )}
        /> 
      </Box>
      
  );
};
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
            // label="Date Of Birth"
            type='date'
            variant="outlined"
            placeholder="Enter Your Date Of Birth"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.passwordConfirm)}
            helperText={errors.passwordConfirm?.message}
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
            // label="Date Of Birth"
            type='number'
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
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <>
            <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              {...field}
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </>
        )}
      />
      <Controller
        control={control}
        name="cityName"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="city-name"
            // label="Date Of Birth"
            type='cityName'
            variant="outlined"
            placeholder="Enter Your City Name"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.cityName)}
            helperText={errors.cityName?.message}
          />
        )}
      />
    </>
  );
};
const PersonalForm = () => {
  const { control } = useFormContext();
  return (
    <>
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
            placeholder="Enter Your Breed"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="petgender"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <>
            <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              {...field}
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </>
        )}
      />
      <Controller
        control={control}
        name="vaccined"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <>
            <FormLabel id="demo-row-radio-buttons-group-label">Vaccined</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              {...field}
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </>
        )}
      />
      
    </>
  );
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <BasicForm />;
    case 1:
      return <ContactForm />;
    case 2:
      return <PersonalForm />;
    default:
      return "unknown step";
  }
}
const SignUp = () => {
  const methods = useForm({
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
      petName: "",
      petAge: "",
      breed: "",
      petgender: "",
      vaccined: "",
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const [userData, setUserData] = useState({});

  const steps = getSteps();
  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };
  const isStepFalied = () => {
    return Boolean(Object.keys(methods.formState.errors).length);
  };
  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = (data) => {
    console.log("data", data);
    if (activeStep == steps.length - 1) {
      // fetch("https://jsonplaceholder.typicode.com/comments")
      //   .then((data) => data.json())
      //   .then((res) => {
      //     console.log(res);
      //   });
        setUserData({...data})
        getSignUp({...data})
        setActiveStep(activeStep + 1);

    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  // const onSubmit = (data) => {
  //   console.log(data);
  // };
  return (
    <Box width="30%" m='auto'>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
                optional
              </Typography>
            );
          }
          if (isStepFalied() && activeStep == index) {
            labelProps.error = true;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
          {console.log("userData", userData)}
        </Typography>
      ) : (
        <>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleNext)}>
              {getStepContent(activeStep)}

              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                back
              </Button>
              {isStepOptional(activeStep) && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                >
                  skip
                </Button>
              )}
              <Button
                variant="contained"
                color="primary"
                // onClick={handleNext}
                type="submit"
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </form>
          </FormProvider>
        </>
      )}
    </Box>
  );
};
export default SignUp;
