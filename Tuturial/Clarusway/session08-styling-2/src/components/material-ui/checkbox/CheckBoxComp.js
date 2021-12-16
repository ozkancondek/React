import { NetworkCheck } from "@mui/icons-material";
import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

const CheckBoxComp = () => {
  return (
    <FormControlLabel
      label="Wifi Icon"
      /* control={<Checkbox checked={null} />} */
      control={
        <Checkbox icon={<NetworkCheck />} checkedIcon={<NetworkCheck />} />
      }
    ></FormControlLabel>
  );
};

export default CheckBoxComp;
