import {
  Button,
  InputBase,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useRef, useState } from "react";
import { getFirebaseUsers, getSignUp } from "../firebase/firebaseConfig";
import { getStepContent } from "../component/stepper";
const margintop = {
  marginTop: "10px",
};

const SignUp = () => {
  const [error, setError] = useState("");
  const emailRef = useRef();
  const lastnameRef = useRef();
  const firstnameRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const steps = [
    "Basic information",
    "Contact Information",
    "Pet Information",
  ];
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);

  const handleSignUp = (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Password do not match");
    }
    setError("");
    getSignUp(emailRef.current.value, passwordRef.current.value);
  };
  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };
  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
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
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
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
        <>
          <form>{getStepContent(activeStep)}</form>
          <Box sx={{width:'30%' ,display: 'flex', justifyContent: 'space-between' }}>
            <Button
              // className={classes.button}
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              back
            </Button>
            {isStepOptional(activeStep) && (
              <Button
                // className={classes.button}
                variant="contained"
                color="primary"
                onClick={handleSkip}
              >
                skip
              </Button>
            )}
            <Button
              // className={classes.button}
              variant="contained"
              color="primary"
              onClick={handleNext}
            >
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </>
      )}
      <Box sx={{ width: '30%' }}>


        {/* <Button
              sx={{...margintop, backgroundColor:'#428730', height:"5vh", borderRadius:"40px" }}
              fullWidth
              variant="contained"
              onClick={handleSignUp}
            >
              Sign Up
            </Button>
              <Typography sx={{ textAlign: "center", marginTop: 2 }}>
                Already have an account? <Link href="/signin" legacyBehavior><a>Sign In</a></Link>
              </Typography> */}
      </Box>
    </Box>
  );
};
export default SignUp;
