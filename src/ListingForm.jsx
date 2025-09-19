import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Paper, InputAdornment } from '@mui/material';
import LeafletMap from './LeafletMap';

const ListingForm = ({ onCancel }) => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const handleMapClick = (lat, lng) => {
    setLatitude(lat);
    setLongitude(lng);
  };

  return (
    <Paper sx={{ p: 4, maxWidth: 800, margin: 'auto' }}>
      <Typography variant="h5" component="h2" sx={{ mb: 3 }}>
        Create New Property Details
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
        <TextField label="Title" variant="outlined" required />
        <TextField label="Address" variant="outlined" required />
        <TextField
          label="Price"
          variant="outlined"
          type="number"
          required
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField label="SqFt" variant="outlined" type="number" required />
        <TextField label="Type" variant="outlined" required />
        <TextField label="Status" variant="outlined" required />
        <TextField label="CAP Rate" variant="outlined" required />
        <TextField label="NOI" variant="outlined" required />
        <TextField
          label="Latitude"
          variant="outlined"
          required
          value={latitude}
          disabled
        />
        <TextField
          label="Longitude"
          variant="outlined"
          required
          value={longitude}
          disabled
        />
      </Box>
      <Box sx={{ mt: 3 }}>
        <Typography sx={{ mb: 1, fontStyle: 'italic', color: 'text.secondary' }}>
          Select latitude and longitude from map
        </Typography>
        <LeafletMap onMapClick={handleMapClick} />
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
