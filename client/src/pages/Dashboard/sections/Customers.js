import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { Paper, Typography } from "@mui/material";
import Table from '../components/Table'
import AccodionDetails from '../components/Accordion/AccodionDetails';

const Customers = () => {
  const user = useSelector((state) => state.userReducer.user);
  const [isOpen, setIsopen] = useState(false);
  const handleOpen = () => setIsopen(true);

  const [expanded, setExpanded] = useState(false);
  const handleChange = (open) => (event, newExpanded) => {
    if (isOpen) {
      setIsopen(false);
    }
    setExpanded(newExpanded ? open : false);
  };
  const [row, SetRow] = useState();
  const getRow = (row) => SetRow(row);


  return (
   <>
      <Typography variant="body2" align="center" sx={{ my: 3 }}>
            {`Bienvenue ${user.firstName} ${user.lastName}`}{" "}
          </Typography>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h5" sx={{ mb: 2 }}>
              Liste des clients
            </Typography>
            <Table getRow={getRow} handleOpen={handleOpen} />
          </Paper>
          <AccodionDetails
            title={"Publication Client"}
            isOpen={isOpen}
            expanded={expanded}
            handleChange={handleChange}
            row={row}
          /></>
  )
}

export default Customers