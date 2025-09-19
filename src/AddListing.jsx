import React, { useState } from 'react';
import { Card, CardContent, Button, Typography } from '@mui/material';
import { Apartment } from '@mui/icons-material';
import ListingForm from './ListingForm';

const AddListing = () => {
  const [showForm, setShowForm] = useState(false);

  if (showForm) {
    return <ListingForm onCancel={() => setShowForm(false)} />;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh', padding: '20px', maxWidth: '1100px', margin: '0 auto' }}>
      <Card sx={{ minWidth: 320, textAlign: 'center', padding: '30px' }}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h6" component="div" sx={{ mb: 3 }}>
            Add for Sale or Lease
          </Typography>
          <Apartment sx={{ fontSize: 120, color: 'grey.500', marginBottom: '24px' }} />
          <Button variant="contained" size="large" onClick={() => setShowForm(true)}>Add Listing</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddListing;
