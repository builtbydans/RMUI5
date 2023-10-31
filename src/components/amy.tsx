import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormHelperText,
} from "@mui/material";
import { useState } from "react";

const MuiRadioButton = () => {
  const [value, setValue] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log({ value });
    setValue(event.target.value);
  };

  // LINES 20 - 30
  let conditionalProp = {
    error: true,
  };

  if (value) {
    conditionalProp = { error: false };
  }

  return (
    <Box>
      <FormControl {...conditionalProp}>
        <FormLabel id="job-experience-group-label">
          Years of Experience
        </FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-experience-group-label"
          value={value}
          onChange={handleChange}
          row
        >
          <FormControlLabel
            control={<Radio size="small" color="secondary" />}
            label="0-2"
            value="0-2"
          />
          <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
          <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
        </RadioGroup>
        <FormHelperText>
          {!value ? "Please select an option" : ""}
        </FormHelperText>
      </FormControl>
    </Box>
  );
};

export default MuiRadioButton;
