import React from 'react'
import { Container, Typography, Grid, Card, CardContent } from '@mui/material'

const features = [
  { name: 'OptiDecant™️', description: 'Proprietary decanting optimization engine' },
  { name: 'HyperPredict™️', description: 'AI-driven demand forecasting' },
  { name: 'RegionIntel™️', description: 'Hyper-local behavioral analysis tool' },
  { name: 'SKUtopia™️', description: 'Dynamic SKU optimization engine' },
  { name: 'FusionInsights™️', description: 'Integrated data analysis for holistic view' },
  { name: 'SimuStock™️', description: 'Predictive simulation engine' },
]

function Features() {
  return (
    <Container maxWidth="md">
      <Typography variant="h3" component="h1" gutterBottom sx={{ my: 4 }}>
        Core Features
      </Typography>
      <Grid container spacing={4}>
        {features.map((feature) => (
          <Grid item xs={12} sm={6} key={feature.name}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {feature.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Features