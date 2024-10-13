import React from 'react'
import { Container, Typography, TextField, Button, Box } from '@mui/material'

function Contact() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h3" component="h1" gutterBottom sx={{ my: 4 }}>
        Contact Us
      </Typography>
      <Box component="form" noValidate autoComplete="off">
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Message"
          variant="outlined"
          margin="normal"
          multiline
          rows={4}
        />
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Send Message
        </Button>
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography variant="body1">
          Email: info@assortify.com
        </Typography>
        <Typography variant="body1">
          Phone: +1 (123) 456-7890
        </Typography>
      </Box>
    </Container>
  )
}

export default Contact