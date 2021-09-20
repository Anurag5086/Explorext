import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import CreateModal from "./CreateModal";

export default function UploadButton() {
  const [modalType, setModalType] = useState();
  const [open, setOpen] = useState(false);

  const FileClickAction = (popupState) => {
    console.log("FIle is clicked");
    popupState.close();
    setOpen(true);
    setModalType("File");
  };

  const FolderClickAction = (popupState) => {
    console.log("Folder is clicked");
    popupState.close();
    setOpen(true);
    setModalType("Folder");
  };

  const handleSetOpen = () => {
    setOpen(false);
    window.location.reload();
  };

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button
            variant="contained"
            {...bindTrigger(popupState)}
            style={{
              backgroundColor: "#fcf05a",
              color: "#fdbd40",
              fontSize: "20px",
              borderRadius: "100px",
            }}
          >
            +
          </Button>
          {open ? (
            <CreateModal
              type={modalType}
              open={open}
              handleSetOpen={handleSetOpen}
            />
          ) : null}
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={() => FileClickAction(popupState)}>
              File
            </MenuItem>
            <MenuItem onClick={() => FolderClickAction(popupState)}>
              Folder
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
