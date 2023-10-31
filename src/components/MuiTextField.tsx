import { Stack, TextField, InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";

const MuiTextField = () => {
  const [value, setValue] = useState("");

  return (
    <Stack spacing={2} marginTop={5}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Small Secondary"
          variant="outlined"
          size="small"
          color="secondary"
          required
        />
        <TextField
          label="Medium Error"
          variant="outlined"
          size="medium"
          color="error"
          required
        />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Password"
          type="password"
          required
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          error={!value}
          helperText={
            !value ? "Required" : "Do not share your password with anyone"
          }
        />
        <TextField
          label="Password"
          helperText="Do not share your password with anyone"
          type="password"
          disabled
        />
        {/* Create a read only text field using InputProps */}
        <TextField label="Read Only" InputProps={{ readOnly: true }} />
      </Stack>

      {/* Add prefix and suffixes to input fields */}
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
        {/* In this example, we are using an icon component as the InputAdornment */}
        <TextField
          label="Password"
          type="password"
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <VisibilityIcon />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
