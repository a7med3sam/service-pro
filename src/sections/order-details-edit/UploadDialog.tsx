import React, { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";

interface UploadDialogProps {
  open: boolean;
  onClose: () => void;
  onDone?: (file: File | null) => void;
  onContinue: () => void;
  documentName?: string;
}

const UploadDialog: React.FC<UploadDialogProps> = ({
  open,
  onClose,
  onDone,
  onContinue,
  documentName,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleDone = () => {
    handleClose();
  };

  const handleClose = () => {
    setFile(null); // reset file
    onClose(); // close dialog
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: { borderRadius: 4, p: 3 },
      }}
    >
      {/* Close */}
      <IconButton
        onClick={handleClose}
        sx={{ position: "absolute", right: 12, top: 12 }}
      >
        <CloseIcon />
      </IconButton>

      {/* Title */}
      <Typography fontWeight={600} mb={0.5} fontSize={16} color="#181D27">
        Upload Document
      </Typography>

      <Typography variant="body2" fontSize={13} color="#6C606C" mb={3}>
        Please upload files in pdf, docx or doc format and make sure the file
        size is under 25 MB.
      </Typography>

      {/* Upload Area */}
      <DialogContent sx={{ p: 0, mb: 3 }}>
        <Box
          sx={{
            border: "1px solid #E5E5E5",
            borderRadius: 3,
            height: 160,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "text.secondary",
          }}
        >
          {!file ? (
            <>
              {/* Icon */}
              <Box
                component="img"
                src="/assets/icons/clipboard.svg"
                alt="upload icon"
                sx={{
                  width: 48,
                  height: 48,
                  objectFit: "contain",
                  mb: 1,
                }}
              />

              <Typography variant="body2">No files Uploaded yet!</Typography>
            </>
          ) : (
            <>
              <InsertDriveFileOutlinedIcon sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="body2">{file.name}</Typography>
              <Typography variant="caption" color="text.secondary">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </Typography>
            </>
          )}
        </Box>
      </DialogContent>

      {/* Hidden Input */}
      <input
        ref={fileInputRef}
        type="file"
        hidden
        accept=".pdf,.doc,.docx"
        onChange={handleFileChange}
      />

      {/* Upload Button */}
      <Box textAlign="center" mb={1}>
        <Button
          onClick={handleUploadClick}
          sx={{
            textTransform: "none",
            borderRadius: 5,
            px: 5,
            backgroundColor: "#EEE",
          }}
        >
          Upload
        </Button>
      </Box>

      <Typography
        variant="caption"
        display="block"
        textAlign="center"
        color="text.secondary"
        mb={3}
      >
        Format: pdf, docx, doc & Max file size: 25 MB
      </Typography>

      {/* Actions */}
      <DialogActions sx={{ px: 0 }}>
        <Button
          fullWidth
          onClick={handleClose}
          sx={{
            textTransform: "none",
            borderRadius: 2,
            border: "1px solid #E0E0E0",
            color: "#000",
          }}
        >
          Cancel
        </Button>

        <Button
          fullWidth
          onClick={handleDone}
          variant="contained"
          disabled={!file}
          sx={{
            textTransform: "none",
            borderRadius: 2,
            backgroundColor: "#8D744C",
          }}
        >
          Done
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UploadDialog;
