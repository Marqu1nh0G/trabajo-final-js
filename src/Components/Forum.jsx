import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Divider,
} from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";

const Forum = () => {
  const [comments, setComments] = useState([]); // Estado para los comentarios
  const [commentText, setCommentText] = useState(""); // Texto del comentario

  const handleAddComment = () => {
    if (commentText.trim() === "") return; // Evitar comentarios vacíos
    const newComment = {
      id: Date.now(), // Generar un ID único
      text: commentText,
      timestamp: new Date().toLocaleString(), // Agregar fecha y hora
    };

    setComments([newComment, ...comments]); // Agregar comentario al inicio de la lista
    setCommentText(""); // Limpiar el campo de texto
  };

  return (
    <Box
      sx={{
        maxWidth: "800px",
        margin: "auto",
        marginTop: 4,
        padding: 2
      }}
      id="foro"
    >
      {/* Título */}
      <Paper elevation={3} sx={{ padding: 3, borderRadius: 2, marginBottom: 4 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            fontWeight: "bold",
          }}
        >
          <ForumIcon />
          Foro de Discusión
        </Typography>
        <Typography variant="body1">
          Participa en la discusión y comparte tus ideas. Los comentarios se
          actualizan en tiempo real.
        </Typography>
      </Paper>

      {/* Sección para agregar comentarios */}
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
        onSubmit={(e) => {
          e.preventDefault(); // Evitar recarga de página
          handleAddComment();
        }}
      >
        <TextField
          label="Escribe tu comentario"
          variant="outlined"
          multiline
          rows={3}
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          fullWidth
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            alignSelf: "flex-end",
            backgroundColor: "#1976d2",
            "&:hover": {
              backgroundColor: "#155fa0",
            },
          }}
        >
          Enviar Comentario
        </Button>
      </Box>

      {/* Lista de comentarios */}
      <Paper elevation={2} sx={{ marginTop: 4, padding: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
          Comentarios ({comments.length})
        </Typography>
        {comments.length > 0 ? (
          <List>
            {comments.map((comment) => (
              <React.Fragment key={comment.id}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: "#1976d2" }}>
                      {comment.text.charAt(0).toUpperCase()}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={comment.text}
                    secondary={comment.timestamp}
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </React.Fragment>
            ))}
          </List>
        ) : (
          <Typography variant="body1" color="textSecondary">
            Aún no hay comentarios. ¡Sé el primero en participar!
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default Forum;
