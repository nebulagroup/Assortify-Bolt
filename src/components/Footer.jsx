import React from 'react'
import { Box, Typography, Link } from '@mui/material'

function Footer() {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      <Typography variant="body2" color="text.secondary" align="center">
        © {new Date().getFullYear()} Assortify. All rights reserved.
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        <Link color="inherit" href="mailto:info@assortify.com">
          info@assortify.com
        </Link>
        {' | '}
        <Link color="inherit" href="tel:+11234567890">
          +1 (123) 456-7890
        </Link>
      </Typography>
    </Box>
  )
}

export default Footer