import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Avatar,
  Paper,
  Stack,
} from "@mui/material";

type Comment = {
  id: number;
  name: string;
  text: string;
};

const initialComments: Comment[] = [
  {
    id: 1,
    name: "Alexandra H.",
    text:
      "Adventures Across Continents truly captures the spirit of travel! Their stories and tips have inspired me to visit places I never even considered before!",
  },
  {
    id: 2,
    name: "Samantha L.",
    text:
      "The captivating narratives and breathtaking visuals on Adventures Across Continents always leave me in awe!",
  },
  {
    id: 3,
    name: "Michael T.",
    text:
      "The blog’s insights into different cultures and hidden spots have enriched my travel experiences. It feels like I'm traveling alongside them with every post.",
  },
];

const CommentSection: React.FC = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<Comment[]>(initialComments);

  const handleSubmit = () => {
    if (!comment.trim()) return;

    setComments([
      ...comments,
      {
        id: Date.now(),
        name: "Guest User",
        text: comment,
      },
    ]);
    setComment("");
  };

  return (
    <Box maxWidth={800} mx="auto" px={2}>
      {/* Leave a Reply */}
      {/* <Typography variant="h6" fontWeight={300} mb={1}>
        Leave a Reply:
      </Typography>

      <TextField
        fullWidth
        multiline
        minRows={3}
        placeholder="Your Comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      /> */}

      {/* <Box mt={2} textAlign="center">
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#000",
            px: 4,
            py: 2,
            borderRadius: 4,
            "&:hover": { backgroundColor: "#333" },
          }}
          onClick={handleSubmit}
        >
          Post Comment
        </Button>
      </Box> */}

      {/* Comments */}
      <Box mt={6}>
        <Typography variant="h6" fontWeight={300} mb={2}>
          {comments.length} Comments:
        </Typography>

        <Stack spacing={2}>
          {comments.map((item) => (
            <Paper
              key={item.id}
              variant="outlined"
              sx={{ p: 2, borderRadius: 2 }}
            >
              <Stack direction="row" spacing={2}>
                <Avatar />

                <Box>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography fontWeight={600}>
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ cursor: "pointer" }}
                    >
                      Reply
                    </Typography>
                  </Stack>

                  <Typography variant="body2" color="text.secondary" mt={0.5}>
                    “{item.text}”
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default CommentSection;
