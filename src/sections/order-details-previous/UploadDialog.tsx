// UploadDialog.tsx
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CloseIcon from "@mui/icons-material/Close";

// 1️⃣ تعريف نوع props
interface UploadDialogProps {
  open: boolean;
  onClose: () => void;
  onContinue: () => void;
  documentName?: string;
}

const UploadDialog: React.FC<UploadDialogProps> = ({
  open,
  onClose,
  onContinue,
  documentName,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 4,
          padding: 2,
          overflow: "hidden",
          position: "relative",
        },
      }}
    >
      {/* Close Button */}
      <IconButton
        onClick={onClose}
        sx={{ position: "absolute", right: 8, top: 8, color: "gray" }}
      >
        <CloseIcon />
      </IconButton>

      {/* Icon + Title */}
      <Box sx={{ textAlign: "center", mt: 3, mb: 2 }}>
        <CloudUploadIcon sx={{ fontSize: 50, color: "#8D744C", mb: 1 }} />
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Upload Document
        </Typography>
      </Box>

      {/* Content */}
      <DialogContent>
        {/* <Typography variant="body1" sx={{ mb: 1 }}>
          Document: <strong>{documentName || "N/A"}</strong>
        </Typography> */}
        <Typography variant="body2" sx={{ mb: 1 }}>
          Maximum file size: <strong>5 MB</strong>
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Allowed file types: <strong>PDF, Images, Excel</strong>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Click continue to select a file from your device.
        </Typography>
      </DialogContent>

      {/* Actions */}
      <DialogActions sx={{ justifyContent: "center", pb: 3 }}>
        <Button
          onClick={onClose}
          sx={{
            textTransform: "none",
            color: "#8D744C",
            borderColor: "#8D744C",
            border: 1,
            borderRadius: 2,
            px: 3,
            "&:hover": { backgroundColor: "#F5F5F5" },
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={onContinue}
          variant="contained"
          sx={{
            textTransform: "none",
            backgroundColor: "#8D744C",
            borderRadius: 2,
            px: 4,
            "&:hover": { backgroundColor: "#7A6441" },
          }}
        >
          Continue
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UploadDialog;
