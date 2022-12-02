import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { FormProvider } from "react-hook-form";
import StepperComp from "./StepperComp";
import { useCollection } from "../firebase/useFirebase";
import { useDocument } from "../firebase/useFirebase";
import styles from "../styles/login.module.css";

//Sign Up Component
const SignUp = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const { createData: createUserData, createUser } = useCollection("Users");
  const { createData: createPet } = useDocument({ path: "Pets" });

  const { getStepContent, getSteps, userInputData } = StepperComp();
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 2;
  };
  const isStepFalied = () => {
    return Boolean(Object.keys(userInputData.formState.errors).length);
  };
  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };
  const userInputDataDefaultValue = {
    firstName: "",
    lastName: "",
    emailAddress: "",
    dateOfBirth: "",
    phoneNumber: "",
    gender: "",
    cityName: "",
  };
  const petInputDataDefaultValue = {
    category: "",
    petName: "",
    petAge: "",
    breed: "",
    image: "",
    sex: "",
    birthDate: "",
    description: "",
    weight: "",
    height: "",
    color: "",
    microchipped: false,
    vaccinated: false,
    sprayed: false,
  };

  const handleNext = async (data) => {
    if (activeStep == steps.length - 1) {
      let tempUserData = {};
      for (const [key] of Object.entries(userInputDataDefaultValue)) {
        tempUserData[key] = data[key];
      }
      const userId = await createUser(data);
      createUserData(userId, { ...tempUserData, avatar: "" });
      if (!skippedSteps.includes(2)) {
        let tempPetData = {};
        for (const [key, value] of Object.entries(petInputDataDefaultValue)) {
          tempPetData[key] = data[key] == undefined ? "" : data[key];
        }
        tempPetData.ownerID = userId;
        tempPetData.createdAt = serverTimestamp();
        if (userId) {
          createPet(tempPetData);
        }
      }
    } else {
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }
    setActiveStep(activeStep + 1);
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

  return (
    <Box className={styles.signup_wrapper}>
      <Box className={styles.signup_box}>
        <Typography m={2}>Create account</Typography>
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
          </Typography>
        ) : (
          <FormProvider {...userInputData}>
            <form onSubmit={userInputData.handleSubmit(handleNext)}>
              {getStepContent(activeStep)}

              <Button disabled={activeStep === 0} onClick={handleBack}>
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
        )}
      </Box>
    </Box>
  );
};
export default SignUp;
