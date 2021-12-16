import { Button, ButtonGroup } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";

const Buttons = () => {
  return (
    <ButtonGroup variant="contained" size="large">
      <Button startIcon={<SaveIcon color="disabled" />} color="primary">
        Primary
      </Button>
      <Button endIcon={<DeleteIcon />} color="secondary">
        Contained
      </Button>
    </ButtonGroup>
  );
};

export default Buttons;
