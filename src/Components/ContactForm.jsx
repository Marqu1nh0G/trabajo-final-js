import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Paper,
} from "@mui/material";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "El nombre es obligatorio.";
    if (!formData.email) {
      newErrors.email = "El correo electrónico es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El correo electrónico no es válido.";
    }
    if (!formData.subject) newErrors.subject = "El asunto es obligatorio.";
    if (!formData.message) newErrors.message = "El mensaje es obligatorio.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      // Mostrar los datos en un alert
      alert(
        `Formulario enviado con éxito.\n\nDatos del formulario:\n- Nombre: ${formData.name}\n- Correo Electrónico: ${formData.email}\n- Asunto: ${formData.subject}\n- Mensaje: ${formData.message}`
      );
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        minHeight: "100vh",
        backgroundColor: "#000000", // Fondo oscuro
        color: "#ffffff", // Texto blanco
        padding: 3,
      }}
      id="formulario"
    >
      <Grid item xs={11} sm={8} md={6}>
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            borderRadius: 2,
            backgroundColor: "#1e1e1e", // Fondo del formulario oscuro
            color: "#ffffff", // Texto blanco
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            textAlign="center"
            sx={{ fontWeight: "bold", color: "#ffc107" }} // Título resaltado
          >
            Contáctanos
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            textAlign="center"
            sx={{ marginBottom: 4, color: "#e0e0e0" }} // Texto gris claro
          >
            Completa el formulario y nos pondremos en contacto contigo pronto.
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <TextField
              fullWidth
              label="Nombre"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={Boolean(errors.name)}
              helperText={errors.name}
              margin="normal"
              InputLabelProps={{
                style: { color: "#ffc107" }, // Etiqueta en amarillo
              }}
              InputProps={{
                style: { color: "#ffffff" }, // Texto blanco
              }}
              FormHelperTextProps={{
                style: { color: "#f44336" }, // Ayuda en rojo
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#ffc107", // Borde amarillo
                  },
                  "&:hover fieldset": {
                    borderColor: "#fdd835", // Borde más claro al pasar el mouse
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#ffc107", // Borde amarillo al enfocar
                  },
                },
              }}
            />
            <TextField
              fullWidth
              label="Correo Electrónico"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={Boolean(errors.email)}
              helperText={errors.email}
              margin="normal"
              InputLabelProps={{
                style: { color: "#ffc107" },
              }}
              InputProps={{
                style: { color: "#ffffff" },
              }}
              FormHelperTextProps={{
                style: { color: "#f44336" },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#ffc107",
                  },
                  "&:hover fieldset": {
                    borderColor: "#fdd835",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#ffc107",
                  },
                },
              }}
            />
            <TextField
              fullWidth
              label="Asunto"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              error={Boolean(errors.subject)}
              helperText={errors.subject}
              margin="normal"
              InputLabelProps={{
                style: { color: "#ffc107" },
              }}
              InputProps={{
                style: { color: "#ffffff" },
              }}
              FormHelperTextProps={{
                style: { color: "#f44336" },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#ffc107",
                  },
                  "&:hover fieldset": {
                    borderColor: "#fdd835",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#ffc107",
                  },
                },
              }}
            />
            <TextField
              fullWidth
              label="Mensaje"
              name="message"
              value={formData.message}
              onChange={handleChange}
              error={Boolean(errors.message)}
              helperText={errors.message}
              margin="normal"
              multiline
              rows={4}
              InputLabelProps={{
                style: { color: "#ffc107" },
              }}
              InputProps={{
                style: { color: "#ffffff" },
              }}
              FormHelperTextProps={{
                style: { color: "#f44336" },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#ffc107",
                  },
                  "&:hover fieldset": {
                    borderColor: "#fdd835",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#ffc107",
                  },
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                marginTop: 3,
                padding: 1,
                backgroundColor: "#ffc107", // Botón amarillo
                color: "#000", // Texto negro
                "&:hover": {
                  backgroundColor: "#fdd835", // Amarillo más claro al pasar el mouse
                },
              }}
            >
              Enviar
            </Button>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ContactForm;
