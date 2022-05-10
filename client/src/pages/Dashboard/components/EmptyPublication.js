import { Paper, Typography } from '@mui/material';
import React from 'react'

const EmptyPublication = () => {
  return (
    <Paper sx={{ p: 1, py: 2, backgroundColor: "#EEE", width: "100%" }}>
      <Typography align="center">Aucune publication trouvée</Typography>
    </Paper>
  );
};

export default EmptyPublication