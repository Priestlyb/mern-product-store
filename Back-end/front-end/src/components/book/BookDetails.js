import axios from 'axios';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Button, FormLabel, TextField, FormControlLabel, Checkbox } from '@mui/material';

const BookDetail = () => {
  const history = useNavigate(); 
    const [inputs, setInputs] = useState({})
    const id = useParams().id;
    useEffect(() => {
        const fetchHandler = async () => {
            await axios
            .get(`http://localhost:5000/books/${id}`)
            .then((res)=> res.data)
            .then(data => setInputs(data.book));
        };
        fetchHandler();
    }, [id]);
    const [checked, setChecked] = useState(false);

    const sendRequest = async () => {
      axios.put(`http://localhost:5000/books/${id}`, {
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
        available: Boolean(checked)
      }).then(res => res.data);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs, checked);
        sendRequest().then(()=>history("/books"));
       }
       const handleChange = (e) => {
        setInputs((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value
        }))
    //  console.log(e.target.name, "value", e.target.value);
  };


  return (
    <div>
    { inputs && <form onSubmit={handleSubmit}>
    <Box
      display={"flex"}
      flexDirection="column"
      margin= "50px"
      maxWidth={500}
    >
      <FormLabel>Name</FormLabel>
      <TextField
      value={inputs.name}
      onChange={handleChange}
      margin="normal" fullWidth variant="outlined" name="name"/>

      <FormLabel>Author</FormLabel>
      <TextField
      value={inputs.author}
      onChange={handleChange} margin="normal" fullWidth variant="outlined" name="author"/>

      <FormLabel>Description</FormLabel>
      <TextField
      value={inputs.description}
      onChange={handleChange} margin="normal" fullWidth variant="outlined" name="description"/>

      <FormLabel>Price</FormLabel>
      <TextField
      value={inputs.price}
      onChange={handleChange} type="number" margin="normal" fullWidth variant="outlined" name="price"/>

      <FormLabel>Image</FormLabel>
      <TextField
      value={inputs.image}
      onChange={handleChange} margin="normal" fullWidth variant="outlined" name="image"/>

      <FormControlLabel control={<Checkbox checked={checked} onChange={()=> setChecked(!checked)} />} label="Available" />

      <Button variant="contained" type="submit">Update Book</Button>
    </Box>
    </form>}
    </div>
  )
}

export default BookDetail