import React from 'react'
import "./book/book.css"
import { Link } from "react-router-dom"
import { Box, Button, Typography } from '@mui/material';

const Home = () => {
  return (
    <div>
    <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
      <Typography sx={{ fontWeight: "700", marginTop: "150px" }} variant="h3">
        CRUD Apllication
      </Typography>
      <Typography  variant = "h7">By MERN Stack</Typography>
      <Typography  variant = "h7">Designed by: Priestly Patrick Bassey</Typography>
      <div className='intro'>
        <Button
        sx={{
          background: 'black'
        }}
        LinkComponent={Link} to="/books"
        varaint="contained">
          <Typography sx={{ fontWeight: "700" }} variant = "h6">View all product</Typography>
        </Button>
      </div>
    </Box></div>
  )
}

export default Home