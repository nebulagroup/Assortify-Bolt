import React from 'react'
import { Container, Typography, Button, Box } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

function Home() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Assortify
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Revolutionizing Retail Assortment with AI-Driven Inventory Optimization
        </Typography>
        <Typography variant="body1" paragraph>
          Assortify™️ is a cutting-edge AI-powered SaaS platform that addresses the challenges of modern retail inventory management and order fulfillment.
        </Typography>
        <Button variant="contained" color="primary" component={RouterLink} to="/features">
          Explore Features
        </Button>
      </Box>
    </Container>
  )
}

export default Home