import {
  Box,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import React from "react";

interface Document {
  id: number;
  name: string;
  date: string;
  status: string;
}

const documents: Document[] = [
  { id: 1, name: "Passport Copy", date: "2026-01-15", status: "Completed" },
  { id: 2, name: "Emirates ID Copy", date: "2026-01-16", status: "Completed" },
  { id: 3, name: "Personal Photo (White Background)", date: "2026-01-17", status: "Completed" },
  { id: 4, name: "Entry Permit", date: "2026-01-18", status: "Completed" },
];

export default function DocumentsListSection() {
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
                {["No.", "Document Name", "Date Submitted", "Status"].map((head) => (
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
                  <TableCell>{doc.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}
