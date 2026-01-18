import {
  Box,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Paper,
} from "@mui/material";
import React, { useState } from "react";
import UploadDialog from "./UploadDialog";

import { useRouter } from "next/navigation";

interface Document {
  id: number;
  name: string;
  date: string;
  days: string;
  remarks: string;
  status: string;
}

const documents = [
  {
    id: 1,
    name: "Passport Copy",
    date: "-",
    days: "-",
    remarks: "Document not uploaded yet",
    status: "Pending Upload",
  },
  {
    id: 2,
    name: "Emirates ID Copy",
    date: "-",
    days: "-",
    remarks: "Document not uploaded yet",
    status: "Pending Upload",
  },
  {
    id: 3,
    name: "Personal Photo (White Background)",
    date: "-",
    days: "-",
    remarks: "Document not uploaded yet",
    status: "Pending Upload",
  },
  {
    id: 4,
    name: "Entry Permit",
    date: "-",
    days: "-",
    remarks: "Document not uploaded yet",
    status: "Pending Upload",
  },
];

export default function DocumentsUploadSection() {
  const router = useRouter();

  const handleCheckout = () => {
    router.push("/checkout");
  };
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedDoc, setSelectedDoc] = React.useState<Document | null>(null);

  const handleUploadClick = (doc: Document) => {
    setSelectedDoc(doc);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => setOpenDialog(false);

  const handleContinue = () => {
    handleCloseDialog();

    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".pdf,image/*,.xls,.xlsx";

    fileInput.onchange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      const file = target.files?.[0];
      if (!file) return;

      if (file.size > 5 * 1024 * 1024) {
        alert("File too large! Max 5MB.");
        return;
      }

      alert(`Selected file: ${file.name}`);
    };

    fileInput.click();
  };

  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="md">
        {/* Table */}
        <TableContainer
          component={Paper}
          elevation={0}
          sx={{
            borderRadius: 2,
            border: "1px solid #E0E0E0",
          }}
        >
          <Table>
            <TableHead>
              <TableRow
                sx={{
                  backgroundColor: "#8D744C",
                }}
              >
                {[
                  "No.",
                  "Document Name",
                  "Date Submitted",
                  "Days Pending",
                  "Remarks",
                  "Status",
                  "Action Required",
                ].map((head) => (
                  <TableCell
                    key={head}
                    sx={{
                      color: "#fff",
                      fontWeight: 500,
                      fontSize: 14,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {head}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {documents.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell>{doc.id}</TableCell>
                  <TableCell>{doc.name}</TableCell>
                  <TableCell>{doc.date}</TableCell>
                  <TableCell>{doc.days}</TableCell>
                  <TableCell>{doc.remarks}</TableCell>
                  <TableCell>{doc.status}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        backgroundColor: "#8D744C",
                        textTransform: "none",
                        px: 3,
                        borderRadius: "6px",
                        "&:hover": {
                          backgroundColor: "#7A6441",
                        },
                      }}
                      onClick={() => handleUploadClick(doc)} // ✅ مرر doc مباشرة
                    >
                      Upload
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Actions */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 4,
            mt: 6,
          }}
        >
          <Button
            variant="outlined"
            sx={{
              width: 300,
              height: 48,
              borderRadius: "8px",
              textTransform: "none",
              color: "#8D744C",
              borderColor: "#8D744C",
              "&:hover": {
                borderColor: "#8D744C",
              },
            }}
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            sx={{
              width: 300,
              height: 48,
              borderRadius: "8px",
              textTransform: "none",
              backgroundColor: "#8D744C",
              "&:hover": {
                backgroundColor: "#7A6441",
              },
            }}
            onClick={handleCheckout}
          >
            Proceed to checkout
          </Button>
        </Box>
      </Container>
      <UploadDialog
        open={openDialog}
        onClose={handleCloseDialog}
        onContinue={handleContinue}
        documentName={selectedDoc?.name}
      />
    </Box>
  );
}
