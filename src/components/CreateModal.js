import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { addDocumentAction } from "../actions/Document";

export default function CreateModal(props) {
  const [name, setName] = useState();

  const handleClose = () => {
    props.handleSetOpen();
    addDocumentAction(name, props.type);
    console.log(name);
  };

  return (
    <div>
      <Dialog open={props.open} onClose={handleClose}>
        <DialogTitle>Enter {props.type} name</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="fileName"
            fullWidth
            variant="standard"
            onChange={(event) => setName(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Create {props.type}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
