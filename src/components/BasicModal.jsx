/* eslint-disable react/prop-types */
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  borderRadius: "10px",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid white",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ btnName, text }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          textAlign: "center",
          cursor: "pointer",
          color: "blue",
          zIndex: 22,
          bottom: -10,
          fontWeight: "450",
        }}
        onClick={handleOpen}
      >
        {btnName}
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <h1 className="text-xl font-bold underline mb-4 text-center">Job Description</h1>
            {text}
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
