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


//Sign Up Component
const SignUp = () => {

  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const { getUsersData, createUserData, createUser, createPetData } = useCollection("Users");
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
  }
  const petInputDataDefaultValue = {
    category: "",
    petName: "",
    petAge: "",
    breed: "",
    petgender: "",
    vaccined: "",
  }
  const handleNext = async (data) => {
    if (activeStep == steps.length - 1) {

      let tempUserData = {};
      for (const [key] of Object.entries(userInputDataDefaultValue)) {
        tempUserData[key] = data[key];
      }
      const userId = await createUser(data);
      console.log(userId)
      await createUserData(tempUserData, userId);

      if(!skippedSteps.includes(2)){
        let tempPetData = {};
        for (const [key, value] of Object.entries(petInputDataDefaultValue)) {
          tempPetData[key] = data[key] == undefined ? '' : data[key];
        }
        tempPetData.OwnerId = userId;
        await createPetData(tempPetData);
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
    <Box width="30%" m="auto">
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
  );
};
export default SignUp;