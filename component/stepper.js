import { FormControlLabel, FormLabel, InputBase, MenuItem, Radio, RadioGroup, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useRef } from "react";

export const getStepContent = (step) => {
  switch (step) {
    case 0:
      return (
        <>
          <Box sx={{ display: "flex", gap: 2, height: "8vh", alignItems: "center", }} >
            <InputBase fullWidth placeholder="First Name"  required 
            sx={{ borderRadius: "40px", height: "5vh", padding: 2, backgroundColor: "#EEEBEB", color: "#000", }}/>
            <InputBase fullWidth
              placeholder="Last Name"
              required
              sx={{
                borderRadius: "40px",
                height: "5vh",
                padding: 2,
                backgroundColor: "#EEEBEB",
                color: "#000",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              height: "8vh",
              alignItems: "center",
            }}
          >
            <InputBase
              fullWidth
              placeholder="Email"
              required
              sx={{
                borderRadius: "40px",
                height: "5vh",
                padding: 2,
                backgroundColor: "#EEEBEB",
                color: "#000",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              height: "8vh",
              alignItems: "center",
            }}
          >
            <InputBase
              fullWidth
              placeholder="Password"
              required
              type="password"
              sx={{
                borderRadius: "40px",
                height: "5vh",
                padding: 2,
                backgroundColor: "#EEEBEB",
                color: "#000",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              height: "8vh",
              alignItems: "center",
            }}
          >
            <InputBase
              fullWidth
              placeholder="Confirm Password"
              required
              type="password"
              sx={{
                borderRadius: "40px",
                height: "5vh",
                padding: 2,
                backgroundColor: "#EEEBEB",
                color: "#000",
              }}
            />
          </Box>
        </>
      );
    case 1:
      return (
        <>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              height: "8vh",
              alignItems: "center",
            }}
          >
            <InputBase
              fullWidth
              placeholder="Date of Birth"
              required
              type="date"
              sx={{
                borderRadius: "40px",
                height: "5vh",
                padding: 2,
                backgroundColor: "#EEEBEB",
                color: "#000",
              }}
            />
            <InputBase
              fullWidth
              placeholder="Age"
              required
              type="number"
              sx={{
                borderRadius: "40px",
                height: "5vh",
                padding: 2,
                backgroundColor: "#EEEBEB",
                color: "#000",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              height: "8vh",
              alignItems: "center",
            }}
          >
            <InputBase
              fullWidth
              placeholder="Phone Number"
              required
              sx={{
                borderRadius: "40px",
                height: "5vh",
                padding: 2,
                backgroundColor: "#EEEBEB",
                color: "#000",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              height: "8vh",
              alignItems: "center",
            }}
          >
            <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              height: "8vh",
              alignItems: "center",
            }}
          >
            <InputBase
              fullWidth
              placeholder="City name"
              required
              sx={{
                borderRadius: "40px",
                height: "5vh",
                padding: 2,
                backgroundColor: "#EEEBEB",
                color: "#000",
              }}
            />
          </Box>
        </>
      );
    case 2:
      return (
        <>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              height: "8vh",
              alignItems: "center",
            }}
          >
            <InputBase
              fullWidth
              placeholder="Pet name"
              required
              sx={{
                borderRadius: "40px",
                height: "5vh",
                padding: 2,
                backgroundColor: "#EEEBEB",
                color: "#000",
              }}
            />
            <InputBase
              fullWidth
              placeholder="Pet Age"
              required
              type="number"
              sx={{
                borderRadius: "40px",
                height: "5vh",
                padding: 2,
                backgroundColor: "#EEEBEB",
                color: "#000",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              height: "8vh",
              alignItems: "center",
            }}
          >
            <InputBase
              fullWidth
              placeholder="Breed"
              required
              sx={{
                borderRadius: "40px",
                height: "5vh",
                padding: 2,
                backgroundColor: "#EEEBEB",
                color: "#000",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              height: "8vh",
              alignItems: "center",
            }}
          >
            <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              height: "8vh",
              alignItems: "center",
            }}
          >
            <FormLabel id="demo-row-radio-buttons-group-label">Vaccined</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </Box>
          {getUserData}
        </>
      );
    default:
      return "unknown";
  }
};
