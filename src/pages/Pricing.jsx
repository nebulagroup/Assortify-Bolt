import React from 'react'
import { Container, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material'

const plans = [
  { name: 'Starter Plan', price: '$5,000/month', features: ['AI-driven demand forecasting', 'Dynamic SKU optimization', 'RegionIntel™️ for regional demand adjustments', 'Basic reporting and analytics dashboard'] },
  { name: 'Growth Plan', price: '$20,000/month', features: ['Everything in Starter Plan', 'Decanting optimization with OptiDecant™️', 'Predictive simulation engine (SimuStock™️)', 'Advanced reporting with custom insights', '24/7 priority support'] },
  { name: 'Enterprise Plan', price: 'Custom pricing', features: ['Everything in Growth Plan', 'Full integration with existing ERP systems', 'Custom AI model training', 'Dedicated account manager', 'White-labeling options', 'On-premise deployment'] },
]

function Pricing() {
  return (
    <Container maxWidth="md">
      <Typography variant="h3" component="h1" gutterBottom sx={{ my: 4 }}>
        Pricing Plans
      </Typography>
      <Grid container spacing={4}>
        {plans.map((plan) => (
          <Grid item xs={12} md={4} key={plan.name}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {plan.name}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  {plan.price}
                </Typography>
                <ul>
                  {plan.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Get Started
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Pricing