function MyModal({ open, handleClose, mode }) {
  // mode = "add" or "edit"

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
    >
      {/* Title */}
      <DialogTitle>
        {mode === "edit" ? "Edit Task" : "Add Task"}
      </DialogTitle>

      {/* Content (Your Form Goes Here) */}
      <DialogContent dividers>
        {/* 👉 Paste your TaskForm fields here */}
        <p>Task Form Fields Here...</p>
      </DialogContent>

      {/* Buttons */}
      <DialogActions>
        <Button onClick={handleClose} color="error">
          Cancel
        </Button>

        <Button variant="contained" onClick={handleClose}>
          {mode === "edit" ? "Update Task" : "Add Task"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default MyModal;
