import { Box, Typography, Button, Paper } from '@mui/material';

export default function HomePage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: 'background.default',
        gap: 4,
      }}
    >
      <Typography variant="h1" color="primary.main" gutterBottom>
        Welcome to Hair By Page
      </Typography>
      <Typography variant="h5" color="secondary.main" paragraph>
        A website for hair and other stuff
      </Typography>
      <Button variant="contained" color="primary">
        Book an Appointment
      </Button>
      <Paper
        elevation={3}
        sx={{
          padding: 2,
          backgroundColor: 'background.paper',
        }}
      >
        <Typography variant="body1" color="text.primary">
          Check out our services and special offers!
        </Typography>
      </Paper>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
        }}
      >
        <Button variant="outlined" color="secondary">
          Learn More
        </Button>
        <Button variant="text" color="primary">
          Contact Us
        </Button>
      </Box>
    </Box>
  );
}
