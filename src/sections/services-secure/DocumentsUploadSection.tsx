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
          >
            Proceed to checkout
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
