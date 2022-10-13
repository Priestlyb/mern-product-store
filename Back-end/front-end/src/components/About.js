import React from 'react';
import "./book/book.css"
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
        <Typography sx={{ fontWeight: "700", marginTop: "25px" }} variant="h3">
          This is a CRUD Apllication
        </Typography>
        <Typography  varient = "h3">By MERN Stack</Typography>
        <div className='intro'>
        <Typography sx={{ fontWeight: "700" }} varient = "h3">What is CRUD?</Typography>
        <Typography varient = "p">CRUD Meaning: CRUD is an acronym that comes from the world of computer programming and refers to the four functions that are considered necessary to implement a persistent storage application: create, read, update and delete. Persistent storage refers to any data storage device that retains power after the device is powered off, such as a hard disk or a solid-state drive. In contrast, random access memory and internal caching are two examples of volatile memory - they contain data that will be erased when they lose power.</Typography>
        <Typography sx={{ fontWeight: "700" }} varient = "h6">Explaining CRUD Operations</Typography>
        <Typography varient = "p">Organizations that keep track of customer data, accounts, payment information, health data, and other records require data storage hardware and applications that provide persistent storage. This data is typically organized into a database, which is simply an organized collection of data that may be viewed electronically. There are many types of databases: hierarchical databases, graph databases, and object-oriented databases to name a few. The most commonly implemented type of database is a relational database, which consists of data tabled in rows and columns and connected to other tables with complementary information by a system of keywords that includes primary keys and foreign keys.</Typography>
        <Typography sx={{ fontWeight: "700" }} varient = "h6">CRUD Databases and the Applications to Manage Them</Typography>
        <Typography varient = "p">The CRUD acronym identifies all of the major functions that are inherent to relational databases and the applications used to manage them, which include Oracle Database, Microsoft SQL Server, MySQL, and others.</Typography>
        </div>
      </Box>
    </div>
  )
}

export default About