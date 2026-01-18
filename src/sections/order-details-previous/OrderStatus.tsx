import React from "react";
import {
  Box,
  Typography,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Paper,
  styled,
} from "@mui/material";
import { StepConnector } from "@mui/material";

interface StatusStep {
  label: string;
  description: string;
  timestamp: string;
  completed: boolean;
}

const statusSteps: StatusStep[] = [
  {
    label: "Service Purchased",
    description:
      "You Have Successfully Purchased The Service. Your Request Has Been Created",
    timestamp: "24 Dec, 12:57",
    completed: true,
  },
  {
    label: "Documents Uploaded",
    description: "Required Documents Have Been Uploaded To Your Application",
    timestamp: "24 Dec, 12:57",
    completed: true,
  },
  {
    label: "Document Review",
    description:
      "Our Team Is Reviewing Your Documents To Ensure Everything Is Correct And Valid.",
    timestamp: "24 Dec, 12:57",
    completed: true,
  },
  {
    label: "Submission To Government",
    description:
      "Your Application Has Been Submitted To The Official Government Portal",
    timestamp: "24 Dec, 12:57",
    completed: false,
  },
  {
    label: "Government Processing",
    description:
      "Your Request Is Being Processed By The Government. This Step May Take 1-3 Working Days.",
    timestamp: "24 Dec, 12:57",
    completed: false,
  },
  {
    label: "Approved",
    description: "Your Application Has Been Approved By The Government.",
    timestamp: "24 Dec, 12:57",
    completed: false,
  },
  {
    label: "Final Document Issued",
    description:
      "Your Final Document (Residency) Has Been Issued And Is Ready For Download",
    timestamp: "24 Dec, 12:57",
    completed: false,
  },
];

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: 900,
  margin: "0 auto",
  background: "transparent",
}));

const StyledStepLabel = styled(StepLabel)(({ theme }) => ({
  "& .MuiStepLabel-label": {
    fontWeight: 600,
    fontSize: "1.1rem",
    color: theme.palette.text.primary,
    fontFamily: '"DM Sans", sans-serif',
  },
  "& .MuiStepLabel-label.Mui-active": {
    color: "#1EA083",
  },
  "& .MuiStepLabel-label.Mui-completed": {
    color: "#1b5e20",
  },
}));

const StepBody = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: theme.spacing(4),
  marginLeft: 20,
}));

const Line = styled("div")<{ completed?: boolean }>(({ completed }) => ({
  width: 2,
  height: 60,
  backgroundColor: completed ? "#1EA083" : "#e0e0e0",
  marginTop: -4,
  borderRadius: 8,
}));

const TimeStamp = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: "0.813rem",
  marginTop: theme.spacing(0.5),
  fontFamily: '"Inter", sans-serif',
  fontWeight: 400,
}));

const getStepIcon = (completed: boolean) => {
  return (
    <Box
      sx={{
        width: 42,
        height: 42,
        borderRadius: "50%",
        border: `2px solid ${completed ? "#1EA083" : "#e0e0e0"}`,
        backgroundColor: "#ffffff",
        transition: "all 0.3s ease",
        boxShadow: completed ? "0 4px 12px rgba(46, 125, 50, 0.2)" : "none",
      }}
    />
  );
};

const OrderStatus: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F7F7F7",
        padding: 4,
        my: 5,
      }}
    >
      <StyledPaper elevation={0}>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            mb: 4,
            fontWeight: 500,
            color: "#333D4C",
          }}
        >
          Order Status
        </Typography>

        <Stepper orientation="vertical" connector={null}>
          {statusSteps.map((step, index) => (
            <Step key={step.label}>
              <StyledStepLabel
                StepIconComponent={() => getStepIcon(step.completed)}
                sx={{
                  "& .MuiStepLabel-label": {
                    color: step.completed ? "#1EA083" : "inherit", // أخضر إذا مكتمل
                  },
                }}
              >
                {step.label}
              </StyledStepLabel>

              <StepBody>
                {index !== statusSteps.length - 1 && (
                  <Line completed={step.completed} />
                )}
                <Box>
                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontSize: "0.938rem",
                      lineHeight: 1.6,
                      fontFamily: '"Inter", sans-serif',
                    }}
                  >
                    {step.description}
                  </Typography>
                  <TimeStamp>{step.timestamp}</TimeStamp>
                </Box>
              </StepBody>
            </Step>
          ))}
        </Stepper>
      </StyledPaper>
    </Box>
  );
};

export default OrderStatus;
