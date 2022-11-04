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
import StepperComp from "../component/StepperComp";
import { useCollection } from "../firebase/useFirebase";

const SignUp = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const { getUsersData, createUserData, getSignUp } = useCollection("Users");
  const { getStepContent, getSteps, userInputData, petrInputData } = StepperComp();
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };
  const isStepFalied = () => {
    return Boolean(Object.keys(userInputData.formState.errors).length);
  };
  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = async (data) => {
    if (activeStep == steps.length - 1) {
      const userId = await getSignUp(data);
      console.log("SignUp", userId);
      await createUserData(data, userId);
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
