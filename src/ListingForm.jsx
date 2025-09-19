import React from 'react';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';

const ListingForm = ({ onCancel }) => {
  return (
    <Paper sx={{ p: 4, maxWidth: 800, margin: 'auto' }}>
      <Typography variant="h5" component="h2" sx={{ mb: 3 }}>
        Create New Listing
      </Typography>
      <Box
        component="form"
        sx={{
          display: 'grid',
          gridTemplateColumns: { sm: '1fr 1fr' },
          gap: 3,
        }}
        noValidate
        autoComplete="off"
      >
        <TextField label="Title" variant="outlined" />
        <TextField label="Address" variant="outlined" />
        <TextField label="Price" variant="outlined" type="number" />
        <TextField label="SqFt" variant="outlined" type="number" />
        <TextField label="Type" variant="outlined" />
        <TextField label="Status" variant="outlined" />
        <TextField label="CAP Rate" variant="outlined" />
        <TextField label="NOI" variant="outlined" />
        <TextField label="Latitude" variant="outlined" />
        <TextField label="Longitude" variant="outlined" />
      </Box>
      <Box
        sx={{
          mt: 3,
          p: 4,
          border: '2px dashed grey',
          borderRadius: 2,
          textAlign: 'center',
          cursor: 'pointer',
          '&:hover': {
            borderColor: 'primary.main',
          },
        }}
      >
        <Typography>Click or drag to upload image</Typography>
      </Box>
      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
        <Button variant="outlined" color="secondary" size="large" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="contained" color="primary" size="large">
          Save Listing
        </Button>
      </Box>
    </Paper>
  );
};

export default ListingForm;
